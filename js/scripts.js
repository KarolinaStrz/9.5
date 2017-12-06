
var withButtonItemsClass = document.getElementsByClassName('button');

 console.log(withButtonItemsClass); 
 
var ButtonName = withButtonItemsClass;

for (var i = 0; i < ButtonName.length; i++) {

	var buttonTxt = withButtonItemsClass[i].innerText;
	console.log(buttonTxt);
    }