package com.baton.book.controller;

import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.baton.book.exception.IdException;
import com.baton.book.model.Author;
import com.baton.book.model.Book;
import com.baton.book.repository.BookRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController

public class BookController {
	
	@Autowired
	private BookRepository bookRepo;
	
	
	@GetMapping("/books")
	public List<Book> getAllBooks(){
		return  (List<Book>)bookRepo.findAll();
	}
	
	@GetMapping("/books/{id}")
	public Book getBook(@PathVariable int id) throws IdException {
		Book book ;
		try {
			book = bookRepo.findById(id).get();
		}
		catch(Exception e){
			throw new IdException("No book with this id");
		}
		return book;
	}
	
	@GetMapping("/books/{id}/authors")
	public Set<Author> getAuthor(@PathVariable int id) throws IdException {
		Book book ;
		try {
			book = bookRepo.findById(id).get();
		}
		catch(Exception e) {
			throw new IdException("No book with this Id") ;
		}
		return book.getAuthors();
	}
	
}
	
	

