
var elements = document.querySelectorAll('.forma > form input');
for (i=0; i<elements.length; i++) {
 (function(elem) {
   var name = elem.getAttribute('name');
   elem.onchange = function() {
    localStorage.setItem(name, elem.value);
   };
   if(localStorage.getItem(name) == null){
  	elem.setAttribute('value', elem.value)
  }else{
  	elem.setAttribute('value', localStorage.getItem(name));
	}
 })(elements[i]);
}
