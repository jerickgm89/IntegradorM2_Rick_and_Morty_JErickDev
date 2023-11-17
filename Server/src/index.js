const server = require('./server.js');
const { conn } = require('./DB_connection.js');

const PORT = process.env.PORT || 3001;

try {
   server.listen(PORT, async () => {
      console.log('Server raised in port: ' + PORT);
      await conn.sync({ force: false });
   });
} catch (err) {
   console.log(err);
}

