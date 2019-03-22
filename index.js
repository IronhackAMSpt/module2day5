const mongoose = require("mongoose");
const Cat = require('./models/cats.js');

mongoose.connect('mongodb://localhost/cats');

Cat.find({name: 'Garfield'},{}, {}).then(documents => {
    console.log(documents);
})

Cat.updateMany({name: "Garfield"}, {age: 40}, (err) => {console.log(err)})
// .then(documents => {
//     console.log(documents);
// })
// .catch(err => {
//     console.log(err);
// })

// const garfield = new Cat({name: "Garfield", age: 76});

// garfield.save().then(document => {
//     console.log(document);
// })
// .catch( err=> {
//     console.log(err);
// })

