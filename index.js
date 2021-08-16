var nodemailer = require('nodemailer');
require('dotenv').config();
var readline = require('readline');
var rl = readline.createInterface(
    process.stdin, process.stdout);
    const { red, green, blue, yellow, cyan, greenBright, redBright, grey, yellowBright, cyanBright, black, blueBright } = require('chalk');
const presser = String.raw`

▓█████  ███▄ ▄███▓ ▄▄▄       ██▓ ██▓         ██████  ██▓███   ▄▄▄       ███▄ ▄███▓ ███▄ ▄███▓▓█████  ██▀███  
▓█   ▀ ▓██▒▀█▀ ██▒▒████▄    ▓██▒▓██▒       ▒██    ▒ ▓██░  ██▒▒████▄    ▓██▒▀█▀ ██▒▓██▒▀█▀ ██▒▓█   ▀ ▓██ ▒ ██▒
▒███   ▓██    ▓██░▒██  ▀█▄  ▒██▒▒██░       ░ ▓██▄   ▓██░ ██▓▒▒██  ▀█▄  ▓██    ▓██░▓██    ▓██░▒███   ▓██ ░▄█ ▒
▒▓█  ▄ ▒██    ▒██ ░██▄▄▄▄██ ░██░▒██░         ▒   ██▒▒██▄█▓▒ ▒░██▄▄▄▄██ ▒██    ▒██ ▒██    ▒██ ▒▓█  ▄ ▒██▀▀█▄  
░▒████▒▒██▒   ░██▒ ▓█   ▓██▒░██░░██████▒   ▒██████▒▒▒██▒ ░  ░ ▓█   ▓██▒▒██▒   ░██▒▒██▒   ░██▒░▒████▒░██▓ ▒██▒
░░ ▒░ ░░ ▒░   ░  ░ ▒▒   ▓▒█░░▓  ░ ▒░▓  ░   ▒ ▒▓▒ ▒ ░▒▓▒░ ░  ░ ▒▒   ▓▒█░░ ▒░   ░  ░░ ▒░   ░  ░░░ ▒░ ░░ ▒▓ ░▒▓░
 ░ ░  ░░  ░      ░  ▒   ▒▒ ░ ▒ ░░ ░ ▒  ░   ░ ░▒  ░ ░░▒ ░       ▒   ▒▒ ░░  ░      ░░  ░      ░ ░ ░  ░  ░▒ ░ ▒░
   ░   ░      ░     ░   ▒    ▒ ░  ░ ░      ░  ░  ░  ░░         ░   ▒   ░      ░   ░      ░      ░     ░░   ░ 
   ░  ░       ░         ░  ░ ░      ░  ░         ░                 ░  ░       ░          ░      ░  ░   ░     
                                                                                                                                                                                                                          
`;
             console.log(red(presser));
          async function doall() {
               let testAccount = await nodemailer.createTestAccount();
          
        
             let transporter = nodemailer.createTransport({
               host: "smtp.ethereal.email",
               port: 587,
               secure: false, // true for 465, false for other ports
               auth: {
                 user: testAccount.user, // generated ethereal user
                 pass: testAccount.pass, // generated ethereal password
               },
             });
            
  rl.question('to who do you want to send the mail?', (age) => {
    rl.question('what is the subject?', (age1) => {
        rl.question('what is content of the mail?', (age2) => {
  var mailOptions = {
    from: '"Susy" <susy@ethereal.com>',
    to: age,
    subject: age1,
    text: age2
  };
  rl.question('how many times?', name => {
            
    runFunctionXTimes(sendmail, 0, name)
          
        
          rl.close();
         function sendmail() { transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
        }
})
})
})
})
function runFunctionXTimes(callback, interval, repeatTimes) {
  let repeated = 0;
  const intervalTask = setInterval(doTask, interval)

  function doTask() {
      if ( repeated < repeatTimes ) {
          callback()
          repeated += 1
      } else {
          clearInterval(intervalTask)
      }
  }
} 
          }
          doall()