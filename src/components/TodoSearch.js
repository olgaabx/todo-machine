import React from "react";
import "../css/TodoSearch.css"

function TodoSearch({searchValue, setSearchValue}) {
  const onSearchValueChanged = (event) => {
    console.log(event.target.value)
    setSearchValue(event.target.value)
  };

  return (
    <input 
      className="TodoSearch"
      placeholder="Cebolla"
      key={setSearchValue}
      value={searchValue}
      onChange={onSearchValueChanged}
    />
  )
}

export { TodoSearch };