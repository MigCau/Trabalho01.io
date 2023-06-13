function adiciona(){
var listaInput = document.getElementById("lista")
var elsText = listaInput.value.trim();

if(elsText !=""){
	 var afazeresList =document.getElementById("item-lista");
	 
	 var afazeresItem=document.createElement("li");
	 afazeresItem.textContent= elsText;
	 
	 afazeresList.appendChild(afazeresItem);
	 
	 listaInput.value = "";
}
}
