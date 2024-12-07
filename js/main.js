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
function removeBook(index){
    myLibrary.splice(index,1);
    displayBook();
}

function toggleReadStatus(index){
    myLibrary[index].isread = !myLibrary[index].isread;
    displayBook();
}

function displayBook() {
    const bookcards = document.querySelector('.book-cards');
    bookcards.innerHTML = '';
    myLibrary.forEach((book, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
    <h2>${book.title}</h2>
    <p><strong> Author:</strong> ${book.author}</p>
    <p><strong> Pages:</strong> ${book.pages}</p>
    <p><strong> Read:</strong> ${book.isread ? 'yes' : 'No'}</p>
    <button onclick = 'removeBook(${index})'> Remove </button>
    <button onclick = 'toggleReadStatus(${index})'> Change Read Status </button>
     `;
        bookcards.appendChild(card);

    })
}



// modal Functionality

const btn = document.querySelector('#newBook-btn');
const modal = document.querySelector('#newBookModal')
const span = document.querySelector('.close')

btn.onclick = function(){
    modal.style.display = 'block';
};
span.onclick = function(){
    modal.style.display = 'none'
};

window.onclick = function(e){
  if(e.target == modal){
    modal.style.diplay= 'none'
  }
}

document.querySelector('#newBookForm').addEventListener('submit', function(e){
    e.preventDefault();
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const isread = document.querySelector('#read').checked;

    addBooksToLibrary(title,author,pages, isread);

    document.querySelector('#newBookForm').reset();
    modal.style.display ='none';


})
