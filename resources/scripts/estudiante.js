var listaEstudiantes=[];
			
Estudiante=function()
{
	self=this;
	self.id="";
	self.nombre="";
	self.matricula="";
	self.identificacion="";
	self.telefono="";
	self.email="";
}		

function agregarEstudiante(estu)
{
	
	var rowEstudiante ='<tr id="tr'+estu.id+'">'+
	'<td><input type="checkbox" id="'+estu.id+'"></td>'+
	'<td>'+estu.id+'</td>'+
	'<td>'+estu.nombre+'</td>'+
	'<td>'+estu.matricula+'</td>'+
	'<td>'+estu.identificacion+'</td>'+
	'<td>'+estu.telefono+'</td>'+
	'<td>'+estu.email+'</td>'+
	'</tr>'
	
	$("#estudiantes").append(rowEstudiante);
	
	listaEstudiantes.push(estu);
				
	grabarEstuduantes();
};
			
function grabarEstuduantes()
{
	localStorage.setItem('estudiantes', JSON.stringify(listaEstudiantes));
};
			
function deleteFila(id)
{
	var estudiantesAlmacenados = localStorage.getItem('estudiantes');
	localStorage.removeItem("estudiantes");
	
	var listEstudiantes=JSON.parse(estudiantesAlmacenados);
	for (var i = 0; i < listEstudiantes.length; i++) {
		if(listEstudiantes[i].id==id){
			listEstudiantes.splice(i, 1);
			var rowDelete=document.getElementById("tr"+id).rowIndex-1;
			document.getElementById("estudiantes").deleteRow(rowDelete);
			listaEstudiantes=listEstudiantes;
			grabarEstuduantes();
			break;
		}
	}
};	

$(document).ready(function()
{
	
	var listadoDeEstudiantes = localStorage.getItem('estudiantes');
	
	if(listadoDeEstudiantes!=null)
	{
		var estudiantesAlmacenados= JSON.parse(listadoDeEstudiantes);
		
		$.each(estudiantesAlmacenados,function(i,est){
			agregarEstudiante(est);
		});
	}
	
	$("#agregar-Estudiante").click(function()
	{
		
		var estu=new Estudiante();
		
		estu.id=$("#id").val();
		estu.nombre =$("#nombre").val();
		estu.matricula=$("#matricula").val();
		estu.identificacion=$("#identificacion").val();
		estu.telefono=$("#telefono").val(); 
		estu.email=$("#email").val(); 
						
		agregarEstudiante(estu);
	})

	$("#borrar-seleccionados").click(function()
	{
		$("input:checkbox:checked").each(function() 
		{
			deleteFila($(this).attr("id"));
		});
	})
})