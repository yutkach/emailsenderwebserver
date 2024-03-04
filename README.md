# email-sender-server

A simple server package for sending emails using Node.js with EmailSenderSDK.

## Installation

To install the `email-sender-server` package, run the following command:

```bash
npm install email-sender-server
```

## Usage

```javascript
const EmailSenderServer = require('email-sender-server');
const smtpConfig = {
  host: 'smtp.example.com',
  port: 587,
  secure: false,
  auth: {
    user: 'user@example.com',
    pass: 'password'
  }
};
const emailServer = new EmailSenderServer(smtpConfig);
emailServer.start(3000);
```

Replace `'smtp.example.com'`, `'user@example.com'`, and `'password'` with your actual SMTP server hostname, email address, and password respectively. Additionally, adjust the port as needed.

## Configuration

Before using the server, make sure to replace `'smtp.example.com'`, `'user@example.com'`, and `'password'` with your actual SMTP server hostname, email address, and password respectively.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
