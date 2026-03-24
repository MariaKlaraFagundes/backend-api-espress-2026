import { deleteUser } from "../../models/userModel"

export async function deleteUserController(req,res){
    const id = req.params.id

    const result = awaitdeleteUser(+id) //operador " + " para converter string para number (int)

    return res.json({
        message: "Usuário deletado com sucesso!",
        user: result
    })
}