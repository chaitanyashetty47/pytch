# Google Sheets Integration Setup Guide

This guide will help you configure Google Sheets API integration for the PYTCH form submissions.

## Prerequisites

1. A Google account
2. Access to Google Cloud Console
3. A Google Spreadsheet to store form submissions

## Step-by-Step Setup

### 1. Create Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Click on the project dropdown at the top
3. Click "New Project"
4. Enter a project name (e.g., "PYTCH Forms")
5. Click "Create"

### 2. Enable Google Sheets API

1. In the Google Cloud Console, go to "APIs & Services" > "Library"
2. Search for "Google Sheets API"
3. Click on it and click "Enable"

### 3. Create Service Account

1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "Service Account"
3. Enter a service account name (e.g., "pytch-forms-service")
4. Click "Create and Continue"
5. For role, select "Editor" (or "Project > Editor")
6. Click "Continue" and then "Done"

### 4. Create Service Account Key

1. In the Credentials page, find your service account in the list
2. Click on the service account email
3. Go to the "Keys" tab
4. Click "Add Key" > "Create new key"
5. Select "JSON" and click "Create"
6. A JSON file will be downloaded - **keep this secure!**

### 5. Prepare Your Google Spreadsheet

1. Create a new Google Spreadsheet or open an existing one
2. Create two sheets with these exact names: **"Startups"** and **"Investors"**

3. In the **"Startups"** sheet, add these headers in Row 1:
   ```
   Submission ID | Timestamp | Startup Name | Founder Name | Email | Phone | Stage | Industry | Funding Required | LinkedIn | Twitter
   ```

4. In the **"Investors"** sheet, add these headers in Row 1:
   ```
   Submission ID | Timestamp | Name | Email | Phone | Investment Type | Preferred Industry | Risk Appetite | Country
   ```

5. **Important**: Share the spreadsheet with the service account
   - Click "Share" button in your spreadsheet
   - Paste the service account email (found in your JSON file as `client_email`)
   - Give it "Editor" access
   - Click "Share"

### 6. Configure Environment Variables

1. In your project root, create a file named `.env.local` (it's gitignored by default)

2. Add the following variables:

```env
# Get the Spreadsheet ID from the URL
# Example URL: https://docs.google.com/spreadsheets/d/1ABC123xyz456/edit
# The ID is: 1ABC123xyz456
GOOGLE_SHEETS_SPREADSHEET_ID=your_spreadsheet_id_here

# From the JSON file's "client_email" field
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account@your-project.iam.gserviceaccount.com

# From the JSON file's "private_key" field
# Keep the quotes and \n characters as they are
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYourActualPrivateKeyHere\n-----END PRIVATE KEY-----\n"
```

### 7. Extract Values from JSON Key File

Open the downloaded JSON file and find these values:

- **GOOGLE_SERVICE_ACCOUNT_EMAIL**: Copy the value of `client_email`
- **GOOGLE_PRIVATE_KEY**: Copy the value of `private_key` (including the quotes and `\n` characters)
- **GOOGLE_SHEETS_SPREADSHEET_ID**: Get this from your spreadsheet URL

Example JSON structure:
```json
{
  "type": "service_account",
  "project_id": "your-project",
  "private_key_id": "...",
  "private_key": "-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n",
  "client_email": "your-service-account@your-project.iam.gserviceaccount.com",
  "client_id": "...",
  ...
}
```

## Testing the Integration

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Open your application and navigate to the form
3. Fill out either the Startup or Investor form
4. Submit the form
5. Check your Google Spreadsheet - a new row should appear with:
   - A unique submission ID (UUID)
   - Current timestamp
   - All form data in the appropriate columns

## Troubleshooting

### Error: "Missing required environment variables"
- Ensure all three environment variables are set in `.env.local`
- Restart your development server after adding environment variables

### Error: "Failed to save data to Google Sheets"
- Verify the service account email has been given Editor access to your spreadsheet
- Check that the spreadsheet ID in `.env.local` matches your actual spreadsheet
- Ensure the sheet names are exactly "Startups" and "Investors" (case-sensitive)

### Error: "Invalid private key"
- Make sure the private key includes the entire string with quotes
- Keep the `\n` characters - they represent newlines
- The key should start with `"-----BEGIN PRIVATE KEY-----\n` and end with `\n-----END PRIVATE KEY-----\n"`

### Data not appearing in sheets
- Check the browser console for errors
- Verify that the sheet names exactly match "Startups" and "Investors"
- Ensure headers are in Row 1 of each sheet
- Check the server logs for detailed error messages

## Security Notes

⚠️ **Important Security Reminders:**

1. **Never commit `.env.local`** to version control (it's in `.gitignore` by default)
2. **Never share your service account JSON key file**
3. **Keep your private key secure** - anyone with it can access your Google Sheets
4. **Rotate keys periodically** for enhanced security
5. If you accidentally expose credentials, immediately:
   - Delete the service account key in Google Cloud Console
   - Create a new key
   - Update your `.env.local`

## Production Deployment

When deploying to production (Vercel, Netlify, etc.):

1. Add the three environment variables in your hosting platform's environment settings
2. For the `GOOGLE_PRIVATE_KEY`, you may need to:
   - Keep the newline characters (`\n`) as literal `\n` (not actual newlines)
   - Some platforms allow pasting the entire key including quotes
   - Others require removing outer quotes but keeping internal `\n` sequences

## Support

If you encounter issues:
1. Check the browser console for client-side errors
2. Check server logs for API errors
3. Verify all environment variables are correctly set
4. Ensure the service account has proper permissions

---

**Status**: Setup complete! Forms will now save to Google Sheets with timestamps and unique submission IDs.

