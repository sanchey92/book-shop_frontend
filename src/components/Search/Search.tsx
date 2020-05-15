import React, {FC, FormEvent, useState} from "react";
import './Search.css'
import {useDispatch} from "react-redux";
import {searchProductByString} from "../../store/Products/actions/ActionCreators";

const Search: FC = () => {

  const [value, setValue] = useState<string>('');

  const dispatch = useDispatch();

  const submitClickHandler = (event: FormEvent) => {
    event.preventDefault();
    dispatch(searchProductByString(value));
    setValue('');
  }

  return (
    <form
      className='search-form'
      onSubmit={submitClickHandler}>
      <input
        type="text"
        name='search'
        id='search'
        placeholder='enter books name...'
        value={value}
        onChange={(event) => {setValue(event.target.value)}}
      />
      <button type='submit' className='btn'>search</button>
    </form>
  )
}

export default Search;