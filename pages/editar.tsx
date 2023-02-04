import { useEffect, useState } from "react"
import Header from "./components/header"
import Image from "next/image";

import imagens from "./assets/omo-juntos.jpg"

type Produtos = {
    id: number
    descricao: string
    quantidade: number
    valor: number
    url: string
}
export default function Editar() {
    const [itens, setItens] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/api/produtos/')
            .then(resposta => (
                resposta.json()
            )).then(convertido => (
                setItens(convertido)
            ))

    }, [itens])
    return (
        <>
            <Header />
            <div className='bg-gradient-to-r from-cyan-500 to-blue-500 rounded-r-lg shadow-md'>
                <div className="grid grid-cols-5 gap-1  " >
                    {itens.map((item: Produtos) => {
                        return (
                            <div key={item.id} className="border-solid border-2 border-sky-100 bg-violet-100 m-1 rounded-md ">
                                <aside className="flex flex-col justify-center ">
                                    <div className="text-center text-xl">Descrição</div>
                                    <div className="text-center"> {(item.descricao).toLowerCase()}</div>
                                    <div className="flex justify-center">
                                        <Image
                                            src={imagens}
                                            alt='nao carregado'
                                            width={170}
                                            height={100}>
                                        </Image>
                                    </div>
                                    <div className="text-center text-xl">Valor de vendas </div>
                                    <div className="text-center text-red-500 text-xl">R$ {(item.valor).toFixed(2)}</div>
                                    <div >
                                        <div>
                                            <h1 className="text-center text-xl">Quantidade
                                            </h1>
                                            <h1 className="text-center text-red-500 text-xl">{item.quantidade}</h1>
                                        </div>

                                    </div>
                                     </aside>
                            </div>)

                    })}

                </div>

            </div>
        </>


    )



}