# Quick Setup Guide

## 1. Install Dependencies

```bash
npm install
```

## 2. Set Up Google Sheets Integration

### Step 1: Create Google Cloud Project
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable **Google Sheets API**

### Step 2: Create Service Account
1. Navigate to **IAM & Admin** > **Service Accounts**
2. Click **Create Service Account**
3. Give it a name (e.g., "kritly-waitlist")
4. Click **Create and Continue**
5. Skip role assignment, click **Continue**
6. Click **Done**

### Step 3: Create Key
1. Click on the service account you just created
2. Go to **Keys** tab
3. Click **Add Key** > **Create new key**
4. Choose **JSON** format
5. Download the JSON file

### Step 4: Create Google Sheet
1. Create a new Google Sheet
2. Add headers in row 1: `Email | Name | Timestamp`
3. Copy the Spreadsheet ID from the URL:
   - URL format: `https://docs.google.com/spreadsheets/d/SPREADSHEET_ID/edit`
   - Copy the `SPREADSHEET_ID` part
4. Share the sheet with the service account email (found in the JSON file)
   - Click **Share** button
   - Paste the service account email
   - Give it **Editor** permissions
   - Click **Send**

### Step 5: Configure Environment Variables
1. Copy `env.example` to `.env.local`
2. Fill in the values:
   - `GOOGLE_SHEET_ID`: The Spreadsheet ID you copied
   - `GOOGLE_SHEET_RANGE`: `Sheet1!A2:C` (starts from row 2 to skip headers)
   - `GOOGLE_SERVICE_ACCOUNT_EMAIL`: From the JSON file (`client_email`)
   - `GOOGLE_PRIVATE_KEY`: From the JSON file (`private_key`) - keep the quotes and \n
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
- Check that all environment variables are set in `.env.local`
- Verify the service account email has access to the sheet

### "Failed to add to waitlist"
- Check that the Google Sheets API is enabled
- Verify the service account has Editor permissions on the sheet
- Check the range matches your sheet structure

### Logo not showing
- Ensure the file is at `public/images/logo.png`
- Check the file name matches exactly (case-sensitive)
- Try clearing browser cache





