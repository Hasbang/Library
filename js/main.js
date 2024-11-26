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
    // call diplay function

    displayBook();
    

}

function displayBook(){
    const bookcards = document.querySelector('.book-cards');
    //  bookcards.innerHTML = '';
    myLibrary.forEach((book) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
    <h2>${book.title}</h2>
    <p><strong> Author:</strong> ${book.author}</p>
    <p><strong> Pages:</strong> ${book.pages}</p>
    <p><strong> Read:</strong> ${book.isread ? 'yes' : 'No'}</p>
    `;
    bookcards.appendChild(card);

})
}

addBooksToLibrary('Book One', 'John Doe', 231 , )