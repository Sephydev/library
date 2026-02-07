const myLibrary = [];

function Book(title, author, publicationDate) {
  if (!new.target) {
    throw Error("Please use 'new' with constructor");
  }

  this.title = title;
  this.author = author;
  this.publicationDate = publicationDate;
  this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author, publicationDate) {
  const book = new Book(title, author, publicationDate);
  myLibrary.push(book);
}

addBookToLibrary("Harry Potter", "J.K. Rowling", 1997);
addBookToLibrary("Lord Of The Ring", "J.R.R. Tolkien", 1954)
console.log(myLibrary);