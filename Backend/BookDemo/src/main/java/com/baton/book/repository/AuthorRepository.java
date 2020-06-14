package com.baton.book.repository;

import org.springframework.data.repository.CrudRepository;

import com.baton.book.model.Author;

public interface AuthorRepository extends CrudRepository<Author, Integer> {

}
