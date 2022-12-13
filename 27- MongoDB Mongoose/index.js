const mongoose = require('mongoose');
const articleModel = require('./article');

mongoose.set('strictQuery', true)
mongoose.connect('mongodb://127.0.0.1:27017/aprendendoMongo').then(db => {
    //console.log(db);
});

const Article = mongoose.model("Article", articleModel);

Article.findByIdAndDelete('6398de8b1eb2765d93d7970d').then(articles => {
    console.log(articles);
}).catch(err => {
    console.log(err);
});

// Article.find({'_id':'6398d2f29a03d688fd050160'}).then(articles => {
//     console.log(articles);
// }).catch(err => {
//     console.log(err);
// });

// //Buscando Todos Registros
// Article.find({}).then(articles => {
//     console.log(articles);
// }).catch(err => {
//     console.log(err);
// });




// //Cadastro
// const article = new Article({
//     title: "Olá Mundo",
//     author: "João",
//     body: "Bem vindos ao meu mundo",
//     special: true,
//     resume: {
//         content: "Bla Bla Bla",
//         author: "Galiani"
//     }
// });

// article.save().then((db) => {
//     console.log(db);
// }).catch((err) => {
//     console.log(err);
// });