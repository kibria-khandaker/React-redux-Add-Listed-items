import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteBook } from './BooksSlice';

const BooksView = () => {
    const books = useSelector((state)=> state.booksReducer.books);
    // console.log(books);
    const dispatch = useDispatch();
    const handleDeleteBook=(id)=>{
        dispatch(deleteBook(id))
    };

    return (
        <div>
            <h2> Book Show List </h2>

            <table>
                <thead>
                <tr>
                    {/* <th>ID</th> */}
                    <th>index</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                    {books && books.map((book, index)=>{
                        const {id, title,author}=book;
                        // console.log(book);
                        return <tr key={id} >
                            {/* <td>{id}</td> */}
                            <td>{index+1}</td>
                            <td>{title}</td>
                            <td>{author}</td>
                            <td>
                                <Link to="/edit-book" state={{id,title,author}}>
                                    <button>Edit</button>
                                </Link>
                                <button onClick={()=>{handleDeleteBook(id)}}>Delete</button>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>

        </div>
    );
};

export default BooksView;

// https://www.youtube.com/watch?v=No1FYwxK6Es&list=PLgH5QX0i9K3pe7Z7ATcyLdUW3grE4Vfld&index=18
// 21.26 time