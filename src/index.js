// emailSenderServer.js

const http = require('http');
const EmailSenderSDK = require('emailsendersdk');

class EmailSenderServer {
  constructor(smtpConfig) {
    this.emailSender = new EmailSenderSDK(smtpConfig);
  }

  start(port = 3000) {
    const server = http.createServer((req, res) => {
      if (req.url === '/send-email' && req.method === 'POST') {
        let body = '';

        req.on('data', chunk => {
          body += chunk.toString();
        });

        req.on('end', async () => {
          try {
            const emailOptions = JSON.parse(body);
            const info = await this.emailSender.sendEmail(emailOptions);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Email sent successfully', info }));
          } catch (error) {
            console.error('Error sending email:', error);
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Error sending email' }));
          }
        });
      } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Page not found');
      }
    });

    server.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  }
}

module.exports = EmailSenderServer;
