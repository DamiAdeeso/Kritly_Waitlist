import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { email, name } = await request.json()

    // Validate input
    if (!email || !name) {
      return NextResponse.json(
        { error: 'Email and name are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Get Google Apps Script Web App URL from environment variable
    const SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL

    if (!SCRIPT_URL) {
      console.error('GOOGLE_SCRIPT_URL is not set in environment variables')
      return NextResponse.json(
        { error: 'Server configuration error. Please contact support.' },
        { status: 500 }
      )
    }

    // Validate URL format
    if (!SCRIPT_URL.includes('script.google.com/macros/s/') || !SCRIPT_URL.endsWith('/exec')) {
      console.error('Invalid GOOGLE_SCRIPT_URL format. Should be: https://script.google.com/macros/s/SCRIPT_ID/exec')
      console.error('Current URL:', SCRIPT_URL)
      return NextResponse.json(
        { error: 'Server configuration error. Invalid script URL format.' },
        { status: 500 }
      )
    }

    console.log('Sending request to Google Apps Script:', SCRIPT_URL)

    // Send data to Google Apps Script
    // Try using URL-encoded form data (more compatible with Google Apps Script)
    let response: Response
    try {
      // Convert to URL-encoded form data
      const formData = new URLSearchParams()
      formData.append('email', email)
      formData.append('name', name)

      response = await fetch(SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData.toString(),
        redirect: 'follow', // Follow redirects
      })
    } catch (fetchError) {
      console.error('Failed to fetch from Google Apps Script:', fetchError)
      return NextResponse.json(
        { error: 'Failed to connect to waitlist service. Please try again later.' },
        { status: 500 }
      )
    }

    // Check if response is ok
    if (!response.ok) {
      console.error('Google Apps Script returned error status:', response.status, response.statusText)
      const errorText = await response.text().catch(() => 'Unknown error')
      console.error('Error response body:', errorText)
      return NextResponse.json(
        { error: 'Waitlist service error. Please try again later.' },
        { status: 500 }
      )
    }

    // Parse JSON response
    let result: any
    try {
      const responseText = await response.text()
      console.log('Google Apps Script response:', responseText) // Debug log
      result = JSON.parse(responseText)
    } catch (parseError) {
      console.error('Failed to parse Google Apps Script response:', parseError)
      // Response text is already consumed, but we logged it above
      return NextResponse.json(
        { error: 'Invalid response from waitlist service. Please try again later.' },
        { status: 500 }
      )
    }

    // Handle errors from Google Apps Script
    if (result.error) {
      // Handle specific error cases
      if (result.error.includes('already on the waitlist')) {
        return NextResponse.json(
          { error: result.error },
          { status: 409 }
        )
      }
      return NextResponse.json(
        { error: result.error },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { message: 'Successfully added to waitlist' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error adding to waitlist:', error)
    return NextResponse.json(
      { error: 'Failed to add to waitlist. Please try again later.' },
      { status: 500 }
    )
  }
}

