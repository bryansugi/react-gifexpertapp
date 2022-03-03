import React, { useState } from 'react';
import PropTypes from "prop-types";

const AddCategory = ({setCategories}) => {

  const [inputValue, setInputValue] = useState('Serch');

  const handleInputChange = (e)=>{
    setInputValue(e.target.value);
  } 

  const handleSubmit = (e)=>{
    e.preventDefault();
    
    if(inputValue.trim().length > 2){
        setCategories(cats => [inputValue, ...cats]);
        setInputValue('');
    }
  }

  const handleEmpty= (e)=>{
      setInputValue('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <h4>Adding category</h4>
      <input type="text" id="serch" value={inputValue} onChange={handleInputChange} onFocus={handleEmpty}/>
    </form>
  )
}

AddCategory.propTypes ={
    setCategories: PropTypes.func.isRequired
}



export default AddCategory
