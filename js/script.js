const myLibrary = [];

function Book(title, author, no_of_pages ,price) {
  // the constructor...
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.no_of_pages = no_of_pages;
  this.price = price;
}



function addBookToLibrary(title, author, no_of_pages, price) {
  
  const newBook = new Book(title, author, no_of_pages, price);

  myLibrary.push(newBook);

}

// Example usage
addBookToLibrary("Harry Potter", "JK Rowling", 136, 1200);
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310, 800);


console.log(myLibrary);