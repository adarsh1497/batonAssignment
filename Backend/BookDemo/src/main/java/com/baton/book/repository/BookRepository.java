package com.baton.book.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.baton.book.model.Book;

public interface BookRepository extends JpaRepository<Book, Integer> {


}
