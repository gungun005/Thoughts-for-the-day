// Get the quote container element
const quoteContainer = document.getElementById('quote-container');

fetch('https://type.fit/api/quotes')
  .then(response => response.json())
  .then(data => {
    // Select a random quote from the data array
    const randomQuote = data[Math.floor(Math.random() * data.length)];

    // Create HTML elements to display the quote and author
    const quoteElement = document.createElement('p');
    quoteElement.textContent = randomQuote.text;

    const authorElement = document.createElement('p');
    authorElement.textContent = randomQuote.author;

    // Clear the existing content in the quote container
    quoteContainer.innerHTML = '';

    // Append the quote and author elements to the container
    quoteContainer.appendChild(quoteElement);
    quoteContainer.appendChild(authorElement);
  })
  .catch(error => {
    console.log(error);
  });