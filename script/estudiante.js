function imprimir()
	{	
	
	var id=document.getElementById("id").value;
	console.log(id);
	var nombre=document.getElementById("nombreEstudiante").value;
	console.log(nombre);
	var matricula=document.getElementById("matricula").value;
	console.log(matricula);
	var indentificacion=document.getElementById("identificacion").value;
	console.log(indentificacion);
	var telefono=document.getElementById("telefono").value;
	console.log(telefono);
	var email=document.getElementById("email").value;
	console.log(email);
	
	var est1 = new	Estudiantes();
	est1.id=id;
	est1.nombreEstudiante=nombreEstudiante;
	est1.matricula=matricula;
	est1.telefono=telefono;
	est1.email=email;
	
	console.log(est1);
	
	};
	
	 Estudiantes = function()
	{
		var self=this;
		self.id = "";
		self.nombreEstudiante = "";
		self.matricula = "";
		self.telefono = "";
		self.email = "";
	};
	
		function addRow()
		{
		var id=document.getElementById("id").value;
		var nombre=document.getElementById("nombreEstudiante").value;
	var matricula=document.getElementById("matricula").value;
	var indentificacion=document.getElementById("identificacion").value;
	var telefono=document.getElementById("telefono").value;
	var email=document.getElementById("email").value;
		
			var table = document.getElementById("Estudiantes");
			var tr = document.createElement("tr");
			
			var tdId = document.createElement("td");
			var txtId = document.createTextNode(id++);
					
			var tdNombre = document.createElement("td");
			txtNombre = document.createTextNode(nombre);
			
			var tdMatricula = document.createElement("td");
			txtMatricula = document.createTextNode(matricula);
			
			var tdIndentificacion = document.createElement("td");
			txtIndentificacion = document.createTextNode(indentificacion);
			
			var tdTelefono = document.createElement("td");
			txtTelefono = document.createTextNode(telefono);
			
			var tdEmail = document.createElement("td");
			txtEmail = document.createTextNode(email);
			
			
			tdId.appendChild(txtId);
			tdNombre.appendChild(txtNombre);
			tdMatricula.appendChild(txtMatricula);
			tdIndentificacion.appendChild(txtIndentificacion);
			tdTelefono.appendChild(txtTelefono);
			tdEmail.appendChild(txtEmail);
			
			
			tr.appendChild(tdId);
			tr.appendChild(tdNombre);
			tr.appendChild(tdMatricula);
			tr.appendChild(tdIndentificacion);
			tr.appendChild(tdTelefono);
			tr.appendChild(tdEmail);
			
			table.appendChild(tr);
		};	

	
