//FUNCIONES FORMULARIO

function validarFormulario(){
    if (document.formulario.nombre.value.length==0){
        alert("Por favor, colocá tu nombre");
        document.formulario.nombre.focus();
        return false;
    }

    if (document.formulario.apellido.value.length==0){
        alert ("Por favor, colocá tu apellido");
        document.formulario.apellido.focus();
        return false;
    }

    var ch_email = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    var valor_email = document.getElementById("email").value;
    if (! (ch_email.test(valor_email))) {
        alert ("Por favor, ingrese un email válido");
        document.formulario.email.focus();
        return false;
    }
    
    if (document.formulario.grado.value.length==0){
        alert ("Por favor, colocá tu grado máximo de escalada en roca");
        document.formulario.grado.focus();
        return false;
    }

    

    alert("¡Muchas gracias por enviar tu formulario! Nos pondremos en contacto a la brevedad. No olvides chequear tu casilla de spam.");
    document.formulario.submit();
    
}

function iniciar(){
    
}