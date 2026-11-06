import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { Resend } from 'resend'

function resendDevPlugin() {
  const RECIPIENT_EMAIL = 'emmanuelryan4621@gmail.com'

  return {
    name: 'resend-dev-backend',
    configureServer(server) {
      server.middlewares.use('/api/enquiry', async (req, res) => {
        if (req.method !== 'POST') {
          res.statusCode = 405
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify({ error: 'Method not allowed' }))
          return
        }

        let body = ''
        req.on('data', (chunk) => {
          body += chunk
        })

        req.on('end', async () => {
          try {
            const formData = JSON.parse(body || '{}')
            const env = loadEnv('', process.cwd(), '')
            const apiKey = env.RESEND_API_KEY || process.env.RESEND_API_KEY

            const {
              firstName = '',
              lastName = '',
              email = '',
              phone = '',
              natureOfEnquiry = '',
              contactPreference = '',
              message = '',
            } = formData

            if (!email || !phone) {
              res.statusCode = 400
              res.setHeader('Content-Type', 'application/json')
              res.end(JSON.stringify({ success: false, error: 'Email and phone number are required.' }))
              return
            }

            const fullName = `${firstName.trim()} ${lastName.trim()}`.trim() || 'Not provided'
            const formattedDate = new Date().toLocaleString('en-US', {
              timeZone: 'Africa/Lagos',
              dateStyle: 'full',
              timeStyle: 'medium',
            })

            const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>New Patient Enquiry - Beacon Health</title>
</head>
<body style="margin: 0; padding: 24px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f1f5f9; color: #0f172a;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width: 640px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 16px rgba(15, 23, 42, 0.08); border: 1px solid #e2e8f0;">
    <tr>
      <td style="background-color: #071c35; padding: 32px 36px;">
        <h1 style="margin: 0 0 6px; font-size: 22px; font-weight: 700; color: #ffffff;">New Patient Enquiry</h1>
        <p style="margin: 0; font-size: 14px; color: #94a3b8;">Beacon Health Patient Enquiry Form</p>
      </td>
    </tr>
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
    <tr>
      <td style="background-color: #f8fafc; border-top: 1px solid #e2e8f0; padding: 20px 36px; text-align: center; font-size: 12px; color: #94a3b8;">
        Delivered to <strong>${RECIPIENT_EMAIL}</strong> via Beacon Health Enquiry System.
      </td>
    </tr>
  </table>
</body>
</html>`

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

            if (!apiKey || apiKey.trim() === '' || apiKey.includes('your_resend_api_key_here')) {
              console.warn('[Beacon Health] RESEND_API_KEY is not configured in .env. Enquiry logged:')
              console.log(text)
              res.statusCode = 200
              res.setHeader('Content-Type', 'application/json')
              res.end(JSON.stringify({ success: true, mock: true, message: 'Enquiry received. Please configure RESEND_API_KEY in .env.' }))
              return
            }

            const resend = new Resend(apiKey.trim())
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
              res.statusCode = 500
              res.setHeader('Content-Type', 'application/json')
              res.end(JSON.stringify({ success: false, error: error.message }))
              return
            }

            console.log('[Beacon Health] Email sent to', RECIPIENT_EMAIL, 'ID:', data?.id)
            res.statusCode = 200
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ success: true, data }))
          } catch (err) {
            console.error('[Beacon Health Error]', err)
            res.statusCode = 500
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ success: false, error: err.message }))
          }
        })
      })
    },
  }
}

export default defineConfig({
  plugins: [react(), resendDevPlugin()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      },
    },
  },
})
