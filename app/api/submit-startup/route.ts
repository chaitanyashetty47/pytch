import { NextRequest, NextResponse } from 'next/server'
import { v4 as uuidv4 } from 'uuid'
import { startupFormSchema, type ApiResponse } from '@/types/forms'
import { appendRowToSheet, validateGoogleSheetsConfig } from '@/lib/google-sheets'

export async function POST(request: NextRequest) {
  try {
    // Validate environment configuration
    validateGoogleSheetsConfig()

    // Parse and validate request body
    const body = await request.json()
    const validationResult = startupFormSchema.safeParse(body)

    if (!validationResult.success) {
      return NextResponse.json<ApiResponse>(
        {
          success: false,
          error: 'Invalid form data: ' + validationResult.error.issues[0].message,
        },
        { status: 400 }
      )
    }

    const data = validationResult.data

    // Generate submission ID and timestamp
    const submissionId = uuidv4()
    const timestamp = new Date().toISOString()

    // Prepare row data matching the sheet headers:
    // Submission ID | Timestamp | Startup Name | Founder Name | Email | Phone | Stage | Industry | Funding Required | LinkedIn | Twitter
    const rowData = [
      submissionId,
      timestamp,
      data.startupName,
      data.founderName,
      data.email,
      data.phone,
      data.stage,
      data.industry,
      data.fundingRequired,
      data.linkedIn || '',
      data.twitter || '',
    ]

    // Append to "Startups" sheet
    await appendRowToSheet('Startups', rowData)

    return NextResponse.json<ApiResponse>(
      {
        success: true,
        submissionId,
        message: 'Startup application submitted successfully!',
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error submitting startup form:', error)
    
    return NextResponse.json<ApiResponse>(
      {
        success: false,
        error: error instanceof Error ? error.message : 'An unexpected error occurred',
      },
      { status: 500 }
    )
  }
}

