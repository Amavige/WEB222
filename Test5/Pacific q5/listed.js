var list = document.getElementById("top");
var contact = document.createElement("li");
list.appendChild(contact);
contact.innerHTML = "Contact";
var about = document.querySelectorAll("#top li")[0];
list .insertBefore(Contact,about);
var order =document.querySelectorAll("#top li")[2];
var ordered2 = list.removeChild(order);
var about2 = document.querySelectorAll("#top li")[1];
var direction = about2.cloneNode(true);
list.appendChild(direction);
direction.innerHTML = "Direction"