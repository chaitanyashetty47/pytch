import { google } from 'googleapis'

// Initialize Google Sheets API client
function getGoogleSheetsClient() {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  })

  return google.sheets({ version: 'v4', auth })
}

/**
 * Append a row to a specific sheet in the Google Spreadsheet
 * @param sheetName - Name of the sheet (e.g., "Startups" or "Investors")
 * @param values - Array of values to append as a new row
 * @returns Promise resolving to the append result
 */
export async function appendRowToSheet(
  sheetName: string,
  values: (string | number)[]
): Promise<void> {
  const sheets = getGoogleSheetsClient()
  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID

  if (!spreadsheetId) {
    throw new Error('GOOGLE_SHEETS_SPREADSHEET_ID is not configured')
  }

  try {
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: `${sheetName}!A:Z`,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [values],
      },
    })
  } catch (error) {
    console.error('Error appending to Google Sheets:', error)
    throw new Error('Failed to save data to Google Sheets')
  }
}

/**
 * Validate that the required environment variables are set
 */
export function validateGoogleSheetsConfig(): void {
  const requiredEnvVars = [
    'GOOGLE_SHEETS_SPREADSHEET_ID',
    'GOOGLE_SERVICE_ACCOUNT_EMAIL',
    'GOOGLE_PRIVATE_KEY',
  ]

  const missingVars = requiredEnvVars.filter((varName) => !process.env[varName])

  if (missingVars.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missingVars.join(', ')}`
    )
  }
}

