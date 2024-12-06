const myLibrary = [];

function Book(title, author, no_of_pages ,price) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.no_of_pages = no_of_pages;
  this.price = price;
}

const Book1 = new Book("Harry Potter", "JK Rowling", 136, 1200 );

console.log(Book1);


function addBookToLibrary(title, author, no_of_pages, price) {
  
  const newBook = new Book(title, author, no_of_pages, price);

  myLibrary.push(newBook);

}
