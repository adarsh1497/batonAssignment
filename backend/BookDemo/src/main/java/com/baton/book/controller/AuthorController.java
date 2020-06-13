package com.baton.book.controller;

import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.baton.book.exception.IdException;
import com.baton.book.model.Author;
import com.baton.book.model.Book;
import com.baton.book.repository.AuthorRepository;
import com.baton.book.repository.BookRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class AuthorController {

	@Autowired
	private AuthorRepository authorRepo;

	@Autowired
	private BookRepository bookRepo;

	@GetMapping("/author")
	public List<Author> getAllAuthor() {
		return (List<Author>) authorRepo.findAll();
	}

	@GetMapping("/author/{id}/books")
	public Set<Book> getBooksFromAuthor(@PathVariable int id) throws IdException {
		Author author;
		try {
			author = authorRepo.findById(id).get();
		} catch (Exception e) {
			throw new IdException("Id Not Found");
		}
		return author.getBooks();

	}

	@PostMapping("/author")
	public Author addAuthor(@RequestBody Author author) {
		authorRepo.save(author);
		return author;
	}

	@PostMapping("/author/{authorId}/addbook/{bookId}")
	public Author addBookWithId(@PathVariable int authorId, @PathVariable int bookId) throws IdException {
		Author author; // = authorRepo.findById(authorId).get();
		Book book; // = bookRepo.findById(bookId).get();
		try {
			author = authorRepo.findById(authorId).get();
		} catch (Exception e) {
			throw new IdException("Author Id not found");
		}
		try {
			book = bookRepo.findById(bookId).get();
		} catch (Exception e) {
			throw new IdException("Book Id not found");
		}
		author.addBook(book);
		authorRepo.save(author);
		return author;
	}

	@PostMapping("/author/{id}/addbook")
	public Author addBookToAuthor(@RequestBody Book book, @PathVariable int id) throws IdException {
		Author author;
		try {
			author = authorRepo.findById(id).get();
		} catch (Exception e) {
			throw new IdException("Author  Id  Not found");
		}
		author.addBook(book);
		authorRepo.save(author);
		return author;
	}

}
