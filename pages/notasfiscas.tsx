import React, { ChangeEvent, useState } from "react";
import Header from "./components/header";




export default function Notafiscal() {

    const [descricao, setdescricao] = useState("");
    const [quantidade, setquantidade] = useState(0);
    const [valorUnit, setValorUnit] = useState(0);
    const [codigo, setCodigo] = useState(0);

    const SetDes = (e: ChangeEvent<HTMLInputElement>) => {
        setdescricao(e.target.value)

    }
    const SetQuant = (e: ChangeEvent<HTMLInputElement>) => {
        setquantidade(parseInt(e.target.value))

    }
    const SetValorUnit = (e: ChangeEvent<HTMLInputElement>) => {
        setValorUnit(parseInt(e.target.value))

    }
    const SetCodigo = (e: ChangeEvent<HTMLInputElement>) => {
        setCodigo(parseInt(e.target.value))

    }
 


    return (
        <>
            <Header />
            <div className="flex flex-col  bg-gradient-to-r from-cyan-500 to-blue-500">
                <label htmlFor="ta">Descrição</label>
                <input type="text" 
                className="border-2 p-2" 
                value={descricao} 
                onChange={SetDes} required />
                <label htmlFor="ta">Quantidade</label>
                <input type="text" 
                className="border-2 p-2" 
                value={quantidade} 
                onChange={SetQuant}
                 required />
                <label htmlFor="ta"> Valor unit </label>
                <input type="text" className="border-2 p-2" value={valorUnit} onChange={SetValorUnit} required />
                <label htmlFor="ta">Codigo de barras </label>
                <input type="text" className="border-2 p-2" value={codigo} onChange={SetCodigo} required />

                <button onClick={guardaTudo} className="  border-2 bg-blue-500 ">Enviar</button>

              

            </div>
        </>
    )
}