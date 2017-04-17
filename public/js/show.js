document.addEventListener('DOMContentLoaded', function() {

  console.log('script is loaded')


  let replyButton = document.querySelectorAll('.dom-reply');
  let navButton = document.querySelector('.menu-icon');
  let nav = document.querySelector('.menu');


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
