// Empty Array for Library books 
const myLibrary = [];

// Object constructor function for Books 

function Book(title, author, pages, isread) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isread = isread;
}

// add books to library

function addBooksToLibrary(title, author, pages, isread) {
    // create new book 

    let newBook = new Book(title, author, pages, isread);

    // add book to library
    myLibrary.push(newBook);
    

}
console.log(myLibrary)