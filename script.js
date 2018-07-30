function getTable()	{

 let number = parseInt(document.querySelector(".initial").value);
 let start = parseInt(document.querySelector(".start").value);
 let end = parseInt(document.querySelector(".end").value);
 let output = document.querySelector("section");
 for (let i = start;  i <= end; i++) { 
 	var node = document.createElement("div");
    var textnode = document.createTextNode(number +" x "+ i +" = " + i * number);
    node.appendChild(textnode);
    output.appendChild(node);
   
}
}
