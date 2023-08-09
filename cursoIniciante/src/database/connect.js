const express = require('express')
const mongoose = require('mongoose')
const app = express()


const connectToDatabase = async () =>{
    await mongoose.connect(
        `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.uw8eky4.mongodb.net/?retryWrites=true&w=majority`
    ).then(() => console.log('Conectou ae viado'))
    .catch((err) => console.log(err));
}

// app.listen(8080, () => {
//     console.log('na porta 8080')
// })

module.exports = connectToDatabase