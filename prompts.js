// Trying the package inquirer

const inquirer = require('inquirer');
const qr = require('qr-image');

inquirer
.prompt([
    {
    message: 'Enter the name of the website to create QR code',
    name: 'URL',
    },
])

.then((answers) => {

    const url=answers.URL
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr_img.png"));
    fs.writeFile("URL.txt", url, (err) => {
        if (err) throw err;
        console.log("The File has been saved!");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });