import { useState } from "react";
 

 
const ExpensePage =()=>{

    let [item,setItem]=useState('')
    let [list,setList]=useState([])
    let [amount,setAmout]=useState('')
 

    let AddIten =()=>{
       if(item && amount){
        setList(prev=>{
            return(
                [...prev,{item,amount}]
            )
        })
        setAmout('')
        setItem('')

       }
        
    }

    const removeItem=(index)=>{
        let upDatelist=[...list]
        upDatelist.splice(index,1)
        setList(upDatelist)
        
    }
    const totalAmount=()=>{
        let total = 0
        list.forEach((item)=>{
            total+=parseFloat(item.amount)
        })
        return total.toFixed(2 )
    }

    return(

        <div className="border w-2/3 mt-3 h-auto m-auto pb-10 mb-5 shadow-md py-1 px-3 bg-slate-600 rounded-md text-white capitalize">
            <h1 className="text-center  mt-5 rounded-sm bg-gradient-to-r from-yellow-600 via-yellow-900 to-yellow-700">Your Monthly Expense Details</h1>
             
           <div className="py-5 grid grid-rows-2">


           <input className="w-2/3 rounded-md px-3 py-1 text-white m-auto outline-none bg-slate-800" value={item} onChange={(e)=>{
                setItem(e.target.value)
            }} type="text"placeholder="Expense Reason"/>


             <input className="w-2/3 mt-3 rounded-md px-3 py-1 text-white m-auto outline-none bg-slate-800" value={amount} onChange={(e)=>{
                setAmout(e.target.value)
            }} type="number"placeholder="Expense Amount" /> 


            <button className=" w-1/5 capitalize rounded-md bg-slate-900 m-auto mt-5 shadow-lg  backdrop: hover:bg-slate-800 px-2 py-1 mb-5" onClick={AddIten}>add item</button>

           </div>


            <table className="w-full">
                <tbody className="">


                     
                    <tr className="border grid grid-cols-10 justify-between text-sm md:tex-lg text-center text-black bold">
                            <td className="col-span-2 bg-slate-400">
                                    date
                            </td>

                            <td className="col-span-6 bg-slate-300 ">
                                    details
                            </td>

                            <td className="col-span-1 bg-red-400">
                                    amount
                            </td>

                            <td className="col-span-1 bg-red-950 text-white">
                                    delete
                            </td>
                        </tr>
                    
                    {list.length !==0 ?(
                        list.map((value,index)=>{
                            return(
                                <tr className="border grid grid-cols-10 justify-between text-sm md:tex-lg text-center text-slate-900 capitalize">


                                    <td className="px-1 col-span-2 bg-slate-400">{new Date().toLocaleDateString()}</td>

                                    <td className="col-span-6 px-1 bg-slate-300 ">{value.item}</td>

                                    <td className="col-span-1 px-1 bg-red-400">{value.amount}</td>

                                    <td className="px-1 w-full bg-red-950 col-span-1 text-center"><button  className=" text-white capitalize hover:opacity-40"onClick={()=>{removeItem(index)}}>remove</button></td>


                                </tr>
                            )
                        })
                    ):(<tr></tr>)}
                </tbody>
            </table>
            {list.length > 0 && (
                <div className="text-center text-slate-950 mt-4">
                    <span>total amount: </span>${totalAmount()} 
                </div>
            )}
        </div>
    )
}
export default ExpensePage;