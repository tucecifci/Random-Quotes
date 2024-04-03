# Random-Quotes

Hello everybody! 👋 </br>
✨ Welcome to the Random Quotes Generator! This simple web application generates random quotes or sayings each time it's loaded. It's a fun project that can be used to inspire, motivate, or entertain users with a variety of quotes from different sources. The Random Quotes Generator is a web-based application built using HTML, CSS, and JavaScript. It fetches quotes from a predefined list or an external API and displays them randomly to the user. The user can interact with the application to generate new quotes or share them on social media platforms.

## 👀 Overview

### 📷 Screenshot

![screencapture-127-0-0-1-3002-index-html-2024-04-03-21_03_12](https://github.com/tucecifci/Random-Quotes/assets/151346784/8afcb3a3-687a-426f-84df-fff26b17cdf8)

<img width="1456" alt="Ekran Resmi 2024-04-03 21 03 51" src="https://github.com/tucecifci/Random-Quotes/assets/151346784/8c163a9f-512c-48bf-aaa7-613d6bfe92db">


### 🔗 Links

- https://tucecifci.github.io/Random-Quotes/

## My process

### 💡 Built with

The Random Quotes Generator is built using the following technologies:

- HTML5: Used for structuring the webpage content.
- CSS3: Used for styling the user interface.
- JavaScript: Used for fetching and displaying random quotes.

### 🧠 What I learned

While working on the Random Quotes Generator project, I learned:

- How to fetch data from an external API using JavaScript.
- How to dynamically update the content of a webpage without refreshing the entire page.
- How to integrate social media sharing functionality into a web application.
- How to structure and style a simple web application using HTML and CSS.
- How to manage project dependencies and version control using Git and GitHub.

```javascript
  var authors = Object.keys(quotes);
  var author = authors[Math.floor(Math.random() * authors.length)];

  var quote = quotes[author];

  document.getElementById("quote").textContent = quote;
  document.getElementById("author").textContent = author;
```

### 👩🏼‍💻 Features

The Random Quotes Generator offers the following features:

- Random Quote Generation: Each time the user loads the page or clicks a button, a new random quote is displayed.
- Quote Sharing: Users can easily share their favorite quotes on social media platforms like Twitter or Facebook.
- Simple and Intuitive Interface: The application has a clean and user-friendly interface, making it easy for users to interact with.


### 🤔 How to Use

To use the Random Quotes Generator:

1. Open the `index.html` file in your web browser.
2. Click the "Generate Quote" button to generate a new random quote.
3. Click the "Share" button to share the quote on social media platforms.
4. Enjoy exploring and discovering new quotes!

### 🤌🏻 Useful resources

- https://www.goodreads.com/quotes

## 🏳️‍🌈 Author

- Tuğçe Çifci - [@tucecifci](https://github.com/tucecifci)
- Frontend Mentor - [@tucecifci](https://www.frontendmentor.io/profile/tucecifci)
