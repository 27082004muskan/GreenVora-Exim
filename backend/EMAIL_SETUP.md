# Email Notification Setup

Email notifications are now configured to send you an email whenever someone submits the contact form.

## Configuration Steps

1. **Create a `.env` file** in the `backend` directory (if you don't have one already)

2. **Add the following email configuration variables** to your `.env` file:

```env
# Email Configuration (SMTP)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-specific-password

# Email address to receive notifications
# If not set, will use SMTP_USER
NOTIFICATION_EMAIL=your-notification-email@gmail.com
```

## Email Provider Setup

### For Gmail:
1. Go to your Google Account settings
2. Enable "2-Step Verification"
3. Generate an "App Password" for this application
4. Use the app password as `SMTP_PASSWORD`
5. Set `SMTP_HOST=smtp.gmail.com` and `SMTP_PORT=587`

### For Outlook/Hotmail:
- `SMTP_HOST=smtp-mail.outlook.com`
- `SMTP_PORT=587`
- Use your regular email and password

### For Other Providers:
Check your email provider's SMTP settings documentation.

## Testing

After configuring your `.env` file, restart your backend server. When someone submits the contact form, you'll receive an email notification with:
- Name of the person
- Their email address
- Their message
- Timestamp of submission

## Notes

- The email notification won't block the form submission - even if email fails, the enquiry will still be saved to the database
- Make sure your `.env` file is in `.gitignore` to keep your credentials secure
