import { useReducer } from "react"
import { v4 as uuidv4 } from "uuid"
 
export type Product = { 
    id: string;
    descricao: string; 
    quantidade: string;
    valorUnit: string;
    codigodebarras: string;
}
type ActionType = { 
    type : string;
    payload? : { 
        id?: string;
        descricao?: string; 
        quantidade?: string;
        valorUnit?: string;
        codigodebarras?: string;
    }
}
const stateInicial : Product[] = [];

const reducer = (state: Product[], action: ActionType  ) => { 
       switch(action.type) { 
        case 'ADD': 
        if(action.payload?.descricao 
            && action.payload.quantidade 
            && action.payload.valorUnit
            && action.payload.codigodebarras
            ) {
              const newState = [...state ]  
            newState.push( { 
                id: uuidv4(),
                descricao: action.payload?.descricao,
                quantidade: action.payload?.quantidade,
                valorUnit: action.payload?.valorUnit,
                codigodebarras: action.payload?.codigodebarras
                } );
                return newState;
        }
        break;
        case "DEL": 
            if(action.payload?.id) { 
                let newState = [ ...state ]
                newState = newState.filter( item => item.id !== action.payload?.id )
                return newState;
            }
        break;
        case "ORDER": 
        let newState = [ ...state ]
            newState = newState.sort( (a,b) => (a.descricao > b.descricao) ? 1 : -1)
            return newState
            break;
       } 
    return state;



}

export const useProductList = () => { 

    return useReducer(reducer, stateInicial );

}