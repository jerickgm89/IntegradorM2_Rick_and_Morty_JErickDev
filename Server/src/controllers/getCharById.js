const axios = require('axios');

const URL = 'https://rickandmortyapi.com/api/character/';

// const getCharById = (req, res) => {
//   const { id } = req.params;
  
//   axios.get(`${URL}${id}`)
//     .then((response) => {
//       const { status, name, species, origin, image, gender } = response.data;
//       if (name) {
//         res.status(200).json({ id, status, name, species, origin, image, gender });
//       } else {
//         res.status(404).json({ message: 'Not Found' });
//       }
//     })
//     .catch((error) => {
//       res.status(500).json({ message: error.message });
//     });
// };

//Con async await
const getCharById = async (req, res) => {
  const { id } = req.params;

  try {
      const response = await axios.get(`${URL}${id}`);
      const { status, name, species, origin, image, gender } = response.data;
      const character = { id, name, status, species, gender, origin, image };

      return character.name
          ? res.status(200).json(character)
          : res.status(404).json({ message: 'Not Found' });

    } catch (error) {
      res.status(500).json({ message: error.message });
    }
};


  module.exports = {
    getCharById,
  };