document.addEventListener('DOMContentLoaded', function() {

  console.log('script is loaded')


  let replyButton = document.querySelectorAll('.dom-reply');
  let navButton = document.querySelector('.menu-icon');
  let nav = document.querySelector('.menu');
  let quotesh4 = document.getElementById('quotesh4');

  let quotes = [
   "'A reader lives a thousand lives before he dies, said Jojen. The man who never reads lives only one.' <br> -George R.R. Martin (A Dance With Dragons)  ",
   "'You can never get a cup of tea large enough or a book long enough to suit me.' <br> -C.S. Lewis  ",
   "'It is what you read when you don't have to that determines what you will be when you can't help it.' <br> -Oscar Wilde ",
   "'Books are a uniquely portable magic.” <br> -Stephen King ",
   "'Many people, myself among them, feel better at the mere sight of a book.' <br> -Jane Smiley ",
   "'A great book should leave you with many experiences, and slightly exhausted at the end. You live several lives while reading.' <br> -William Styron ",
   "'Books are the quietest and most constant of friends; they are the most accessible and wisest of counselors, and the most patient of teachers.' <br> -Charles William Eliot ",
   "'I find television very educating. Every time somebody turns on the set, I go into the other room and read a book.' <br> -Groucho Marx "
   ];

  setQuote = () => setInterval(function(){
    quotesh4.classList.add('quote-class');
    quotesh4.innerHTML = quotes[Math.floor(Math.random() * quotes.length)];
    quotesh4.style.opacity = 1;
    setTimeout(function(){
      quotesh4.style.opacity = 0;
    },7400)
   }, 8000)

  setQuote();


  navButton.addEventListener('click', function(){
    nav.classList.toggle('show-menu');
    console.log('nav icon pressed');
  });


replyButton.forEach((reply) => {
  reply.addEventListener('click', function(e){

    // console.log(e.target.attributes[1].value)
    let numVal = e.target.attributes[1].value

    let commentReply = document.getElementById(numVal)
    // console.log(e, 'this is working');

     commentReply.style.visibility = "visible";

  });
});





})
