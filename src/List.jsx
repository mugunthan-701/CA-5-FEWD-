// List.jsx
import React from 'react'
import './App.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { IoMdStar } from "react-icons/io";

function List({ query }) {
    const [bookName, setbookName] = useState([])

    useEffect(() => {
        axios.post('https://reactnd-books-api.udacity.com/search', { query: query ? query : 'h' }, { headers: { 'Authorization': 'whatever-you-want' } })
            .then(response => {
                setbookName(response.data.books);
                console.log(response.data)
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
            });
    }, [query])
    const link = "https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png"
    return (
        <div id='main'>
            <div id='books'>
                {!bookName.error ? bookName.map(book => (
                    <div key={book.id}>
                        <img id='book-img' src={book.imageLinks?.thumbnail ? book.imageLinks.thumbnail : link} alt="book" />
                        <h5 id='book-title'>{book.title}</h5>
                        <div id='book-details'>
                            <p id='book-rating'>{book.averageRating ? book.averageRating : 3.8}<span id='star'><IoMdStar fill='grey' /></span> </p>
                            <span id='free'>free</span>
                        </div>
                    </div>
                )) : <p id='not-msg'>Book Not Found</p>}
            </div>
        </div>
    )
}

export default List