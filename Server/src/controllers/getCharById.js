const axios = require('axios');

const getCharById = (res, id) => {
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        .then(response => {
            const { data } = response;
            const { name, image, status, species, origin, location } = data;
            const char = { name, image, status, species, origin, location };
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(char));
        })
        .catch(error => {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end(error.message);
        });
}

module.exports = getCharById;