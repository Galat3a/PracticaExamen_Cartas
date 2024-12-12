import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const datos = {
    cartas: []
}

app.get('/', (req, res) => {
    res.send('Servidor de cartas españolas');
});

app.get('/api/cartas', (req, res) => {    
    res.json(datos.cartas);
});

app.post('/api/cartas', (req, res) => {
    datos.cartas = req.body;
    res.status(201).json(datos.cartas);
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
