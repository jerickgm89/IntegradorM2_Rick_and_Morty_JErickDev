const http = require('http');
const getCharById = require('./controllers/getCharById');

const server = http.createServer((req, res) => {
    const url = req.url;
    res.setHeader('Access-Control-Allow-Origin', '*');

    if(url.includes('/rickandmorty/character')) {
        const id = url.split('/').pop();
        const idNumber = Number(id);

        if(!isNaN(idNumber)) {
            getCharById(res, idNumber);
        } else {
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'ID no válido' }));
        }
    }
});

server.listen(3001, () => {
    console.log('Server running on port 3001');
});