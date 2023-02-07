//configuração inicial
const express = require('express')
const mongoose = require('mongoose')
const app = express()


// forma de ler JSON / middlewares
app.use(
    express.urlencoded({
        extended: true
    })
)
app.use(express.json())

// ARQUIVO COM AS ROTAS DA API
const personRoutes = require('./routes/personRoutes')
//tudo que estiver com "/person" será direcionado para o arquivo personRoutes.js
app.use('/person', personRoutes)

// ENDPOINT da rota inicial
app.get('/', (req, res) => {    
})


mongoose
    .connect('mongodb+srv://mpenninck21:fUIQjga7gA5BjYhT@apicluster.weo6uhf.mongodb.net/bancodaapi?retryWrites=true&w=majority')
    .then(() => {
        app.listen(3000)
        console.log('Conectamos ao mongoDB!');
    })
    .catch((err) => console.log(err))

