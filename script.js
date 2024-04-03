function generate() {
  var quotes = {
    "- John Galsworthy": '"Life calls the tune, we dance"',
    "- Jenny Valentine":
      '"Even when you’d lost everything you thought there was to lose, somebody came along and gave you something for free."',
    "- Oscar Wilde": '"Be yourself; everyone else is already taken."',
    "- Frank Zappa ": '"So many books, so little time."',
    "- Mae West ":
      '"You only live once, but if you do it right, once is enough."',
    "- Mahatma Gandhi": '"Be the change that you wish to see in the world."',
    "- Friedrich Nietzsche ": '"Without music, life would be a mistake."',
  };
  var authors = Object.keys(quotes);
  var author = authors[Math.floor(Math.random() * authors.length)];

  var quote = quotes[author];

  document.getElementById("quote").textContent = quote;
  document.getElementById("author").textContent = author;
}
