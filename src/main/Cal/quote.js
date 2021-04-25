function quoteGenerator(){
    const quotes = ["“Do the best you can.", 
       "Do what you can, with what you have, where you are. – Theodore Roosevelt.", 
       "It's never too late to be what you might've been. – George Eliot.",
        "If you can dream it, you can do it. – Walt Disney.",
        "Trust yourself that you can do it and get it. – Baz Luhrmann."]
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    const container = document.getElementById('quotes');
    container.innerText = quote;
    
}