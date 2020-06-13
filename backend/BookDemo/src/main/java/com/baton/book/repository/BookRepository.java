package com.baton.book.repository;

import org.springframework.data.repository.CrudRepository;

import com.baton.book.model.Book;

public interface BookRepository extends CrudRepository<Book, Integer> {

}
