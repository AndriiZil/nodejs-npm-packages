const imagesToPdf = require('images-to-pdf');

async function process() {
    await imagesToPdf(['1.jpeg', '2.png'], 'combined.pdf');
}

process().catch(console.log);