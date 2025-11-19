import { NextRequest, NextResponse } from 'next/server'
import { v4 as uuidv4 } from 'uuid'
import { investorFormSchema, type ApiResponse } from '@/types/forms'
import { appendRowToSheet, validateGoogleSheetsConfig } from '@/lib/google-sheets'

export async function POST(request: NextRequest) {
  try {
    // Validate environment configuration
    validateGoogleSheetsConfig()

    // Parse and validate request body
    const body = await request.json()
    const validationResult = investorFormSchema.safeParse(body)

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
    // Submission ID | Timestamp | Name | Email | Phone | Investment Type | Preferred Industry | Risk Appetite | Country
    const rowData = [
      submissionId,
      timestamp,
      data.name,
      data.email,
      data.phone,
      data.investmentType,
      data.preferredIndustry,
      data.riskAppetite,
      data.country,
    ]

    // Append to "Investors" sheet
    await appendRowToSheet('Investors', rowData)

    return NextResponse.json<ApiResponse>(
      {
        success: true,
        submissionId,
        message: 'Investor application submitted successfully!',
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error submitting investor form:', error)
    
    return NextResponse.json<ApiResponse>(
      {
        success: false,
        error: error instanceof Error ? error.message : 'An unexpected error occurred',
      },
      { status: 500 }
    )
  }
}

