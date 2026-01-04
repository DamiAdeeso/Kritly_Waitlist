import { NextRequest, NextResponse } from 'next/server'
import { google } from 'googleapis'

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

    // Google Sheets configuration
    const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID
    const RANGE = process.env.GOOGLE_SHEET_RANGE || 'Sheet1!A:B'

    if (!SPREADSHEET_ID) {
      console.error('GOOGLE_SHEET_ID is not set')
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      )
    }

    // Authenticate with Google Sheets API
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    })

    const sheets = google.sheets({ version: 'v4', auth })

    // Check if email already exists
    const existingData = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: RANGE,
    })

    const rows = existingData.data.values || []
    const emailExists = rows.some((row: any[]) => row[0]?.toLowerCase() === email.toLowerCase())

    if (emailExists) {
      return NextResponse.json(
        { error: 'This email is already on the waitlist' },
        { status: 409 }
      )
    }

    // Add new entry to Google Sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: RANGE,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[email, name, new Date().toISOString()]],
      },
    })

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

