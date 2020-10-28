import express from 'express';


const app = express();

const port = 8000;

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/templates/index.html');
});

app.get('/blackjack', (req, res) => {
    res.sendFile(__dirname + '/templates/game.html');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});