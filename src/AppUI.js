import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { CreateTodoButton } from "./components/CreateTodoButton";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { Modal } from "./components/Modal";

function AppUI({
  totalTodos,
	completedTodos,
	searchValue,
  setSearchValue,
	searchedTodos,
	completeTodo,
	deleteTodo
}) {
  return (
    <>
      <TodoCounter 
        total={totalTodos}
        completed={completedTodos}
      />
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {searchedTodos.map((todo) => (
          <TodoItem 
          key={todo.text}
          text={todo.text}
          completed={todo.completed}
          onComplete={() => completeTodo(todo.text)}
          onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <Modal>
          <p>{searchedTodos[0].text}</p>
      </Modal>

      <CreateTodoButton />
    </>
  );
}

export { AppUI };