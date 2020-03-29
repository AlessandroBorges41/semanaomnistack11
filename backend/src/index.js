const express = require('express');
const cors = require('cors');
const routes  = require('./routes');

const app = express();

/**
 * Chamando a função para uso do JSON
 */
app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(3333);

