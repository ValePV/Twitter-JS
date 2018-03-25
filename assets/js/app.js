// llamo al contador y al boton
var btn=document.getElementById("btn");
var count=document.getElementById("count");

//función para el contador de caracteres
function contar() { 
    var comment = document.getElementById("comment");
    var max = "140";
    //condicional para que desde ciertos rango cambie el contador de color y habilite o deshabilite el boton
    if(comment.value.length===0 || comment.value.length>max){
    	btn.disabled=true;
    	document.forms[0].charact.value=max-(document.forms[0].comment.value.length);
    	count.style.color="#BC0B17";
	}else if(comment.value.length>=0 && comment.value.length<=120){
     	btn.disabled=false;
     	document.forms[0].charact.value=max-(document.forms[0].comment.value.length);
    	count.style.color="#2B2B9E";
	}else if(comment.value.length>120 && comment.value.length<=130){
     	btn.disabled=false;
     	document.forms[0].charact.value=max-(document.forms[0].comment.value.length);
    	count.style.color="#1D651D";
	}else if(comment.value.length>130){
     	btn.disabled=false;
    	document.forms[0].charact.value=max-(document.forms[0].comment.value.length);
    	count.style.color="#FF8400";
    }
} 
/*
//función para el contador de caracteres
function contar() { 
    var comment = document.getElementById("comment");
    var max = "140";
    //cantidad de caracteres dentro del contenedor es igual al maximo menos la cantidad de caracteres en comment
    document.forms[0].charact.value=max-(document.forms[0].comment.value.length);
} 
 */   
function add(){
	//tomando el valor 
	// variable para almacenar el comenmtario
	//rescato el valor del ID
	var comment = document.getElementById("comment").value;	
	//si se ingresan caraqcteres en comment continuara, si no arrojará una alerta		
	if (comment == "") {
		alert("No puedes ingresar un comentario vacío");
	} else {

		document.getElementById("comment").value = "";
		// creacion del div donde iran los comentarios
		var newComments = document.createElement("div");
		newComments.classList.add("tweet")
		var cont = document.getElementById("cont");
	
		var paragraph = document.createElement("p");
		paragraph.classList.add("color");
		//crear un nodo de text.. hijo de paragraph.. y tomo la variable donde estará depositado el comentario
		var nodoText = document.createTextNode(comment);
		var nameSpan = document.createElement("span");
		nameSpan.classList.add("name")
		var dateSpan = document.createElement("span");
		dateSpan.classList.add("date")
/*
    //condicional para deshabilitar boton
	if(comment.value.length >= 0 && comment.value.length < 120 ){
    	document.getElementById("count").style.color = "blue";
    	btn.disabled = false;
    }else if (comment.value.length >=120 && comment.value.length <130) {
    	document.getElementById("count").style.color = "green";
    	btn.disabled = false;
    }else if (comment.value.length >= 130 && comment.value.length <140){
    	button.disabled = false;
    }else if (comment.value.length > 140 && comment.value.length === 0){
    	btn.disabled = true;
    }
    */


		//agregarlo dentro de p(padre)
		paragraph.appendChild(nodoText);
		newComments.appendChild(paragraph);
		newComments.appendChild(nameSpan);
		newComments.appendChild(dateSpan);
		cont.appendChild(newComments);
		//texto determinado para colocar el nombre del usuario del comentario y la fecha
		nameSpan.textContent = "Miratú";
    	dateSpan.textContent = new Date();
	
    	cont.insertBefore(newComments, cont.children[0]);
    
    
   
    }
		
	
	

}
	

	

	

	
