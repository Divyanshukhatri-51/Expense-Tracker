import React, { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

const List = ({ explist, remove }) => {
  const [select, setSelect] = useState("");

  const filteredList = explist.filter((item) => {
    return item.type.toLowerCase().includes(select.toLowerCase());
  });
  

  return (
    <div className="w-full py-8">
      <div className="flex justify-between">
        <p className="text-3xl my-2">All Expenses</p>
        <select
          name=""
          id=""
          className="rounded-xl outline-none bg-gray-400 mb-2 px-2 h-[50px]"
          value={select}
          onChange={(e) => setSelect(e.target.value)}
        >
          <option value="" className="">
            All
          </option>
          <option value="shopping" className="">
            Shopping
          </option>
          <option value="travel" className="">
            Travel
          </option>
          <option value="food" className="">
            Food
          </option>
          <option value="utilities" className="">
            Utilities
          </option>
          <option value="entertainment" className="">
            Entertainment
          </option>
          <option value="health" className="">
            Health
          </option>
        </select>
      </div>
      <table className="w-full text-[8px] sm:text-[16px] text-center">
        <thead className="w-full bg-gray-200 ">
          <tr className="w-full flex flex-row justify-evenly py-4">
            <th className="w-[20%]">Description</th>
            <th className="w-[20%]">Category</th>
            <th className="w-[20%]">Date</th>
            <th className="w-[20%]">Debited</th>
            <th className="w-[20%]">Action</th>
          </tr>
        </thead>
        {explist.length > 0 ? (
          <tbody className="w-full bg-gray-100">
            {filteredList.map((expense, index) => {
              return (
                <tr
                  className="w-full flex justify-evenly bg-gray-100 border-t p-4"
                  key={expense._id}
                >
                  <td className={`w-[20%]`}>{expense.content}</td>
                  <td className="w-[20%]">{expense.type}</td>
                  <td className="w-[20%]">{expense.date}</td>
                  <td className="w-[20%]">{expense.value}</td>
                  <td className="w-[20%] text-center">
                    <button
                      onClick={() => remove(expense?._id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <RiDeleteBin6Line />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        ) : (
          <thead className="mt-1">
            <tr>
              <th className="text-2xl bg-gray-200 p-8">
                No Expense Available
              </th>
            </tr>
          </thead>
        )}
      </table>
    </div>
  );
};

export default List;
