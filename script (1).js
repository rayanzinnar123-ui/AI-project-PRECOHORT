const quotes = [
      `"In the middle of every difficulty lies opportunity." – Albert Einstein`,
      `"Your time is limited, so don’t waste it living someone else’s life." – Steve Jobs`,
      `"Success is not final, failure is not fatal: It is the courage to continue that counts." – Winston Churchill`,
      `"Believe you can and you're halfway there." – Theodore Roosevelt`,
      `"Do what you can, with what you have, where you are." – Theodore Roosevelt`,
      `"Happiness is not something ready made. It comes from your own actions." – Dalai Lama`,
      `"You miss 100% of the shots you don’t take." – Wayne Gretzky`,
      `"Don’t watch the clock; do what it does. Keep going." – Sam Levenson`,
      `"It does not matter how slowly you go as long as you do not stop." – Confucius`,
      `"The only way to do great work is to love what you do." – Steve Jobs`
    ];

    function newQuote() {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      document.getElementById('quoteBox').textContent = quotes[randomIndex];
    }

function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(function () {
	showTime();
}, 1000);