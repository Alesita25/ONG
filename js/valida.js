

$(document).ready(function()
		{
		$("#flexRadioDefault1").click(function () {
                //alert($('input:radio[name=flexRadioDefault]:checked').val());
                $("#flexRadioDefault1").prop('checked', true);
                $("#flexRadioDefault2").prop('checked', false);
                $("#RutCliente").show();
                $("#labeltext").show();
                $("#DvRutCliente").show();
               
			});
 
		$("#flexRadioDefault2").click(function () {	 
			//alert($('input:radio[name=flexRadioDefault2]:checked').val());
            $("#flexRadioDefault1").prop('checked', false);
            $("#flexRadioDefault2").prop('checked', true);
            $("#RutCliente").hide();
            $("#labeltext").hide();
            $("#DvRutCliente").hide();
			});

            var validadorFormulario = new FormValidator('registrarDatos', [{

                name: 'NombreCliente',
                display: 'Nombre cliente', //mensaje pantalla
                rules: 'required|min_length[10]', // lo que estoy validando,
                message: 'ale que pasa'
            },
            {

                name: 'textAreaComentario1',
                display: 'minimo 50 caracteres', //mensaje pantalla
                rules: 'required|min_length[50]' // lo que estoy validando
            },
            {
                name: 'Email',
                display: 'Email Invalido',
                rules: 'required|valid_email' // formato mail
            },
        ], function (errores, evento) {
            if (errores.length) {
                let mensaje = '';
    
                errores.forEach(function (campo, indice, arreglo) {
                    mensaje += `${campo.message} <br/>`;
                });
    
                document.querySelector('#resultadoValidacion').innerHTML = mensaje;
            }
    
        })
    
    
        $("input[name=RutCliente]").change(function(){
            var dv = calculaDigitoVerificador($('#RutCliente').val());
            $('#DvCliente').val(dv);
        });
    
    
    
    
         function calculaDigitoVerificador(rut) {
            // type check
            if (!rut || !rut.length || typeof rut !== 'string') {
                return -1;
            }
            // serie numerica
            var secuencia = [2,3,4,5,6,7,2,3];
            var sum = 0;
            //
            for (var i=rut.length - 1; i >=0; i--) {
                var d = rut.charAt(i)
                sum += new Number(d)*secuencia[rut.length - (i + 1)];
            };
            // sum mod 11
            var rest = 11 - (sum % 11);
            // si es 11, retorna 0, sino si es 10 retorna K,
            // en caso contrario retorna el numero
            return rest === 11 ? 0 : rest === 10 ? "K" : rest;
        };
        



		 });