const axios = require('axios');

const URL = 'https://rickandmortyapi.com/api/character/';

exports.getCharById = (req, res) => {
  const { id } = req.params;
  
  axios.get(`${URL}${id}`)
    .then((response) => {
      const { id, status, name, species, origin, image, gender } = response.data;
      if (name) {
        res.status(200).json({ id, status, name, species, origin, image, gender });
      } else {
        res.status(404).json({ message: 'Not Found' });
      }
    })
    .catch((error) => {
      res.status(500).json({ message: error.message });
    });
};