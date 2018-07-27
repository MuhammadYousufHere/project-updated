function getTable()	{
 let number = document.querySelector(".initial").value;
 let start = document.querySelector(".start").value;
 let end = document.querySelector(".end").value;
 let output = document.querySelector("section");
 for (let i = start;  i <= end; i++) { 
 	if (end <=15) {
 	console.log(number +" x "+ i +" = " + i * number); 
 } else {
 	console.log("Please follow the limit.")
 }

}
}
