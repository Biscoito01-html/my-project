import Header from "./components/header";

export default function EntradaProdutos () { 

    return ( 
        <>
        <Header/>
             <div className="flex flex-col  bg-gradient-to-r from-cyan-500 to-blue-500"> 
             <aside className=" grid flex-col justify-center bg-sky-50 w-64 drop-shadow-lg rounded-md p-2">
                    <h1 className="text-center"> Descrição </h1>
                    <div className=" flex justify-center "> </div>
                    <div className=" flex justify-center " >
                        
                    </div>
                    <h1 className="text-center"> Valor </h1>
                    <div className=" flex justify-center "></div>
                    <div >
                        <h1 className="text-center" >Quantidade</h1>
                        <input className="w-full border-4 p-2" type="number"
                            />
                    </div>
                    <h1 className="text-center"> Total </h1>
                    <div className=" flex justify-center"> R$: </div>

                </aside>



              
            
            
            </div>

        
        </>


    )




}