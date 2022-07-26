import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBook } from './BooksSlice';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';

const AddBook = () => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const dispatch = useDispatch();
    const navigete = useNavigate();

    // const numberofBooks = useSelector((state)=>state.booksReducer.books.length)

    const handleSubmit = (e) =>{
        e.preventDefault();
        // const book = { id:numberofBooks + 1, title, author };
        const book = { id: uuidv4(), title, author };
        dispatch(addBook(book))
        navigete("/show-books", {replace:true});
    };

    return (
        <div>
            <h2> Add Book </h2>

            <form onSubmit={handleSubmit}>
                <div className='form-field'>
                    <label htmlFor="title"> Title </label>
                    <input type="text" name="title" id="title" value={title} onChange={(e)=> setTitle(e.target.value)} required />
                </div>
                <div className='form-field'>
                    <label htmlFor="author"> Author </label>
                    <input type="text" name="author" id="author" value={author} onChange={(e)=> setAuthor(e.target.value)} required />
                </div>
                <button type="submit">Add Book </button>
            </form>

            <Link to='/show-books'> <button>Back to Book List</button> </Link>
        </div>
    );
};

export default AddBook;