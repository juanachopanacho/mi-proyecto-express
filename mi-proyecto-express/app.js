const express = require('express');
const mysql = require('mysql');
const app = express();

// Conexión a MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'huhahu',
    database: 'test'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Conectado a la base de datos');
});

// Configuración de EJS
app.set('view engine', 'ejs');

// Ruta principal
app.get('/', (req, res) => {
    db.query('SELECT * FROM users', (err, rows) => {
        if (err) throw err;
        res.render('index', { users: rows });
    });
});

// Iniciar servidor
app.listen(4000, () => {
    console.log('Servidor iniciado en el puerto 3000');
});
