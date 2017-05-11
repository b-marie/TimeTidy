var mongoose = require("mongoose");



function checkOff(){
    ("ul").on("click", "li", function() {
    	(this).toggleClass("checkedOff");
    });
}
//Check off specific todos by clicking
// ("ul").on("click", "li", function() {
// 	(this).toggleClass("checkedOff");
// });







//Click on x to delete Todo
// ("ul").on("click", "span", function(event){
// 	(this).parent().fadeOut(500, function(){
// 		(this).remove();
// 	});
// 	event.stopPropagation();
// });

//Add new todos
// ("input[type='text']").keypress(function(event){
// 	if(event.which === 13) {
// 		//Grabbing new todo text from input
// 		var todoText = ((this).val());
// 		(this).val("");
// 		//Create a new li and add to ul
// 		("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " + todoText + "</li>")
// 	}
// });

//Show/hide the input
// (".fa-pencil").click(function() {
// 	("input[type='text']").fadeToggle();
// })
module.exports = checkOff;