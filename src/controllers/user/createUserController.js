//export function createUsersController(req, res){
   // res.send("Exemplo de POST na rota /user respondida pelo Controller")/
//}

import { createUser } from "../../models/userModel"

export async function createUsersController(req, res) {

    const user = req.body
    console.log("Dados recebidos para criação do usuário:", user)
    const result = await createUser(user)

    res.json({
        message:"Usuário criado com sucesso!",
        user: result
    })
}