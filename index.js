import express from 'express';
import itemRouter from './routes/items.js';
const app = express();
app.use(express.json());
const PORT = 2000;

app.use('/items', itemRouter);

app.get('/', (req, res) => {
    res.send('Hello, World!');
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

