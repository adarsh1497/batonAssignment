package com.baton.book.model;

import java.util.HashSet;

import java.util.Set;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;


@Entity
@Table(name = "books")
public class Book {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int bookId;
	
	private String title ;
	
	
	@JsonBackReference
	@ManyToMany( mappedBy = "books")
	private Set<Author> authors = new HashSet<Author>();
	
	private String image ;
	
	private Double price;
	
	private Double rating ;
	
	
	private String description ;
	
	public int getBookId() {
		return bookId;
	}

	public String getTitle() {
		return title;
	}

	public Set<Author> getAuthors() {
		return authors;
	}


	public String getImage() {
		return image;
	}


	public void setImage(String image) {
		this.image = image;
	}


	public Double getPrice() {
		return price;
	}

	public void setPrice(Double price) {
		this.price = price;
	}


	public Double getRating() {
		return rating;
	}

	public String getDescription() {
		return description;
	}

	
}
