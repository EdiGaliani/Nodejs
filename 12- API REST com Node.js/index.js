const express = require("express");
const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

const DB = {
    games: [
        {
            id: 23,
            title: "Call of Duty MWII",
            year: 2019,
            price: 60
        },
        {
            id: 65,
            title: "Sea of Thieves",
            year: 2016,
            price: 40
        },
        {
            id: 2,
            title: "Minecraft",
            year: 2013,
            price: 20
        }
    ]
}

app.get("/games", (req, res) => {
    res.statusCode = 200;
    res.json(DB.games);
});

app.get("/game/:id", (req, res) => {
    if(isNaN(req.params.id)) {
        res.sendStatus(400);
    }else{
        let id = parseInt(req.params.id);
        let game = DB.games.find(g => g.id == id);

        if(game != undefined) {
            res.statusCode = 200;
            res.json(game);
        }else{
            res.sendStatus(404);
        }
    }
});

app.post("/game", (req, res) => {
    let {title, price, year} = req.body;
    DB.games.push({
        id: 2323,
        title,
        price,
        year
    })
    res.sendStatus(200);
});

app.listen(8080, () => {
    console.log("API Rodando...");
}); 