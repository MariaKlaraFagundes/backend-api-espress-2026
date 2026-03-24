import { getUsers } from "../../models/userModel"

export async function getUserController(req, res){

    const result = await getUsers

    res.json({
        message: "Usuários listados com sucesso!",
        users: result

    })
}
