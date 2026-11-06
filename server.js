import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { Resend } from 'resend'

dotenv.config()

const app = express()
const port = process.env.PORT || 5000

// Middleware
app.use(cors())
app.use(express.json())

const RECIPIENT_EMAIL = 'emmanuelryan4621@gmail.com'

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', service: 'Beacon Health API' })
})

app.post('/api/enquiry', async (req, res) => {
  try {
    const {
      firstName = '',
      lastName = '',
      email = '',
      phone = '',
      natureOfEnquiry = '',
      contactPreference = '',
      message = '',
    } = req.body

    // Basic validation
    if (!email || !phone) {
      return res.status(400).json({
        success: false,
        error: 'Email address and phone number are required fields.',
      })
    }

    const fullName = `${firstName.trim()} ${lastName.trim()}`.trim() || 'Not provided'
    const formattedDate = new Date().toLocaleString('en-US', {
      timeZone: 'Africa/Lagos',
      dateStyle: 'full',
      timeStyle: 'medium',
    })

    // Structured HTML email template
    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Patient Enquiry - Beacon Health</title>
</head>
<body style="margin: 0; padding: 24px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f1f5f9; color: #0f172a;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width: 640px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 16px rgba(15, 23, 42, 0.08); border: 1px solid #e2e8f0;">
    <!-- Header -->
    <tr>
      <td style="background-color: #071c35; padding: 32px 36px; text-align: left;">
        <h1 style="margin: 0 0 6px; font-size: 22px; font-weight: 700; color: #ffffff; letter-spacing: -0.02em;">
          New Patient Enquiry
        </h1>
        <p style="margin: 0; font-size: 14px; color: #94a3b8;">
          Beacon Health Website &bull; Enquiry Form Submission
        </p>
      </td>
    </tr>

    <!-- Body -->
    <tr>
      <td style="padding: 36px;">
        <h2 style="margin: 0 0 16px; font-size: 13px; text-transform: uppercase; letter-spacing: 0.08em; color: #64748b; font-weight: 700; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px;">
          Patient Details
        </h2>

        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse: collapse; margin-bottom: 28px;">
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; width: 36%; font-size: 14px; font-weight: 600; color: #64748b;">Full Name</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; width: 64%; font-size: 15px; font-weight: 600; color: #071c35;">${fullName}</td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-size: 14px; font-weight: 600; color: #64748b;">Email Address</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-size: 15px; color: #071c35;">
              <a href="mailto:${email}" style="color: #12435c; text-decoration: none; font-weight: 600;">${email}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-size: 14px; font-weight: 600; color: #64748b;">Phone Number</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-size: 15px; color: #071c35;">
              <a href="tel:${phone}" style="color: #12435c; text-decoration: none; font-weight: 600;">${phone}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-size: 14px; font-weight: 600; color: #64748b;">Nature of Enquiry</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-size: 14px; color: #071c35;">
              <span style="display: inline-block; padding: 4px 10px; background-color: #fef3c7; color: #92400e; border-radius: 6px; font-weight: 600; font-size: 13px;">
                ${natureOfEnquiry || 'General Consultation'}
              </span>
            </td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-size: 14px; font-weight: 600; color: #64748b;">Preferred Contact</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-size: 14px; color: #071c35;">
              <span style="display: inline-block; padding: 4px 10px; background-color: #e0f2fe; color: #0369a1; border-radius: 6px; font-weight: 600; font-size: 13px;">
                ${contactPreference || 'Any'}
              </span>
            </td>
          </tr>
          <tr>
            <td style="padding: 12px 0; font-size: 14px; font-weight: 600; color: #64748b;">Submitted At</td>
            <td style="padding: 12px 0; font-size: 13px; color: #64748b;">${formattedDate}</td>
          </tr>
        </table>

        <h2 style="margin: 0 0 12px; font-size: 13px; text-transform: uppercase; letter-spacing: 0.08em; color: #64748b; font-weight: 700; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px;">
          Patient Message
        </h2>

        <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 18px 20px; font-size: 14px; line-height: 1.65; color: #334155; white-space: pre-wrap;">
${message ? message : '<em>No additional message was provided by the patient.</em>'}
        </div>
      </td>
    </tr>

    <!-- Footer -->
    <tr>
      <td style="background-color: #f8fafc; border-top: 1px solid #e2e8f0; padding: 20px 36px; text-align: center; font-size: 12px; color: #94a3b8; line-height: 1.5;">
        This automated notification was delivered to <strong>${RECIPIENT_EMAIL}</strong> via the Beacon Health enquiry backend.
      </td>
    </tr>
  </table>
</body>
</html>
`

    // Plain text version for fallback
    const text = `
NEW PATIENT ENQUIRY - BEACON HEALTH
====================================================
Full Name:             ${fullName}
Email Address:         ${email}
Phone Number:          ${phone}
Nature of Enquiry:     ${natureOfEnquiry || 'General Consultation'}
Preferred Contact:     ${contactPreference || 'Any'}
Submission Time:       ${formattedDate}

PATIENT MESSAGE:
----------------------------------------------------
${message || 'No additional message was provided.'}
====================================================
`

    const resendApiKey = process.env.RESEND_API_KEY
    if (!resendApiKey || resendApiKey.trim() === '' || resendApiKey.includes('your_resend_api_key_here')) {
      console.warn('[Beacon Health API] RESEND_API_KEY is not configured in .env. Enquiry received:')
      console.log(text)
      return res.status(200).json({
        success: true,
        mock: true,
        message: 'Enquiry received successfully. Please add your RESEND_API_KEY to .env to send live emails.',
      })
    }

    const resend = new Resend(resendApiKey.trim())

    const { data, error } = await resend.emails.send({
      from: 'Beacon Health <onboarding@resend.dev>',
      to: [RECIPIENT_EMAIL],
      replyTo: email,
      subject: `New Patient Enquiry: ${fullName} - ${natureOfEnquiry || 'General Consultation'}`,
      html,
      text,
    })

    if (error) {
      console.error('[Resend Error]', error)
      return res.status(500).json({
        success: false,
        error: error.message || 'Failed to send email via Resend',
      })
    }

    console.log('[Beacon Health API] Email successfully sent to', RECIPIENT_EMAIL, 'ID:', data?.id)
    return res.status(200).json({
      success: true,
      data,
    })
  } catch (err) {
    console.error('[Beacon Health API Error]', err)
    return res.status(500).json({
      success: false,
      error: err.message || 'Internal server error',
    })
  }
})

app.listen(port, () => {
  console.log(`[Beacon Health Backend] Server running on http://localhost:${port}`)
  console.log(`[Beacon Health Backend] Recipient email set to: ${RECIPIENT_EMAIL}`)
})
