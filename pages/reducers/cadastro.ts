import { useReducer } from "react";
import { v4 as uuid } from "uuid";
import { produtos } from "../../utils/produtos";
type Produ = {
  id: string;
  descricao: string;
  quantidade: string;
  valor: string;
};
type Fornecedores = {
  id: string;
  nome: string;
  cnpj: string;
  telefone: string;
  endereco: string;
  produtos: Produ[];
};
type Action = {
  type: string;
  payload?: {
    id: string;
    nome?: string;
    cnpj?: string;
    telefone?: string;
    endereco?: string;
  };
};
const initialState: Fornecedores[] = [];

const reducer = (state: Fornecedores[], action: Action) => {
  switch (action.type) {
    case "ADD":
      if (
        action.payload?.nome &&
        action.payload.cnpj &&
        action.payload.telefone &&
        action.payload.endereco
      ) {
        const newState = [...state];
        newState.push({
          id: uuid(),
          nome: action.payload.nome,
          cnpj: action.payload.cnpj,
          telefone: action.payload.telefone,
          endereco: action.payload.endereco,
          produtos: [],
        });
        return newState;
      }
      break;
    case "DEL":
      if (action.payload?.id) { 
          let newState = [...state]
          newState = newState.filter( item => item.id !== action.payload?.id )
          return newState;

      }

    
      break;

    case "PUST":
      break;
    case "ADDPRODUCT":
      break;
    case "REMOVEPRODUCT":
      break;
  }
};
