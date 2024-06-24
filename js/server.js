const express = require('express');
const app = express();
const port = 3001;

// Middleware para servir archivos estáticos desde el directorio 'public'
app.use(express.static('public'));

// Ruta básica
app.get('/', (req, res) => {
    res.send('Hola, mundo!');
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
