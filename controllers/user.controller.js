const nodemailer = require("nodemailer");

exports.registerUser = async (req, res) => {
  try {
    const { fullName, legalIssue, email, phoneNumber, message } = req.body;
    if (!fullName || !legalIssue || !email || !phoneNumber || !message) {
      return res.status(400).json({ error: "Required fields missing" });
    }

    const transporter = nodemailer.createTransport({
      name: "hostgator",
      host: "gator3008.hostgator.com",
      port: 587,
      // secure: true,
      auth: {
        user: "syndrome-noreply@clouddatanetworks.com",
        pass: "CDN@Syndeo@",
      },
    });

    var mailOptions = {
      from: "syndrome-noreply@clouddatanetworks.com",
      to: email,
      subject:
        "Welcome to Mannam Law!!! 🎉 🎉. Thank you for registering with us",
      html: `<!DOCTYPE html>
    <html>
      <head>
        <style>
        body {
          font-family: Arial, sans-serif;
          height: 100%;
          width: 100%;
        }
  
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-color: #fff;
          border-radius: 5px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }
    
          .header {
            text-align: center;
            margin-bottom: 20px;
          }
    
          .header h1 {
            color: #333;
            font-size: 22px;
            font-weight: 600;
            text-align: center;
          }
    
          .content {
            margin-bottom: 30px;
          }
    
          .content p {
            margin: 0 0 10px;
            line-height: 1.5;
          }
    
          .content #para p {
            margin-top: 20px;
          }
    
          .content .button {
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 20px;
            margin-bottom: 20px;
          }
    
          .content .button a {
            border-radius: 40px;
            padding-top: 16px;
            padding-bottom: 16px;
            padding-left: 100px;
            padding-right: 100px;
            background-color: #007ae1;
            text-decoration: none;
            color: white;
            font-weight: 600;
          }
    
          /* .footer {
            text-align: center;
          } */
    
          .footer p {
            color: #999;
            font-size: 14px;
            margin: 0;
            margin-top: 8px;
            margin-bottom: 8px;
          }
        </style>
      </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Verify your email address to complete registration</h1>
            </div>
            <div class="content">
              <p id="para">Greetings, <span style="font-weight: bold">${fullName} !</span></p>
              <p>
                Thank you for your interest in joining Syndèo! To complete your
                registration, we need you to verify your email address.
              </p>
              <p>
                As part of our ongoing efforts to promote trust and protect your
                security, we now require you to obtain an Identity Verification which
                is done by verifying your email.
              </p>
            </div>
            <p>Thanks for helping to keep Syndèo secure!</p>
            <div class="footer">
              <p>Best regards,</p>
              <p>Team Syndèo</p>
            </div>
          </div>
        </body>
    </html>
      `,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        res.status(500).json({ error: "Got Some Errors" });
      } else {
        console.log("This is for the testing purposes");
        return res.status(201).json({ status: true, message: "Email Sent" });
      }
    });
  } catch (error) {
    // next(error);
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
    // throw new ApiError(500, "Internal Server Error");
  }
};
