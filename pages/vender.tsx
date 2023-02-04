import React, { useEffect, useState } from "react";
import Fundo from "./components/fundo";
import Header from "./components/header";

import Image from "next/image";

import img from "./assets/omo-juntos.jpg";





type Produtos = {
    id: number
    descricao: string
    quantidade: number
    valor: number
    url: string

}

export default function Vender() {
    const name = "Matheus Castro"
    const [quantidade, setQuantidade] = useState('');

    const [itensBusca, setItensBusca] = useState([]);

    const [buscaUsuario, setBuscaUsuarios] = useState("");



    useEffect(() => {
        fetch("http://localhost:3000/api/produtos")
            .then(resposta => (
                resposta.json()
            ))
            .then(json => (
                setItensBusca(json)
            ))
    }, [itensBusca])

    const valorRecebido = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBuscaUsuarios(event.target.value)
    }
    const quantidadeRecebida = (event: React.ChangeEvent<HTMLInputElement>) => {
        let local = event.target.value
        setQuantidade(local)
    }
    return (
        <>
            <Header />

            <h1 className="text-center"> Bem vindo(a), {name}, aqui e a area de vendas </h1>
            <Fundo>
                <div className="flex flex-col  bg-gradient-to-r from-cyan-500 to-blue-500 p-1 mx-3">
                    <label htmlFor="info">Oque voce busca?</label>
                    <input type="text" className="border-solid border-2 border-sky-500 p-2 m-2"
                        value={buscaUsuario.toLowerCase()}
                        onChange={valorRecebido}
                    />
                    <div className="box-content h-full w-full p-2 border-2 ">
                        {itensBusca.map((item: Produtos) => {
                            if (item.descricao == buscaUsuario || (item.id).toString() == buscaUsuario) {
                                return <div key={item.id} className="grid justify-around ">
                                    <aside className=" grid flex-col justify-center bg-sky-50 w-64 drop-shadow-lg rounded-md p-2">
                                        <h1 className="text-center"> Descrição </h1>
                                        <div className=" flex justify-center "> {(item.descricao).toLowerCase()}</div>
                                        <div className=" flex justify-center " >
                                            <Image
                                                src={img}
                                                alt='nao carregado'
                                                width={170}
                                                height={100}>
                                            </Image>
                                        </div>
                                        <h1 className="text-center"> Valor </h1>
                                        <div className=" flex justify-center ">{(item.valor).toFixed(2)}</div>
                                        <div >
                                            <h1 className="text-center" >Quantidade</h1>
                                            <input className="w-full border-4 p-2" type="number"
                                                value={parseInt(quantidade)}
                                                onChange={quantidadeRecebida} />
                                        </div>
                                        <h1 className="text-center"> Total </h1>
                                        <div className=" flex justify-center"> R$: {(item.valor * parseInt(quantidade)).toFixed(2)}</div>

                                    </aside>
                                </div>
                            }
                        })}




                    </div>
                </div>
            </Fundo>
        </>
    )
}