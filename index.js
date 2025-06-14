import express from 'express';
import itemRouter from './routes/items.js';
const app = express();
app.use(express.json());
const PORT = 2000;

app.use('/items', itemRouter);

app.get('/', (req, res) => {
    try {
        res.send('Hello, World!');
    } catch (error) {

        res.status(500).send('Something went wrong on the server.');
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

