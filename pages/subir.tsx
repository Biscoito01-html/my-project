import React, { ChangeEvent, useState } from "react";
import Header from "./components/header";

import { useProductList } from "./reducers/produtolist"


export default function Subir() {

    const [list, dispatch] = useProductList();

    const [ descricaoInput, setDescricaoInput ] = useState('');
    const [ quantidadeInput, setQuantidadeInput ] = useState('');
    const [ valorunitInput, setValorUnitInput ] = useState('');
    const [ codigoDeBarrasInput, setCodigoDeBarrasInput ] = useState('');
// input do elemento descrição
    const Descricaoinfo = (e: ChangeEvent<HTMLInputElement> )=> {
        setDescricaoInput( e.target.value )
    }
    const Quantiddadeinfo = (e: ChangeEvent<HTMLInputElement> )=> {
        setQuantidadeInput( e.target.value )
    }
    const ValorUnitinfo = (e: ChangeEvent<HTMLInputElement> )=> {
        setValorUnitInput( e.target.value )
    }
    const CodigoDeBarrasinfo = (e: ChangeEvent<HTMLInputElement> )=> {
        setCodigoDeBarrasInput( e.target.value )
    }
    const incluirProduct = ()=> { 
        if(descricaoInput && quantidadeInput && valorunitInput && codigoDeBarrasInput ) { 
            dispatch({
                type: "ADD",
                payload: { 
                    descricao : descricaoInput,
                    quantidade: quantidadeInput,
                    valorUnit : valorunitInput,
                    codigodebarras: codigoDeBarrasInput,
                }
            })
        }
        
        setDescricaoInput('')
        setQuantidadeInput('')
        setValorUnitInput('')
        setCodigoDeBarrasInput('')
    }
    const excluir = (id: string) => { 
            dispatch( {
                type: "DEL",
                payload : { id }
            } )
    }
    const ordenador = () => { 
        dispatch({
            type: "ORDER"
        })
    }
    return (
        <>
            <Header />
            <div className=" m-5 ">
                <div className="flex flex-col">
                    <label >Descrição do Produto</label>
                    <input className="border-solid border-2 border-sky-500 p-2 "
                        type="text"
                        required
                        name="descricao"
                        onChange={ Descricaoinfo }
                        value={ descricaoInput }
                    />
                    <label>Quantidade</label>
                    <input className="border-solid border-2 border-sky-500 p-2"
                        type="text"
                        required
                        name="quantidade"
                        
                        onChange={Quantiddadeinfo}
                        value={quantidadeInput}
                    />
                    <label>Valor unitario</label>
                    <input className="border-solid border-2 border-sky-500 p-2"
                        type="text"
                        required
                        name="valorUnit"
                        value={valorunitInput}
                        onChange={ValorUnitinfo}
                    />
                    <label>Código de barras</label>
                    <input className="border-solid border-2 border-sky-500 p-2"
                        type="text"
                        required
                        name="codigoBarras"
                        value={codigoDeBarrasInput}
                        onChange={CodigoDeBarrasinfo}
                    />
                   <button className="bg-blue-500 p-2 rounded-md my-2" 
                   onClick={incluirProduct} >
                    Adicionar
                    </button> 
                    <button className="bg-blue-500 p-2 rounded-md my-2" 
                      onClick={ordenador} >
                    Ordenar
                    </button> 
                </div>
                <div>
                </div>
            </div>
            <h1> Informaçoes de Produtos </h1>
            <div className="flex flex-col ">
               {list.map((item, index) => ( 
                        <>
                        <div key={index}> Descrição: { item.descricao}</div>
                        <div key={index}> Quantidade: { item.quantidade} </div>
                        <div key={index}> Valor unitario: R$: { (parseFloat(item.valorUnit)).toFixed(2)} </div>
                        <div key={index}> Codigo de Barras:  { item.codigodebarras} </div>
                        <div key={index}> Codigo de Barras: R$: { (parseInt(item.quantidade) * parseFloat(item.valorUnit)).toFixed(2)} </div>
                        <button onClick={()=> excluir(item.id)  }>[ deletar ]  </button>
                        </>
                ))}
             

             <button className="bg-blue-500 p-2 rounded-md my-2"> Enviar </button>
            </div>  




               

           

        </>
    )
}