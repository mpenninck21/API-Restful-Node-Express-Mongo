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

//rotas da api 
const personRoutes = require('./routes/personRoutes')

app.use('/person', personRoutes)

//rota inicial / endpoint
app.get('/', (req, res) => {
    // mostrar req

    res.json({message: 'oi express!'})

})

//entregar uma porta pro express disponibilizar o código
mongoose
    .connect('mongodb+srv://mpenninck21:fUIQjga7gA5BjYhT@apicluster.weo6uhf.mongodb.net/bancodaapi?retryWrites=true&w=majority')
    .then(() => {
        app.listen(3000)
        console.log('Conectamos ao mongoDB!');
    })
    .catch((err) => console.log(err))

