import React, { lazy, Suspense } from 'react';
import './App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

class BookList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            books: [],
            url: "books"
        }

    }

    componentDidMount() {
        axios.get(`http://localhost:9000/books`)
            .then(response => {
                //console.log(response)
                this.setState({ books: response.data });
            })
    }

    render() {
        const bookList = this.state.books
        return (
            <div>
                <h3>List of Books</h3>
                {
                    bookList.map(book => <div key={book.bookId}>
                        <ul>
                            <li>Title : {book.title}</li>
                            <li>Image : {book.image}</li>
                            <li>Price : {book.price}</li>
                            <li>Rating : {book.rating}</li>
                            <li><Link to={{ pathname: `/books/${book.bookId}` }} >See Details</Link></li>

                        </ul>

                    </div>
                    )

                }
            </div>
        );
    }

}

export default BookList;
