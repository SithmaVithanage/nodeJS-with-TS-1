
import http from 'http';

http 
.createServer((req, res) => {
  res.end('Hello, sithma!hiiiiiiii!\n');
})

.listen(3000, () => {
  console.log('Server started');
})