const defaultQuote = [
  {
    auther: "steve jobs",
    quote: "Stay hungry stay foolish",
  },
  {
    quote: "Life is a journey, not a destination",
    auther: "Ralph Waldo Emerson",
  },
  {
    quote: "The only way to do great work is to love what you do",
    auther: "Steve Jobs",
  },
  {
    quote: "In the middle of every difficulty lies opportunity",
    auther: "Albert Einstein",
  },
  {
    quote: "Success is not final, failure is not fatal",
    auther: "Winston Churchill",
  },
  {
    quote: "Believe you can and you're halfway there",
    auther: "Theodore Roosevelt",
  },
];

let storedData = localStorage.getItem("localquotes");
let quote;

//checking if not stored in local storage
if (storedData == null) {
  quote = defaultQuote;
  localStorage.setItem("localquote", JSON.stringify(quote));
} else //if it is already stored
{
  quote = JSON.parse(storedData);
}

let displayAllquote = document.querySelector(".display-All-quote");
let displayQuote = document.querySelector(".display-quote");
let displayAuther = document.querySelector(".display-auther");
let generateQuote = document.querySelector(".generate-quote");
let form = document.querySelector("form");
let inputQuote = document.querySelector("#input-new-quote");
let inputAuther = document.querySelector("#input-auther-name");

// displayauther.innerText = quote[0].auther;
// displayquote.innerText = quote[0].quote;

const randomgenerate = (min = 0, max = quote.length) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

// console.log(randomgenerate());

//generatequote
generateQuote.addEventListener("click", function () {
  // let index = randomgenerate();
  let randomQuote = quote[randomgenerate()];
  displayAuther.innerText = randomQuote.auther;
  displayQuote.innerText = randomQuote.quote;
});

//add quote
form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (inputAuther.value === "") {
    alert("Quote and Auther name Cannot be empty");
  } else if (inputQuote.value === "") {
    alert("Quote cannot be empty");
  } else {
    const newQuote = {
      auther: inputAuther.value,
      quote: inputQuote.value,
    };
    console.log(quote.push(newQuote));
    //saving added quote to local storage
    console.log(localStorage.setItem("localquotes", JSON.stringify(quote)));

    inputAuther.value = "";
    inputQuote.value = "";
    alert("Quote Added Successfuly");
    console.log(quote);

    // console.log("form:", form);
    // console.log("inputAuther:", inputAuther);
    // console.log("inputQuote:", inputQuote);
  }
});

//show all quote
displayAllquote.addEventListener("click", function () {
  for (let i = 0; i < quote.length; i++) {
    var showAll = quote[i];
    console.log(showAll);
  }
});
