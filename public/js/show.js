document.addEventListener('DOMContentLoaded', function() {

  console.log('script is loaded')


  let replyButton = document.querySelectorAll('.dom-reply');
  let replyToComment = document.querySelectorAll('.add-reply');

  // console.log('replyButton: ', replyButton);
  // console.log('replyToComment: ', replyToComment);
  // console.log('replyButton[0]: ', replyButton[0]);
  console.log('replyToComment[0]: ', replyToComment[0]);



// for (var i = 0; i < replyButton.length; i++){
//   // console.log(replyToComment[i]);
//   replyButton[i].addEventListener('click', function(){
//     replyToComment[i].style.visibility = "visible";
//   })
// };

replyButton.forEach(function(reply){
  replyButton.addEventListener('click', function(e){

    console.log(e.target.attributes[1].value)
    var numVal = e.target.attributes[1].value
    // console.log(e, 'this is working');

     replyToComment.style.visibility = "visible";

  });
});



})
