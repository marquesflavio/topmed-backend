import express from 'express'

const app = express()
const PORT = 4000

app.get('/',(req,res)=>{ //get recebe dois parâmetros, local e a arrow function, essa arrow recebe dois parâmetros tmbm.
    console.log('Entrou aqui')
    res.send('hello, world!')
})

// GET pegar algo
// POST postar algo
// DELETE excluir algo
// PUT PATCH para alterar algo

app.listen(PORT,()=>{
    console.log(`App online na porta ${PORT}`)
})