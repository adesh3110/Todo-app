import React, { useEffect, useState } from "react";
import getPaginatedTodo from "../services/get";
import { Link, useNavigate } from "react-router-dom";
import deleteTodo from "../services/delete";

function Listing() {
  const navigate = useNavigate();

  const [todos, setTodos] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMorePage, setHasMorePage] = useState(false);

  const fetchTodo = async (page) => {
    const response = await getPaginatedTodo(page);
    const data = response?.data;
    if (data == null) {
      console.log("Backend Error");
      return;
    }
    const items = data.items;
    const hasMorePage = data.meta.has_more_page;
    setHasMorePage(hasMorePage);
    if (page == 1) {
      setTodos(items);
    } else {
      setTodos([...todos, ...items]);
    }
  };

  useEffect(() => {
    fetchTodo(1);
    // eslint-disable-next-line
  }, []);

  //   const onEdit = (id) => {
  //     navigate("update/:id");
  //   };

  const onDelete = async (id) => {
    const response = await deleteTodo(id);
    const code = response.data.code;
    if (code !== 200) {
      alert("Something wrong");
      return;
    }
    alert("record deleted");
    removeById(id);
  };

  const removeById = (id) => {
    const updatedTodos = todos.filter((e) => e._id != id);
    setTodos(updatedTodos);
  };

  const loadMore = () => {
    const newValue = page + 1;
    fetchTodo(newValue);
    setPage(newValue);
  };

  return (
    <div className='mx-8'>
      <button
        className='w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4'
        onClick={() => {
          navigate("/create");
        }}
      >
        Create Todo
      </button>
      {todos &&
        todos.map((todo, i) => {
          return (
            <div className='' key={todo._id}>
              <div className='bg-white rounded-lg shadow-md p-6 m-4 w-1/3 bg-green-200  mx-8'>
                <h2 className='text-xl font-bold mb-2'>
                  {i + 1} - {todo.title}
                </h2>
                <p className='text-gray-700 mb-4'>{todo.description}</p>
                <div className='flex items-center'>
                  <input
                    id={`is_completed_${todo.id}`}
                    type='checkbox'
                    checked={todo.is_completed}
                    readOnly
                    className='mr-2 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500'
                  />
                  <label
                    htmlFor={`is_completed_${todo.id}`}
                    className='text-gray-900'
                  >
                    Completed
                  </label>
                </div>
                <Link
                  to={`/update/${todo._id}`}
                  className='px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 m-2'
                >
                  Edit
                </Link>
                <button
                  onClick={() => onDelete(todo._id)}
                  className='bg-red-500 hover:bg-red-700 text-white font-semi-bold py-2 px-4 rounded mt-2'
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}

      {hasMorePage ? (
        <button
          className='w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 mx-8'
          onClick={loadMore}
        >
          Load More
        </button>
      ) : (
        ""
      )}
    </div>
  );
}

export default Listing;
