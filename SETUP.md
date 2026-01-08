# Quick Setup Guide

## 1. Install Dependencies

```bash
npm install
```

## 2. Set Up Google Sheets Integration (Using Google Apps Script)

### Step 1: Create Google Sheet
1. Create a new Google Sheet
2. Add headers in row 1:
   - Column A: `Email`
   - Column B: `Name`
   - Column C: `Timestamp`

### Step 2: Create Google Apps Script
1. In your Google Sheet, go to **Extensions** > **Apps Script**
2. Delete any existing code and paste this:

function doPost(e) {
  try {
    // Parse the incoming data (can be JSON or form data)
    let email, name;
    
    if (e.postData && e.postData.contents) {
      // Try to parse as JSON first
      try {
        const data = JSON.parse(e.postData.contents);
        email = data.email;
        name = data.name;
      } catch (jsonError) {
        // If not JSON, try form data
        const params = e.parameter;
        email = params.email;
        name = params.name;
      }
    } else {
      // Fallback to parameters (form data)
      email = e.parameter.email;
      name = e.parameter.name;
    }
    
    // Validate input
    if (!email || !name) {
      return ContentService.createTextOutput(
        JSON.stringify({ error: 'Email and name are required' })
      ).setMimeType(ContentService.MimeType.JSON);
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return ContentService.createTextOutput(
        JSON.stringify({ error: 'Invalid email format' })
      ).setMimeType(ContentService.MimeType.JSON);
    }
    
    // Get the active sheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Get all existing emails (column A, starting from row 2)
    const lastRow = sheet.getLastRow();
    let emailExists = false;
    
    if (lastRow > 1) {
      const emails = sheet.getRange(2, 1, lastRow - 1, 1).getValues();
      emailExists = emails.some(row => row[0] && row[0].toString().toLowerCase() === email.toLowerCase());
    }
    
    if (emailExists) {
      return ContentService.createTextOutput(
        JSON.stringify({ error: 'This email is already on the waitlist' })
      ).setMimeType(ContentService.MimeType.JSON);
    }
    
    // Add new row with email, name, and timestamp
    const timestamp = new Date().toISOString();
    sheet.appendRow([email, name, timestamp]);
    
    // Return success response
    return ContentService.createTextOutput(
      JSON.stringify({ message: 'Successfully added to waitlist' })
    ).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({ error: 'Failed to add to waitlist. Please try again later.' })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}
```

3. Click **Save** (or press Ctrl+S / Cmd+S)
4. Name your project (e.g., "Kritly Waitlist")

### Step 3: Deploy as Web App
1. Click **Deploy** > **New deployment**
2. Click the gear icon ⚙️ next to "Select type" and choose **Web app**
3. Configure the deployment:
   - **Description**: "Kritly Waitlist API"
   - **Execute as**: Me (your email)
   - **Who has access**: Anyone
4. Click **Deploy**
5. **Authorize access**:
   - Click **Authorize access**
   - Choose your Google account
   - Click **Advanced** > **Go to [project name] (unsafe)**
   - Click **Allow**
6. **Copy the Web App URL** (looks like: `https://script.google.com/macros/s/.../exec`)
   - This is your `GOOGLE_SCRIPT_URL`

### Step 4: Configure Environment Variables
1. Copy `env.example` to `.env.local`:
   ```bash
   cp env.example .env.local
   ```
2. Open `.env.local` and fill in:
   - `GOOGLE_SCRIPT_URL`: Paste the Web App URL you copied in Step 3
   - `NEXT_PUBLIC_SITE_URL`: Your domain (e.g., `https://kritly.com`)

## 3. Add Your Logo

1. Place your Kritly logo at: `public/images/logo.png`
2. Update `app/page.tsx` (around line 50-60) to use your logo:

```tsx
<Image
  src="/images/logo.png"
  alt="Kritly Logo"
  width={160}
  height={160}
  className="object-contain"
  priority
/>
```

## 4. Run Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## 5. Test Waitlist Submission

1. Fill out the form with a test email
2. Check your Google Sheet - you should see the entry appear!

## Troubleshooting

### "Server configuration error"
- Check that `GOOGLE_SCRIPT_URL` is set in `.env.local`
- Verify the URL is correct (should end with `/exec`)

### "Failed to add to waitlist"
- Check that the Google Apps Script is deployed as a Web App
- Verify "Who has access" is set to "Anyone"
- Check the Apps Script execution logs (in Apps Script editor, go to **Executions**)
- Make sure the sheet has headers in row 1 (Email, Name, Timestamp)

### "This email is already on the waitlist"
- This means the duplicate check is working correctly
- Try with a different email address

### Logo not showing
- Ensure the file is at `public/images/logo.png`
- Check the file name matches exactly (case-sensitive)
- Try clearing browser cache








