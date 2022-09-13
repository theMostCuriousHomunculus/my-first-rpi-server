import express from 'express';
import { readFileSync, writeFileSync } from 'fs';

const app = express();

app.get('/', (req, res) => {
  const count = readFileSync('./count.txt', 'utf-8');
  const newCount = (parseInt(count) ?? 0) + 1;
  writeFileSync('./count.txt', newCount);
  res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My First RPi Server</title>
</head>
<body>
  <h1>A stupid tracking site</h1>
  <p>This page has been viewed ${newCount} times.</p>
</body>
</html>
  `);
});

app.listen(5000, () => console.log('http://localhost:5000/'));