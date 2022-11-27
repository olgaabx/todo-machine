import "../css/CreateTodoButton.css"

function CreateTodoButton() {
  const onClickButton = () => {
    alert('Aquí debería aparecer el modal');
  }

  return (
    <button 
    className="CreateTodoButton"
    onClick={onClickButton}
    >
      +
    </button>
  )
}

export { CreateTodoButton };