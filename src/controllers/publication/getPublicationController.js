import { getPublication } from "../../models/publicationModal"

export async function getPublication(req, res){

    const result = getPublication

    res.json({
        message: "Usuários listados com sucesso!",
        getPublication: result

    })
}