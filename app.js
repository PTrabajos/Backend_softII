import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'

import personaRoutes from './src/routes/personas.js';
import universidadRoutes from './src/routes/universidad.js';
import citaRoutes from './src/routes/cita.js';

let app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    return res.json({ result: 'OK'});
})

app.use("/personas", personaRoutes);
app.use("/universidades", universidadRoutes);
app.use("/citas", citaRoutes);

export default app