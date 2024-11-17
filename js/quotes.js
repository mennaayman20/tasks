 quotes = [
    { text: "The best way to predict the future is to invent it.", author: "Alan Kay"},
    { text: "Life is what happens when you're busy making other plans.", author: "John Lennon"},
    { text: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky", category: "Motivation"},
    { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill"},
    { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" }
  ];
  
  function displayquotes() {

    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    document.getElementById("quote").innerText= `"${randomQuote.text}"`;
  document.getElementById("author").innerText = `- ${randomQuote.author}`;
  
}
  
displayquotes();