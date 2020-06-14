import React from 'react';
import axios from 'axios';

class BookDescription extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            book: {},
            authors: [],
            bookList: []
        }
    }

    componentDidMount() {

        axios.get(`http://localhost:9000/books/${this.state.id}`)
            .then(response => {

                this.setState({ book: response.data })
            })

        axios.get(`http://localhost:9000/books/${this.state.id}/authors`)
            .then(response => {
                this.setState({ authors: response.data });
                const books = response.data.map((author) => {
                    author.books.map(book => {
                        this.setState({ bookList: [...this.state.bookList, book] })
                    })

                })
            })
    }


    render() {
        return (
            <div>
                <div>
                    <h3>Book Details</h3>
                    <ul>
                        <li>Title : {this.state.book.title}</li>
                        <li>Image : {this.state.book.image}</li>
                        <li>Price : {this.state.book.price}</li>
                        <li>Rating : {this.state.book.rating}</li>
                        <li>Description : {this.state.book.description}</li>
                    </ul>
                    <h5>Author</h5>
                    {
                        this.state.authors.map(author => <div key={author.authorId}>
                            <ul>
                                <li>{author.name}</li>
                            </ul>
                        </div>
                        )
                    }

                </div>
                <h5>List of Books by these Authors</h5>
                <div>
                    {this.state.bookList.map(book => <div key={book.bookId}>
                        <ul>
                            <li>Title : {book.title}</li>
                            <li>Image : {book.image}</li>
                            <li>Price : {book.price}</li>
                            <li>Rating : {book.rating}</li>
                        </ul>
                    </div>
                    )}
                </div>
            </div>
        );
    }
}
export default BookDescription;