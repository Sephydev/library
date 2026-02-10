const myLibrary = [];
const container = document.querySelector(".container");
const addBookBtn = document.querySelector("#addBook");
const closeDialogBtn = document.querySelector("#closeDialog");
const addBookForm = document.querySelector("#addBookForm");
const dialog = document.querySelector("dialog");

function Book({ title, author, publicationDate, numOfPage, isRead, synopsis }) {
  if (!new.target) {
    throw Error("Please use 'new' with constructor");
  }

  this.title = title;
  this.author = author;
  this.publicationDate = publicationDate;
  this.numOfPage = numOfPage;
  this.isRead = isRead;
  this.synopsis = synopsis;
  this.id = crypto.randomUUID();
}

Book.prototype.modifyIsRead = function () {
  this.isRead = !this.isRead;
}

function addBookToLibrary(book) {
  const newBook = new Book(book);
  myLibrary.push(newBook);
}

const testBooks = [
  {
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    publicationDate: 1997,
    numOfPage: 309,
    isRead: true,
    synopsis: "Harry Potter, an orphan raised by his cruel relatives, discovers on his eleventh birthday that he is a wizard and has been invited to attend Hogwarts School of Witchcraft and Wizardry. There, he forms close friendships, begins to understand his mysterious past, and learns that his parents were killed by the dark wizard Lord Voldemort, who vanished after failing to kill Harry as a baby. As strange events unfold at the school, Harry and his friends uncover a plot to steal the powerful Philosopher’s Stone, leading Harry to confront the lingering threat of Voldemort and take his first step into the wizarding world."
  },
  {
    title: "Lord Of The Ring",
    author: "J.R.R. Tolkien",
    publicationDate: 1954,
    numOfPage: 448,
    isRead: false,
    synopsis: "In Middle-earth, the young hobbit Frodo Baggins inherits a powerful and corrupting Ring created by the Dark Lord Sauron to dominate all life. When it becomes clear that Sauron seeks to reclaim it, Frodo joins a diverse fellowship of allies—hobbits, men, an elf, a dwarf, and a wizard—to destroy the Ring in the fires of Mount Doom, the only place it can be unmade. As war spreads across the land and the Ring’s influence grows stronger, the fate of Middle-earth rests on Frodo’s resilience and the fragile hope that good can prevail over overwhelming darkness."
  },
  {
    title: "King's Game",
    author: "Nobuaki Kanazawa",
    publicationDate: 2009,
    numOfPage: 374,
    isRead: false,
    synopsis: "In King’s Game, a high school student named Nobuaki receives mysterious text messages from someone calling himself “the King,” ordering him and his classmates to complete increasingly disturbing and dangerous tasks. At first dismissed as a prank, the commands quickly escalate, and those who refuse face deadly consequences. As paranoia and fear spread through the class, friendships fracture and trust erodes, forcing Nobuaki to uncover the origin of the game and attempt to break the cycle before it destroys everyone involved."
  }
];

for (let book of testBooks) {
  addBookToLibrary(book);
}

function removeBooksDisplayed() {
  while (container.firstChild) {
    container.removeChild(container.firstChild)
  }
}

function displayBooks( ) {
  myLibrary.forEach(book => {
    const card = document.createElement('div');
    card.classList.add("card")
    card.setAttribute("data-id", book.id);

    const title = document.createElement('h2');
    title.textContent = book.title;

    const info = document.createElement('span');
    info.textContent = `${book.author} | ${book.publicationDate} | ${book.numOfPage} | Already read : ${book.isRead ? "✅" : "❌"} `;

    const synopsis = document.createElement('p');
    synopsis.textContent = book.synopsis;

    const btnContainer = document.createElement("div");
    btnContainer.classList.add("btn-container");

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    
    deleteBtn.addEventListener("click", () => {
        const indexOfElem = myLibrary.findIndex(bookOfLibrary => bookOfLibrary.id === book.id);
        myLibrary.splice(indexOfElem, 1);

        removeBooksDisplayed();
        displayBooks();
    })

    const isReadBtn = document.createElement("button");
    isReadBtn.textContent = book.isRead ? "Didn't read" : "Is read";

    isReadBtn.addEventListener("click", () => {
      book.modifyIsRead();

      removeBooksDisplayed();
      displayBooks();
    })

    btnContainer.appendChild(deleteBtn);
    btnContainer.appendChild(isReadBtn);

    card.appendChild(title);
    card.appendChild(info);
    card.appendChild(synopsis);
    card.appendChild(btnContainer);

    container.appendChild(card);
  })
}

addBookBtn.addEventListener("click", () => {
  dialog.showModal();
})

closeDialogBtn.addEventListener("click", () => {
  dialog.close();
})

addBookForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const newBook = {}

  formdata = new FormData(e.target)
  for (let [key, value] of formdata.entries()) { 
    newBook[key] = value;
  }

  removeBooksDisplayed();

  addBookToLibrary(newBook);
  displayBooks();
})

displayBooks();