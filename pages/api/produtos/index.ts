import { NextApiHandler } from "next"

import { produtos } from "../../../utils/produtos"

const handeler : NextApiHandler = ( req, res ) => { 
    res.json(produtos)
}


export default handeler;