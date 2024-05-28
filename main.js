let quote = document.querySelector('.quote');
let person = document.querySelector('.person');
let button = document.querySelector('#new-quote');

// Create an array for different quotes
const quotes = [
    {quote: `“Be yourself; everyone else is already taken.”`,
     person: `Oscar Wilde`
    },
    {quote: `“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”`,
     person: `Marilyn Monroe`
    },
    {quote: `“So many books, so little time.”`,
     person: `Frank Zappa`
    },
    {quote: `“A room without books is like a body without a soul.”`,
     person: `Marcus Tullius Cicero`
    },
    {quote: `“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”`,
     person: `Bernard M. Baruch`
    },
    {quote: `“You've gotta dance like there's nobody watching,
    Love like you'll never be hurt,
    Sing like there's nobody listening,
    And live like it's heaven on earth.”`,
     person: `William W. Purkey`
    },
    {quote: `“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”`,
     person: `Dr. Seuss`
    },
    {quote: `“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”`,
     person: `J.K. Rowling, Harry Potter and the Goblet of Fire`
    },
    {quote: `“Don’t walk in front of me… I may not follow
    Don’t walk behind me… I may not lead
    Walk beside me… just be my friend”`,
     person: `Albert Camus`
    },
    {quote: `“Friendship ... is born at the moment when one man says to another "What! You too? I thought that no one but myself . . .”`,
     person: `C.S. Lewis, The Four Loves`
    }
];

// create function for the arrays
button.addEventListener('click', function(){

    let random = Math.floor(Math.random() * quotes.length);   // create random variable randomized the quotes

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;

});
