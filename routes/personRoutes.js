const router = require('express').Router()
const Person = require('../models/Person')


//rotas da api
// Cadastro de usuários ;; CREATE do Crud
router.post('/', async (req, res) => {

    const {name, email, phone_number, gamertag} = req.body

    if(!name) {
        res.status(422).json({error: 'O nome é obrigatório!'})
        return
    }

    const person = {
        name, 
        email,
        phone_number,
        gamertag
    }

    try {

        //criando dados
        await Person.create(person)
        res.status(201).json({message: 'pessoa inserida no sistema com sucesso!'})

    }catch (error) {
        res.status(500).json({error: error})
    }
})

// Consulta de usuários ;; Read do cRud
router.get('/', async (req, res) => {
    try{
        const people = await Person.find()
        res.status(200).json(people)
    } catch(error) {
        res.status(500).json({error: error})
    }
})

// Consulta de usuários através de ID ;; Read do cRud
router.get('/:id', async (req, res) => {

    // Extrair o dado da requisição pela url = utiliza-se o req.params
    const id = req.params.id

    try {
        const person = await Person.findOne({_id: id})
        res.status(200).json(person)
    } catch (error) {
        res.status(500).json({error: error})
    }

})

// Editar usuários ;; Update do crUd
router.patch('/:id', async (req, res) => {

    const id = req.params.id
    const {name, email, phone_number, gamertag} = req.body
    const person = {
        name, 
        email,
        phone_number,
        gamertag
    }

    try {
        const updatedPerson = await Person.updateOne({ _id: id}, person)
        res.status(200).json(person)
    } catch (error) {
        res.status(500).json({error: error})
    }
})

// Remover usuários ;; Delete do cruD 

router.delete('/:id', async (req, res) => {
    const id = req.params.id
    
    const person = await Person.findOne({ _id: id })
    if(!person) {
        res.status(422).json({ message: 'O usuário não foi encontrado!'})
        return
    }

    try {
        await Person.deleteOne({_id: id})
        res.status(200).json({ message: 'Usuário removido com sucesso!'})
    } catch (error) {
        res.status(500).json({error: error})
    }
})

module.exports = router