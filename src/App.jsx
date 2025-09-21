import { createContext ,useEffect,useState } from 'react'
import './App.css'
import Add from './components/Add'
import List from './components/List'
import toast, { Toaster } from 'react-hot-toast'
import { myContext } from './components/context/MyContext'
import Amounts from './components/Amounts'


function App() {
  const [expense, setExpense] = useState(0)
  const [desc, setDesc] = useState('')
  const [createDate, setcreateDate] = useState('')
  const [category, setcategory] = useState('Food')
  let total = 0
  const [expenseList, setExpenseList] = useState(localStorage.getItem("expense") ? 
  JSON.parse(localStorage.getItem("expense"))  :[])
  

  function addExpense(e) {
    // e.preventDefault()
    const expenses = {
      value: expense,
      content: desc,
      date: createDate,
      _id: Date.now().toString(36),
      type: category
    }
    setDesc("")
    setExpense("")
    setcategory("Food")
    setcreateDate("")
    createExpense(expenses)
  }

  const createExpense = (expenses) => {
    setExpenseList((prevList) => {
      const updateList = [...prevList, expenses];
      localStorage.setItem("expense",JSON.stringify(updateList))

      return updateList
    })
    toast.success("Expense Added")
  }

  const removeExpense = (id) => {
    const filterList = expenseList.filter(e => e._id !== id)
    setExpenseList(filterList);
    
    localStorage.setItem("expense",JSON.stringify(filterList))
    toast.success("Expense deleted")
  }

 
  expenseList.forEach(exp => {
    total += parseInt(exp.value)
  });
  
  return (
    <>
        <div className="bg-purple-600 py-4"><h1 className="text-center text-3xl sm:text-4xl text-white font-bold">Track Your Expenses HERE</h1></div>
      <div className="w-full px-[10%]">
        <div className='w-full flex justify-center'>
        <div className="mt-4 w-full sm:flex justify-between">
          <Amounts total={total} list={expenseList}/>
          <myContext.Provider value={{expense, setExpense, desc, setDesc, category, setcategory, createDate, setcreateDate, addExpense}}>
            <div className="bg-white sm:w-[45%]">
              <Toaster />
              <Add />
            </div>
          </myContext.Provider>
        </div>
        </div>
        <div className="">
          <List explist={expenseList} remove={removeExpense}/>
        </div>
      </div>
    </>
  )
}

export default App

export {myContext}
