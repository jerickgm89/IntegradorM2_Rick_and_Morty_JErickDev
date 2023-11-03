const http = require('http');
const data = require('./utils/data');

const server = http.createServer((req, res) => {
    const url = req.url;
    res.setHeader('Access-Control-Allow-Origin', '*');

    if(url.includes('/rickandmorty/character')) {
        const id = url.split('/').pop(); 
        const idNumber = Number(id);

        if(!isNaN(idNumber)) {
            const character = data.find(character => character.id === idNumber);

            if(character) {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(character));
            } else {
                res.writeHead(404, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: 'Personaje no encontrado' }));
            }
        } else {
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'ID no válido' }));
        }
    }
});

server.listen(3001, () => {
    console.log('Server running on port 3001');
});