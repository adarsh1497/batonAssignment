import React, { useState, useRef, useCallback } from 'react';
import Books from './try';
import { Link } from 'react-router-dom';

export default function App() {
    
    const [pageNumber, setPageNumber] = useState(0)

    const {
        books,
        hasMore,
        loading,
        error
    } = Books(pageNumber)

    const observer = useRef()
    const lastBookElementRef = useCallback(node => {
        if (loading) return
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore) {
                setPageNumber(prevPageNumber => prevPageNumber + 1)
            }
        })
        if (node) observer.current.observe(node)
    }, [loading, hasMore])


    return (
        <>
            {books.map((book, index) => {
                if (books.length === index + 1) {
                    return <div ref={lastBookElementRef} key={book.bookId}>{
                        <ul>
                            <li>Title : {book.title}</li>
                            <li>Image : {book.image}</li>
                            <li>Price : {book.price}</li>
                            <li>Rating : {book.rating}</li>
                            <li><Link to={{ pathname: `/books/${book.bookId}` }} >See Details</Link></li>

                        </ul>
                    }</div>
                } else {
                    return <div key={book.bookId}>{
                        <ul>
                        <li>Title : {book.title}</li>
                        <li>Image : {book.image}</li>
                        <li>Price : {book.price}</li>
                        <li>Rating : {book.rating}</li>
                        <li><Link to={{ pathname: `/books/${book.bookId}` }} >See Details</Link></li>

                    </ul>
                    }</div>
                }
            })}
            <div>{loading && 'Loading...'}</div>
            <div>{error && 'Error'}</div>
        </>
    )
}
