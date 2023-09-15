const fs = require('fs');

const readStream = fs.createReadStream('input.md','utf8');

const writeStream = fs.createWriteStream('index.html')

readStream.on('data',(text) => {
    const showdown = require('showdown'),
        converter = new showdown.Converter(),
        html = converter.makeHtml(text.toString());
    console.log(html);
    writeStream.write(html);
    writeStream.end;
});