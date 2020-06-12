import React from 'react';
import ReactDOM from 'react-dom';
import BookList from './BookList';
import AuthorList from './AuthorList';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import BookDescription from './BookDescription';


const routing = (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/books" >All Books</Link>
        </li>
        <li>
          <Link to="/author">All Authors</Link>
        </li>
      </ul>

      <Route path="/books" exact component={BookList} />
      <Route path="/books/:id" exact component={BookDescription} />
      <Route path="/author" exact component={AuthorList} />
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));


