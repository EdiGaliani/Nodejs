const mongoose = require('mongoose');
const articleModel = require('./article');

mongoose.set('strictQuery', true)
mongoose.connect('mongodb://127.0.0.1:27017/aprendendoMongo').then(db => {
    //console.log(db);
});

const Article = mongoose.model("Article", articleModel);

const article = new Article({
    title: "Meu 1º artigo",
    author: "Edi",
    body: "Bem vindos ao meu primeiro artigo"
});

article.save().then((db) => {
    console.log(db);
}).catch((err) => {
    console.log(err);
});