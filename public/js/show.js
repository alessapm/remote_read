document.addEventListener('DOMContentLoaded', function() {

  console.log('script is loaded')

let replyButton = document.getElementsByClassName('dom-reply');
let replyToComment = document.getElementsByClassName('add-reply');

  replyButton.forEach((each) => {
     each.addEventListener('click', function(){
    replyToComment.style.visibility = 'visible';
});
  })






})
