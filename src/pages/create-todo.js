import React, { useState } from "react";
import createTodo from "../services/create";
import { useNavigate } from "react-router-dom";

export default function CreateTodo() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    title: "",
    description: "",
    is_completed: false,
  });

  const handleChange = (e) => {
    const name = e.target.name;
    let value = e.target.value;
    if (name == "is_completed") {
      value = !data.is_completed;
    }
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await createTodo(data);
    const status = response.status;
    console.log(status);
    if (status === 201) {
      alert("Record is created");
      navigate("/todos");
    } else {
      alert("Data is Worng");
      console.log(response);
    }
  };
  return (
    <div className='flex items-center justify-center h-screen '>
      <div className='w-1/2 mx-auto mt-4 p-4 bg-white rounded-lg shadow-md flex justify-center items-center w-full bg-gray-100'>
        <form onSubmit={handleSubmit}>
          <div className='mb-4  '>
            <label
              className='block text-gray-700 font-bold mb-2 '
              htmlFor='title'
            >
              Title
            </label>
            <input
              className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='title'
              type='text'
              name='title'
              value={data.title}
              onChange={handleChange}
            />
          </div>
          <div className='mb-4'>
            <label
              className='block text-gray-700 font-bold mb-2'
              htmlFor='description'
            >
              Description
            </label>
            <input
              className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='description'
              type='text'
              name='description'
              value={data.description}
              onChange={handleChange}
            />
          </div>
          <label className='text-gray-700 font-bold' htmlFor='is_completed'>
            Completed
          </label>
          <div className='mb-4'>
            <select
              className='mr-2 leading-tight'
              id='is_completed'
              name='is_completed'
              value={data.is_completed}
              onChange={handleChange}
            >
              <option value={true}>True</option>
              <option value={false}>False</option>
            </select>
          </div>
          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            type='submit'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
