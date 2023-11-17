const server = require('./server.js');
const { conn } = require('./DB_connection.js');

const PORT = process.env.PORT || 3001;

conn
   .sync({force: false})
   .then(() => {
      server.listen(PORT, () => {
         console.log('Server raised in port: ' + PORT);
      });
   }). catch((err) => {
      console.log(err);
   });



// server.use(express.json());
// server.use('/rickandmorty', router);

// server.listen(PORT, () => {
//    console.log('Server raised in port: ' + PORT);
// });