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

function displayBooks() {
  const container = document.getElementById("bookContainer");
  container.innerHTML = ""; // Clear previous content

  myLibrary.forEach(book => {
    const card = document.createElement("div");
    card.classList.add("book-card");

    card.innerHTML = `
      <h3>${book.title}</h3>
      <p><strong>Author:</strong> ${book.author}</p>
      <p><strong>Pages:</strong> ${book.no_of_pages}</p>
      <p><strong>Price:</strong> Rs. ${book.price}</p>
    `;

    container.appendChild(card);
  });
}


//console.log(myLibrary);
displayBooks();