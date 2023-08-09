const express = require('express')
const UserModel = require('../src/models/user.models')


const app = express()

app.use(express.json())

app.set('view engine', 'ejs')
app.set('views', 'src/views')

app.use((req, res, next) => {
    console.log(`Request Type: ${req.method}`)
    console.log(`Contenet Type: ${req.headers["content-type"]}`)
    console.log(`Date: ${new Date()}`)

    next()
})

app.get('/views/users', async (req, res) => {
    res.render('index.ejs')
})

app.get("/home", (req, res) => {
    res.setHeader("content-type", "text/html")
    res.status(200).send("<h1>Hello World!</h1>")
})

app.get("/users", async (req, res) => {
    try{
        const users = await UserModel.find({ })
        res.status(200).json(users)
    }catch(error){
        res.status(500).send(error.message)
    }
})

//buscar todos os users

app.get("/users", async (req, res) => {

    try{
        const users = await UserModel.find({ })
        res.status(200).json(users)
    }catch(error){
        res.status(500).send(error.message)
    }
})

//buscar user por id

app.get("/users/:id", async (req, res) => {

    try{
       const id = req.params.id
       const user = await UserModel.findById(id)
       return res.status(200).json(user)
    }catch(error){
        res.status(500).send(error.message)
    }
})


app.post("/users", async (req, res) => {
    try{
        const user = await UserModel.create(req.body)
        res.status(201).json(user)
    }catch(error){
        res.status(500).send(error.message)
    }
}) 

app.patch("/users/:id", async (req, res) => {
    try{
        const id = req.params.id
        const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true })
        res.status(200).json(user)
    }catch(error){
        res.status(500).send(error.message)
    }
})


//deleta ae caraikkk
app.delete("/users/:id", async (req,res) => {
    try{    
        const id = req.params.id
        const user = await UserModel.findByIdAndRemove(id)
        res.status(200).json(user)
    }catch(error){
        res.status(500).send(error.message)
    }
})


const port = 8080

app.listen(port, () => (console.log(`Rodando no Express na porta ${port}!`)));