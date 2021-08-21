const searchBooks = document.querySelector(".search-form");
const bookList = document.querySelector(".books").children;
const books = Array.from(bookList);

searchBooks.addEventListener("keyup", e => {
  //   console.log(e.target.value);
  books.filter(book => {
    if (!book.innerHTML.includes(e.target.value)) {
      //   console.log(book.textContent);
      book.classList.add("hide");
    }
  });
});
