const express = require('express');
const app = express();
const baseDir = `${__dirname}/dist/`;
const port = process.env.PORT || 3333;

app.use(express.static(`${baseDir}`));

app.get('*', (req, res) => res.sendFile('index.html', { root: baseDir }));

app.listen(port, () => console.log(`Cardápio rodando na porta ${port}...`));