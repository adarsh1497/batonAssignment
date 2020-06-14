import React from 'react';
import './App.css';
import axios from 'axios';

class AuthorList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            authors: []
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:9000/author`)
            .then(response => {
                //console.log(response)
                this.setState({ authors: response.data });
            })
    }

    render() {
        const authorList = this.state.authors;
        return (
            <div>
                <h3>List of Authors</h3>
                {
                    authorList.map(author => <div key={author.authorId}>
                        <ul>
                            <li>Name : {author.name}</li>
                        </ul>
                    </div>
                    )
                }
            </div>
        );
    }
}

export default AuthorList;
