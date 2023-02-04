import { NextApiHandler } from "next"
import { produtos } from "../../../utils/produtos"

const api: NextApiHandler = ( req, res ) => { 
    const { id } = req.query

    for ( let i in produtos  ) { 
        if( produtos[i].id.toString() === id  ) { 
            res.json( produtos[i] );
            return
        }
    }
    res.json({error : " Produto não encontrado "})
}
export default api;
