$(document).ready(function(){
	$('#formulario').validate({
		submitHandler: function(){
		$.post("gaurdar.php,
			{
				nombre: $("#nombre").val(),
				apaterno: $("#apaterno").val(),
				amaterno: $("#amaterno").val(),
				ciudad: $("#ciudad").val(),
			},
			function(data, status){
				alert("Datos: "+ data+ "Status:" + status);
				$("#formulario").trigger("reset");
			});
	},
		rules: {
			nombre: {
				required: true,
				minlength: 2,
				maxlength: 50
			},
			apaterno: {
				required: true,
				minlength: 2,
				maxlength: 50,
			},
			amaterno: {
				required: true,
				minlength: 2,
				maxlength: 50,
			},
			ciudad: {
				required: true,
				minlength: 2,
				maxlength: 50,
			}
		},
		messages: {
			nombre: {
				required: "Campo obligatorio",
				minlength: "El nombre debe tener más de dos letras",
				maxlength: "EL nombre es demasiado largo (min 50 caracteres)",
			},
			apaterno: {
				required: "Campo obligatorio",
				minlength: "El apellido paterno debe tener mas de dos caracteres",
				maxlength: "Apellido pateno demasiado largo",
			},
			amaterno: {
				required: "Campo obligatorio",
				minlength: "EL apellido materno debe tener más de dos caracteres",
				maxlength: "Apellido materno demasiado largo",
			},
			ciudad: {
				required: "Campo obligatorio",
				minlength: "El nombre de la ciudad debe tener más de dos caracteres",
				maxlength: "El nombre de la ciudad debe ser menor a 50 caracteres",
			}
		}
	});
});


