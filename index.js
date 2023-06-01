import express from 'express';
import usuarios from './src/data/usuarios.json'assert { type: "json" };
import usuarios_cadastro from './src/data/usuarios_cadastro.json'assert { type: "json" };
import login_usuarios from './src/data/login_usuarios.json'assert { type: "json" };

const app = express()
const PORT = 4000 //porta navegador

app.get('/login-usuario',(req,res)=>{ //2 par, local e a arrow function, essa arrow recebe 2 parâmetros tmbm.
    return res.json(usuarios)
})

// GET pegar algo
// POST postar algo
// DELETE excluir algo
// PUT PATCH para alterar algo

app.listen(PORT,()=>{
    console.log(`App online na porta ${PORT}`)
});
