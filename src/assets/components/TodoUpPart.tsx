import React from 'react'

const TodoUpPart = () => {
  return (
    <form action="#">
      <h1>Todo Project</h1>
      <div className="homeTodo">
        <input
          value={todo}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTodo(e.target.value)
          }
          placeholder="Todo daxil edin"
          type="text"
        />
        <button onClick={getAddedTodo}>Added</button>
      </div>
    </form>
  )
}

export default TodoUpPart
