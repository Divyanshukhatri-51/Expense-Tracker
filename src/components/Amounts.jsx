import React, { useState } from 'react'
import toast from 'react-hot-toast'

const Amounts = ({total, list}) => {
    const [income, setIncome] = useState(0)
    const [totalIncome, setTotalIncome] = useState(0)

    const handleIncome = () => {
      if(income>0){
        setTotalIncome(totalIncome+parseInt(income))
        setIncome("")
        toast.success("Income added")
      }
    }

    const balance = totalIncome - parseInt(total)

  return (
    <div className="sm:w-[45%] my-3 bg-white p-4 mx-4 shadow-xl">
            <h4 className="p-4 text-3xl font-bold rounded-xl">Balance: &#8377;{balance}</h4>
            <div className="">
                <input
                 required
                 type="number"
                 className="block border-2 px-1 py-2 rounded-lg outline-none my-2 w-full"
                 placeholder='Income'
                 value={income}
                 onChange={(e)=>setIncome(e.target.value)}
                />
            <button onClick={handleIncome}  className="bg-blue-400 py-2 w-[100%] rounded-lg cursor-pointer">Add Income</button>
            </div>
            <div className="sm:flex flex-wrap justify-between my-3">
              <div className="mb-2 p-4 sm:w-[45%] bg-[#FF0800] text-[#FAF9F6] text-lg md:text-2xl border rounded-xl">
                <p className="">Expense:&#8377; <span className="">{total}</span></p>
              </div>
              <div className="p-4 sm:w-[45%] bg-green-600 text-[#FAF9F6] text-lg md:text-2xl border rounded-xl">
                <p className="">Income:&#8377; <span className="">{totalIncome}</span></p>
              </div>
              <div className="p-4 w-full mt-3 bg-purple-600 text-[#FAF9F6] text-[16px] md:text-2xl border rounded-xl">
                <p className="flex justify-between"><img src="/decrease.png" alt="" className="w-[20px] sm:w-[30px]" />No. of Entries: <span className="">{list.length}</span></p>
              </div>
            </div>
            
          </div>
  )
}

export default Amounts
