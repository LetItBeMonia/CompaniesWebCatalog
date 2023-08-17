const app = require('./app.js');
const { port } = require('./config.js');

app.listen(port, () => {
    console.log(`Serwer uruchomiony na porcie ${port}`);
});