import React, { createContext, useContext } from "react";
import { myContext } from "../App";
import { useForm } from "react-hook-form";

const Add = () => {
  const {
    expense,
    setExpense,
    desc,
    setDesc,
    category,
    setcategory,
    createDate,
    setcreateDate,
    addExpense,
  } = useContext(myContext);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <div className="p-4 w-[full] shadow-xl">
      <h2 className="text-2xl mb-2">Add expense:</h2>
      <form onSubmit={handleSubmit(addExpense)} className="p-4 border">
        <label htmlFor="amount" className="">
          Amount:
        </label>
        <input
          {...register("amount", { required: true })}
          type="number"
          className={
            errors.amount
              ? "border block p-2 rounded-xl w-full outline-none error"
              : "border outline-none block p-2 rounded-xl w-full"
          }
          id="amount"
          placeholder="0.00"
          value={expense}
          onChange={(e) => setExpense(e.target.value)}
        />
        <label htmlFor="desc" className="">
          Description:
        </label>
        <input
          {...register("desc", { required: true })}
          type="text"
          className={
            errors.desc
              ? "border block p-2 rounded-xl w-full outline-none error"
              : "border outline-none block p-2 rounded-xl w-full"
          }
          id="desc"
          placeholder="Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          minLength={3}
        />
        <label htmlFor="category" className="">
          Category:
        </label>
        <select
          required
          name=""
          id="category"
          className="w-full border block p-2 rounded-xl"
          value={category}
          onChange={(e) => setcategory(e.target.value)}
        >
          <option value="food" className="">
            Food
          </option>
          <option value="Shopping" className="">
            Shopping
          </option>
          <option value="Entertainment" className="">
            Entertainment
          </option>
          <option value="Travel" className="">
            Travel
          </option>
          <option value="Utilities" className="">
            Utilities
          </option>
          <option value="Health & Medical" className="">
            Health & Medical
          </option>
        </select>
        <label htmlFor="date" className="">
          Date:
        </label>
        <input
          required
          type="date"
          name=""
          id="date"
          className="w-full border rounded-xl p-2"
          value={createDate}
          onChange={(e) => setcreateDate(e.target.value)}
        />
        <input
          type="submit"
          className="my-3 p-2 w-full bg-red-500 hover:bg-red-500 rounded-xl cursor-pointer"
          value="Add Expense"
        />
        {/* <button
         onClick={addExpense} 
         className="my-3 p-2 w-full bg-red-500 hover:bg-red-500 rounded-xl cursor-pointer">
        Add Expense
        </button> */}
      </form>
    </div>
  );
};

export default Add;
