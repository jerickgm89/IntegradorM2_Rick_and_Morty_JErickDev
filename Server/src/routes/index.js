const { Router } = require('express');
const { getCharById } = require('../controllers/getCharById');
const { login } = require('../controllers/login');
const { postFav, deleteFav } = require('../controllers/handleFavorites');

const router = Router();

router.get('/character/:id', getCharById);
router.get('/login', (req, res) =>{
    const { email, password } = req.query;
    let user = users.find((user) => user.email === email && user.password === password);

    user ? res.json({ access: true }) : res.json({ access: false });
});
router.post('/fav', postFav);
router.delete('/fav/:id', deleteFav);

module.exports = router;