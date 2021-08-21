const searchBooks = document.querySelector(".search-form");
const bookList = document.querySelector(".books").children;
const books = Array.from(bookList);

searchBooks.addEventListener("keyup", e => {
  books.filter(book => {
    if (!book.textContent.includes(e.target.value.trim())) {
      book.classList.add("hide");
    } else if (book.textContent.includes(e.target.value.trim())) {
      book.classList.remove("hide");
    }
  });
});
