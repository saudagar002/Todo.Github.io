import React from 'react'

const TodoList = ({ todos, setTodos , setEditTodo }) => {

    const handleComplete =(todo)=>{
        setTodos(
            todos.map((item)=>{
                if(item.id === todo.id){
                    return{...item,completed: !item.completed}
                }
                return item;
            })
        )
    }

    const handleEdit =({id})=>{
        const findTodo = todos.find((todo)=>todo.id === id);
        setEditTodo(findTodo)
    }

 const handleDelete =({id})=>{
    setTodos(todos.filter((todo)=>todo.id !== id ))
 }

    return (
        <div>
            {todos.map((todo) => (
                <div className='container mt-2'>
                    <div className='row d-flex justify-content-center'>
                        <div className='col-md-6'>
                            <div className='ms-5'>
                                <li key={todo.id}>
                                    <input value={todo.title} onChange={(event) => event.preventDefault()} />
                                </li>
                                <div className='d-flex flex-direction-row mt-2 ms-5'>

                                <div className='me-1'>
                                    <button className='btn-sm'  onClick={()=> handleComplete(todo)}><i class="fa-solid fa-check"></i></button>
                                </div>
                                <div className='me-1'>
                                    <button className='btn-sm' onClick={()=> handleEdit(todo)} ><i class="fa-regular fa-pen-to-square"></i></button>
                                </div>
                                
                                <div>
                                    <button className='btn-sm' onClick={()=> handleDelete(todo)}><i class="fa-solid fa-trash"  ></i></button>
                                </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            ))}

        </div>
    );
}

export default TodoList