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
            id: 23,
            title: "Minecraft",
            year: 2013,
            price: 20
        }
    ]
}

app.get("/", (req, res) => {

});


app.listen(8080, () => {
    console.log("API Rodando...");
});