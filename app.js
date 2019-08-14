const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const vision = require('@google-cloud/vision');
const client = new vision.ImageAnnotatorClient();


const fileName = 'https://freepngimg.com/thumb/paper_sheet/48526-3-calligraphy-free-hq-image.png';

// Read a remote image as a text document
const [result] = await client.documentTextDetection(
  `gs://${fileName}`
);
const fullTextAnnotation = result.fullTextAnnotation;
console.log(fullTextAnnotation.text);

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
