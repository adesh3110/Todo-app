import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import getId from "../services/get_id";
import updateTodo from "../services/update";

function UpdateTodo() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({
    title: "",
    description: "",
    is_completed: "",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name == "is_completed") {
      value = !data.is_completed;
    }

    setData({
      ...data,
      [name]: value,
    });

    console.log("OnChange");
    console.log(data);
  };

  const updateHandler = async (e) => {
    e.preventDefault();
    const response = await updateTodo(id, data);
    navigate("/todos");
    console.log(id, data);
    console.log(response);
  };

  const fetchById = async (id) => {
    const response = await getId(id);
    const val = response.data.data;
    setData(val);
  };

  useEffect(() => {
    fetchById(id);
  }, []);

  return (
    <div className='flex items-center justify-center h-screen '>
      <div className='w-1/2 mx-auto mt-4 p-4 bg-white rounded-lg shadow-md flex justify-center items-center w-full bg-gray-100'>
        <form onSubmit={updateHandler}>
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
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateTodo;
