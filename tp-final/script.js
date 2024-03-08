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

//FUNCIONES JUEGO
    var preguntas = ['¿Quién fue la primera mujer en encadenar un 9a+?','¿Qué vía de escalada es la más difícil del mundo (9c)?','¿Cuál de los siguientes no es un tipo de agarre común en la escalada?','¿Qué es un "boulder" en el contexto de la escalada?',' ¿Qué significa "Gri-Gri" en el mundo de la escalada?'];
    var puntaje = 10; //el juego inicia con un puntaje mayor a 0 así si no contesta bien la primera pregunta, no se reinicia automáticamente
    var indice = 0;
    var contenido;
    var r = 0;

    function iniciar(){
        document.getElementById('boton-inicio').style.display = 'none'; //reemplaza el contenido del botón comenzar por "siguiente pregunta"
        sortearpregunta(); //genera una nueva pregunta a partir de la función sortearpregunta()
        document.getElementById('titulo').innerHTML = pregunta; //reemplaza el contenido del título por una pregunta
        document.getElementById('points').style.display = 'block';
        document.getElementById('pregunta').style.display = 'none'; 
        document.getElementById('puntaje').innerHTML = 'Tu puntaje es: '+ puntaje +' puntos'; //muestra el puntaje en el id "puntaje"

    }

    function sortearpregunta(){
        pregunta = preguntas[indice]; //toma las preguntas del array "preguntas"

    }