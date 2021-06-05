import { useState } from "react";
import {Button} from "reactstrap";

const SearchForm = ({search}) =>{

    const [searchInput, setSearchInput] = useState();

    const handleSubmit = (e) =>{
        e.preventDefault();
        search(searchInput || undefined);
    }

    const handleChange = (e) =>{
        setSearchInput(e.target.value);
    }

    return (
        <form className='d-flex align-items-center' onSubmit={handleSubmit} >
                <label htmlFor='name' className='my-2'>Search </label>
                <input className='mx-2'
                name='name' 
                id='name' 
                type='text'
                onChange={handleChange}
                 />
                <Button color="primary btn-sm" >Submit</Button>
            </form>
    )
};

export default SearchForm;