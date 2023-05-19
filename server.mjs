import { createServer } from 'http';

createServer((req, res) => {
  res.write('Hello World Test!');
  res.end();
}).listen(process.env.PORT);
