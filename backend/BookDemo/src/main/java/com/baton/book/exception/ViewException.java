package com.baton.book.exception;


import javax.servlet.http.HttpServletRequest;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

@ControllerAdvice
public class ViewException {

	@ResponseBody
	@ResponseStatus(value = HttpStatus.NOT_FOUND)
	@ExceptionHandler(value = Exception.class)
	protected ErrorInfo handleConflict(Exception e, HttpServletRequest request) {

		String bodyOfResponse = e.getMessage();

		String url = request.getRequestURL().toString();
		System.out.println("Handle conflict error msg  = " + bodyOfResponse + " REq URL " + url);

		return new ErrorInfo(url, bodyOfResponse);

	}
	
	@ExceptionHandler({IdException.class})
	
	protected ResponseEntity<String> handle2(IdException unfex) {

		
		return error(HttpStatus.INTERNAL_SERVER_ERROR,unfex);

	}
	
	
	protected ResponseEntity<String> error(HttpStatus status , IdException ee) {

		
		return ResponseEntity.status(status).body(ee.getMessage())  ;

	}
	
	
}