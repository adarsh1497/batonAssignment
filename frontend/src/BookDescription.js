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

        axios.get(`http://localhost:9000/books/${this.state.id}/authors`)
            .then(response => {

                this.setState({ authors: response.data });

            })
        axios.get(`http://localhost:9000/books/${this.state.id}`)
            .then(response => {

                this.setState({ book: response.data })
            })
    }

    
    render() {
        return (
            <div>
                <div>
                    <ul>
                        <li>Title : {this.state.book.title}</li>
                        <li>Image : {this.state.book.image}</li>
                        <li>Price : {this.state.book.price}</li>
                        <li>Rating : {this.state.book.rating}</li>
                    </ul>

                    {
                        this.state.authors.map(author => <div key={author.authorId}>
                            <ul>
                                <li>{author.name}</li>
                            </ul>
                        </div>
                        )
                    }

                </div>
                {/* <div>
                    {this.state.bookList.map(book => <div key={book.bookId}>
                        <ul>
                            <li>Title : {book.title}</li>
                            <li>Image : {book.image}</li>
                            <li>Price : {book.price}</li>
                            <li>Rating : {book.rating}</li>
                        </ul>
                    </div>
                    )}
                </div> */}
            </div>
        );
    }
}
export default BookDescription;