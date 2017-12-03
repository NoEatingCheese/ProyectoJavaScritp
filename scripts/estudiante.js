var Estudiantes = function()
	{
		var self=this;
		self.row = 0;
		self.id = "";
		self.nombreEstudiante = "";
		self.matricula = "";
		self.identificacion = "";
		self.telefono = "";
		self.email = "";
	};
	
function addRow(Estudiantes){

 var rowEstudiante = "<tr>"
 
	 +"<td>"+ Estudiantes.row+"</td>"
	 +"<td>"+ Estudiantes.id+ "</td>"
	 +"<td>"+ Estudiantes.nombreEstudiante+ "</td>"
	 +"<td>"+ Estudiantes.matricula+ "</td>"
	 +"<td>"+ Estudiantes.identificacion+"</td>"
	 +"<td>"+ Estudiantes.telefono+ "</td>"
	 +"<td>"+ Estudiantes.email+"</td>" 
	 +"<td>"+"<button id='Clean'>X</button>"+"</td>"
 
 "</tr>"
 
 $("table tbody").append(rowEstudiante);
};

function limpiar(){
	
	var txtLetras = document.getElementById("nombreEstudiante");
	txtLetras.value="";
	document.getElementById("id").value="";
	document.getElementById("matricula").value="";
	document.getElementById("identificacion").value="";
	document.getElementById("telefono").value="";
	document.getElementById("email").value="";	
};

$(document).ready(function(){

	myStorage = window.localStorage;
 
	var dbEstudiantes = myStorage.getItem("Estudiantes");
	if(dbEstudiantes != null){
		var Estu = JSON.parse(dbEstudiantes);
		
		$.each(Estu, function(i, est){
		addRow(est);
		});

	};

	$('#Click').click(function(){
	//alert("hola");
	
	var row = $('#row').val();
	var id = $('#id').val();
	var nombreEstudiante = $('#nombreEstudiante').val();
	var matricula = $('#matricula').val();
	var identificacion = $('#identificacion').val();
	var telefono = $('#telefono').val();
	var email = $('#email').val();

	var est = new Estudiantes();
	est.row = row;
	est.id = id;
	est.nombreEstudiante = nombreEstudiante;
	est.matricula = matricula;
	est.identificacion = identificacion;
	est.telefono = telefono;
	est.email = email;
	
	addRow(est);
	guardarDB(est);
	limpiar();
	
	});
	
	$('#Clean').click(function(){
	document.getElementById("Estudiantes").deleteRow("row");
	
	});
	
	$('#CleanAll').click(function(){
		
	myStorage.getItem("Estudiantes");
	localStorage.clear("Estudiantes");		
	});
	
});

	function guardarDB(Estu){

		myStorage = window.localStorage;
		
		 var listaEstudiantes = []
		 var dbEstudiantes = myStorage.getItem("Estudiantes");
		 
		 if(dbEstudiantes != null){
			listaEstudiantes = JSON.parse(dbEstudiantes);
		 };
		 
		 listaEstudiantes.push(Estu);
		 myStorage.setItem("Estudiantes", JSON.stringify(listaEstudiantes));
		
	};