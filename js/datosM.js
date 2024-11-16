function saber(){
	event.preventDefault();
	var tu=document.getElementById('t1').value;
	var td=document.getElementById('t2').value;
	if(tu=="mirian" && td=="mimi")
	{
      alert("BIENVENIDO");
	 document.location.href="inicio.html";}
	else{
		alert("DATOS INCORRECTOS");
	}
}