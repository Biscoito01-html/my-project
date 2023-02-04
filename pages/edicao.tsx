import React  from "react"

export default function Edicao () { 

    return ( 
        <> 
        
        
        </>

    )



}

/*import React, { useState } from "react";
import Header from "./components/header";

type Product = {
    descricao: string
    quantidade: string
    valorUnit: string
    codigoBarras: string
}

export default function Subir() {
    const [descricao, setDescricao] = useState('');
    const [quantidade, setQuantidade] = useState('');
    const [valorUnt, setValorUnt] = useState('');
    const [codigoBarras, setCodigoBarras] = useState('');

    class Produto {
        constructor(
            private _descricao = descricao,
            private _quantidade = quantidade,
            private _valorUnit = valorUnt,
            private _codigoBarras = codigoBarras
        ) {
        }
    }
    const Lista: Product | any = useState([]);

    return (
        <>
            <Header />
            <div className=" m-5 ">
                <form className="flex flex-col"
                
                    onSubmit={
                        (e: React.SyntheticEvent) => {
                            e.preventDefault()
                            const target = e.target as typeof e.target & {
                                descricao: { value: string };
                                quantidade: { value: string };
                                valorUnit: { value: string };
                                codigoBarras: { value: string };
                            }
                            const descr = target.descricao.value
                            const quant = target.quantidade.value
                            const vlrUnit = target.valorUnit.value
                            const CodBarras = target.codigoBarras.value

                            const valor = new Produto(descr, quant, vlrUnit, CodBarras);
                            Lista.push(valor);
                            alert('cadastro realizado com sucesso')
                            

                            console.log(Lista)
                        }
                    } >
                    <label >Descrição do Produto</label>
                    <input className="border-solid border-2 border-sky-500 p-2 "
                        type="text"
                        required
                        name="descricao"
                    />
                    <label>Quantidade</label>
                    <input className="border-solid border-2 border-sky-500 p-2"
                        type="text"
                        required
                        name="quantidade"
                    />
                    <label>Valor unitario</label>
                    <input className="border-solid border-2 border-sky-500 p-2"
                        type="text"
                        required
                        name="valorUnit"
                    />
                    <label>Código de barras</label>
                    <input className="border-solid border-2 border-sky-500 p-2"
                        type="text"
                        required
                        name="codigoBarras"
                    />
                    <input className="bg-sky-200 p-2 rounded-md my-2" type="submit" />
                </form>
                <div>
                </div>

            </div>
        </>
    )
}*/