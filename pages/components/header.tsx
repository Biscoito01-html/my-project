import Fundo from "./fundo"

import Image from "next/image"
import Link from "next/link"


import img from "../assets/info.svg"
import img2 from "../assets/andar.svg"
import img3 from "../assets/datar.svg"
import img4 from "../assets/deitar.svg"
import img5 from "../assets/img.svg"
import img6 from "../assets/lamber.svg"
import img7 from "../assets/parede.svg"
import img8 from "../assets/pc.svg"
import img9 from "../assets/serve.svg"
import img10 from "../assets/índice.jpeg"

export default function Header () { 
    return ( 
        <>
         <Fundo >
          <header className='bg-gradient-to-r from-cyan-500 to-blue-500'>
            <div className='justify-between flex max-sm:flex-col p-2 ' >
                <Image src={img10}  width={80} height={80} alt='subir' />
              <div className='flex text-blue-50 max-sm:flex-col gap-1'>
                <button className='p-2 border-solid bg-blue-600 border-2 rounded-md'>Produtos </button>
                <button className='p-2 border-solid bg-blue-600 border-2 rounded-md'>Vendas</button>
                <button className='p-2 border-solid bg-blue-600 border-2 rounded-md'>Gerenciar</button> 
                <button className='p-2 border-solid bg-blue-600 border-2 rounded-md'>Produtos </button>
              </div>
            </div>
          </header>
          </Fundo>
          <Fundo>
          <div className=' flex flex-rows bg-gradient-to-r from-cyan-500 to-blue-500 justify-between text-blue-50 ' >  
          <Link href="/editar"><Image src={img} height={25} width={25} alt="editar"/></Link>
          <Link href="/subir"><Image src={img2} height={25} width={25} alt="subir"/></Link>
          <Link href="/vender"><Image src={img9} height={25} width={25} alt="baixar"/></Link>
          <Link href="/entradaproduto"><Image src={img4} height={25} width={25} alt="refresh"/></Link>
          <Link href="/notasfiscas"><Image src={img5} height={25} width={25} alt="NFs"/></Link>
          <Link href="/estoque"><Image src={img6} height={25} width={25} alt="banco"/></Link>
          <Link href="/"><Image src={img7} height={25} width={25} alt="compartilhar"/></Link>
          <Link href="/"><Image src={img8} height={25} width={25} alt="adicionar"/></Link>
          <Link href="/"><Image src={img3} height={25} width={25} alt="fechar"/></Link>
          </div>
          
          </Fundo>
          <div className="m-3 ">
          <Link className=" bg-sky-500 p-2 rounded-md " href='./'> Voltar há pagina principal </Link>
          </div>
          
          </>
)
}