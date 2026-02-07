const myLibrary = [];
const container = document.querySelector(".container");

function Book(title, author, publicationDate, synopsis) {
  if (!new.target) {
    throw Error("Please use 'new' with constructor");
  }

  this.title = title;
  this.author = author;
  this.publicationDate = publicationDate;
  this.synopsis = synopsis;
  this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author, publicationDate, synopsis) {
  const book = new Book(title, author, publicationDate, synopsis);
  myLibrary.push(book);
}

addBookToLibrary("Harry Potter and the Philosopher's Stone", "J.K. Rowling", 1997, "Harry Potter, an orphan raised by his cruel relatives, discovers on his eleventh birthday that he is a wizard and has been invited to attend Hogwarts School of Witchcraft and Wizardry. There, he forms close friendships, begins to understand his mysterious past, and learns that his parents were killed by the dark wizard Lord Voldemort, who vanished after failing to kill Harry as a baby. As strange events unfold at the school, Harry and his friends uncover a plot to steal the powerful Philosopher’s Stone, leading Harry to confront the lingering threat of Voldemort and take his first step into the wizarding world.");
addBookToLibrary("Lord Of The Ring", "J.R.R. Tolkien", 1954, "In Middle-earth, the young hobbit Frodo Baggins inherits a powerful and corrupting Ring created by the Dark Lord Sauron to dominate all life. When it becomes clear that Sauron seeks to reclaim it, Frodo joins a diverse fellowship of allies—hobbits, men, an elf, a dwarf, and a wizard—to destroy the Ring in the fires of Mount Doom, the only place it can be unmade. As war spreads across the land and the Ring’s influence grows stronger, the fate of Middle-earth rests on Frodo’s resilience and the fragile hope that good can prevail over overwhelming darkness.")
addBookToLibrary("King's Game", "Nobuaki Kanazawa", 2009, "In King’s Game, a high school student named Nobuaki receives mysterious text messages from someone calling himself “the King,” ordering him and his classmates to complete increasingly disturbing and dangerous tasks. At first dismissed as a prank, the commands quickly escalate, and those who refuse face deadly consequences. As paranoia and fear spread through the class, friendships fracture and trust erodes, forcing Nobuaki to uncover the origin of the game and attempt to break the cycle before it destroys everyone involved.")
console.log(myLibrary);

function displayBooks() {
  myLibrary.forEach(book => {
    const card = document.createElement('div');
    card.classList.add("card")

    const title = document.createElement('h2');
    title.textContent = book.title;

    const info = document.createElement('span');
    info.textContent = `${book.author} | ${book.publicationDate}`;

    const synopsis = document.createElement('p');
    synopsis.textContent = book.synopsis;

    card.appendChild(title);
    card.appendChild(info);
    card.appendChild(synopsis);

    container.appendChild(card);
  })
}

displayBooks();