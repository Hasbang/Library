class Book {
    constructor(title, author, pages, isread) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isread = isread;
    }
}

class Library {
    constructor() {
        this.books = [];
    }
    addBookToLibrary(title, author, pages, isread) {
        const newBook = new Book(title, author, pages, isread);
        this.books.push(newBook);
        this.displayBooks();
    }
    removeBook(index) {
        this.books.splice(index, 1);
        this.displayBooks();
    }
    toggleReadStatus(index) {
        this.books[index].isread = !this.books[index].isread;
        this.displayBooks();
    }
    displayBooks() {
        const bookCards = document.querySelector('.book-cards');
        bookCards.innerHTML = '';
        this.books.forEach((book, index) => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <h2>${book.title}</h2>
                <p><strong>Author:</strong> ${book.author}</p>
                <p><strong>Pages:</strong> ${book.pages} pages</p>
                <p><strong>Read:</strong> ${book.isread ? "Yes" : "No"}</p>
                <button onclick="library.removeBook(${index})">Remove</button>
                <button onclick="library.toggleReadStatus(${index})">Change Read Status</button>
            `;
            bookCards.appendChild(card);
        });
    }
}

const library = new Library();

// Modal functionality
const modal = document.querySelector("#newBookModal");
const btn = document.querySelector("#newBook-btn");
const span = document.querySelector(".close");

btn.onclick = function () {
    modal.style.display = 'block';
};
span.onclick = function () {
    modal.style.display = 'none';
};
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};

document.querySelector('#newBookForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const title = document.querySelector("#title").value.trim();
    const author = document.querySelector("#author").value.trim();
    const pages = document.querySelector("#pages").value.trim();
    const isread = document.querySelector("#read").checked;

    // Validate inputs
    if (title && author && pages && !isNaN(pages)) {
        library.addBookToLibrary(title, author, pages, isread);
        document.querySelector('#newBookForm').reset();
        modal.style.display = 'none';
    } else {
        alert("Please fill out all fields correctly.");
    }
});
