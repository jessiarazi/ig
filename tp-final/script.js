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
    var pregunta; //esta variable tomará cada elemento del array preguntas
    var preguntas = [
        '¿Qué graduación, en escala francesa, tiene la vía Bibliographie?',
        '¿Quién fue la primera mujer en encadenar un 9a+?',
        '¿Qué vía de escalada es la más difícil del mundo (9c)?',
        '¿Cuál de los siguientes no es un tipo de agarre común en la escalada?',
        '¿Qué es un "boulder" en el contexto de la escalada?',
        '¿Qué significa "Gri-Gri" en el mundo de la escalada?',
        '¿Cuántos metros tiene la vía Crown Royale?',
        '¿Cuál es la técnica utilizada para descender de una ruta de escalada de forma controlada?'
    ];
    var puntaje = 20; //el juego inicia con un puntaje mayor a 0 así si no contesta bien la primera pregunta, no se reinicia automáticamente
    var numeroPregunta = 0;
    var contenido;
    var opcion;
    var boton;
    var opcionespregn;
    

    var opciones = [
        'textbox',
        ['Lynn Hill','Margo Hayes','Anak Verhoeven','Ashima Shiraishi'],
        ['La Dura Dura','Biographie','Silence','Change'],
        ['Regleta','Romo','Pinza','Cráter'],
        ['Un estilo de escalada con cuerda','Un tipo de escalada sin cuerda','Una forma de roca','Una técnica de escalada'],
        ['Una forma de escalar','Un tipo de roca','Una forma de roca','Un dispositivo de aseguramiento'],
        'textbox',
        'textbox'
    ];
    var respuestas = [
        '9a+',
        'Margo Hayes',
        'Silence',
        'Cráter',
        'Un tipo de escalada sin cuerda',
        'Un dispositivo de aseguramiento',
        '100',
        'rapel'
    ];
    var botones = ['rta1','rta2','rta3','rta4'];

    function iniciar(){
        console.log("corre iniciar");
        document.getElementById('boton-inicio').style.display = 'none'; //reemplaza el contenido del botón comenzar por "siguiente pregunta"

        document.getElementById('rta1').style.display = 'block';
        document.getElementById('rta2').style.display = 'block';
        document.getElementById('rta3').style.display = 'block';
        document.getElementById('rta4').style.display = 'block';

        sortearpregunta(); //genera una nueva pregunta a partir de la función sortearpregunta()
        
        document.getElementById('titulo').innerHTML = pregunta; //reemplaza el contenido del título por una pregunta
        document.getElementById('points').style.display = 'block'; //muestra los puntos
        document.getElementById('pregunta').style.display = 'none'; //oculta parrafo explicativo
        document.getElementById('points').style.display = 'block';
        document.getElementById('puntaje').innerHTML = 'Tu puntaje actual: '+ puntaje +' puntos'; //muestra el puntaje en el id "puntaje"

    }
    function ocultar (){
            document.getElementById('rta1').style.display = 'none';
            document.getElementById('rta2').style.display = 'none';
            document.getElementById('rta3').style.display = 'none';
            document.getElementById('rta4').style.display = 'none';
}
    function sortearpregunta(){
        pregunta = preguntas[numeroPregunta]; //va tomando las preguntas del array "preguntas"
        document.getElementById('titulo').innerHTML = pregunta;
        opcionespregn = opciones[numeroPregunta]; //agarra un array

        if (opcionespregn == "textbox") {
            document.getElementById('input-user').value = '';
            document.getElementById('rta1').style.display = 'none';
            document.getElementById('rta2').style.display = 'none';
            document.getElementById('rta3').style.display = 'none';
            document.getElementById('rta4').style.display = 'none';
            document.getElementById('input-user').style.display = 'block';
            document.getElementById('siguiente').style.display = 'block';

        } else {
            document.getElementById('input-user').style.display = 'none';
            document.getElementById('siguiente').style.display = 'none';

            //el siguiente for recorre el array opciones y mete cada índice en un botón diferente
            for (i=0; i<opcionespregn.length; i++){
                opcion = opcionespregn[i]; //toma las opciones de respuesta
                boton = botones[i]; //toma elementos del array botones, que son los id de los botones
                document.getElementById(boton).style.display = 'block';
                document.getElementById(boton).innerHTML = opcion; //el opcion debe meterse en el botón 1, que es el que tiene id "rta1", que es la posición 0 del array "botones"
            }
        }

        if(numeroPregunta>=preguntas.length){ 
            alert('¡Terminó el juego! Obtuviste ' +puntaje+ ' puntos. El juego se reiniciará.');
            reiniciar();
        } 
    }

    function comparar(identidad){ //compara si el resultado es el adecuado, compara el contenido de los botones con el contenido del array de respuestas
        contenido = document.getElementById(identidad).innerHTML; //agarra el contenido de cada botón que tiene un id diferente (el "identidad" se pone en el HTML)


        if (contenido == respuestas[numeroPregunta]){
            alert("¡Respuesta correcta! Sumás 10 puntos")
            puntaje += 10;
            numeroPregunta++;
        }
        else { //si lo respondido es diferente a la respuesta correcta
            alert('Respuesta incorrecta, restás 5 puntos');
            puntaje -=5; //resta 5 puntos al puntaje
            numeroPregunta++; //aumenta el índice para que funcione bien la funcion sortearpregunta().
        }

        
        document.getElementById('puntaje').innerHTML = 'Tu puntaje actual: '+ puntaje +' puntos'; //muestra el puntaje en el id "puntaje"
    

        if(puntaje<=0){
            alert('¡Perdiste! Te quedaste sin puntos. El juego se reiniciará.');
            reiniciar(); //si el juego no sigue, no aumenta el índice, y reinicia (en la función reiniciar)
        }

        if(numeroPregunta>=preguntas.length){ 
            alert('¡Terminó el juego! Obtuviste ' +puntaje+ ' puntos. El juego se reiniciará.');
            reiniciar();
        } 
    }

    function compararInputs(){
        valor = document.getElementById('input-user').value; //toma el valor que indicó el usuario en el input, es variable el id de cada input porque hay varios


        if(valor == respuestas[numeroPregunta]){
            alert("¡Respuesta correcta! Sumás 20 puntos");
            puntaje += 20;
            numeroPregunta++;
        } else if (valor == '') {
            alert('¡Respuesta vacía! Colocá una respuesta')
        }
        else { //si lo respondido es diferente a la respuesta correcta
            alert('Respuesta incorrecta, restás 10 puntos');
            puntaje -=10; //resta 10 puntos al puntaje
            numeroPregunta++; //aumenta el índice para que funcione bien la funcion sortearpregunta().
        }

        document.getElementById('puntaje').innerHTML = 'Tu puntaje actual: '+ puntaje +' puntos'; //muestra el puntaje en el id "puntaje"

        if(puntaje<=0){
            alert('¡Perdiste! Te quedaste sin puntos. El juego se reiniciará.');
            reiniciar(); //si el juego no sigue, no aumenta el índice, y reinicia (en la función reiniciar)
        }

        if(numeroPregunta>=preguntas.length){ 
            if (puntaje>=100){
                alert('¡Terminó el juego! ¡Felicitaciones! Obtuviste ' +puntaje+ ' puntos. Tenés la chance de ganarte un viaje, ¡contactate con nosotros!');
                reiniciar();
            } else {
                alert('¡Terminó el juego! Obtuviste ' +puntaje+ ' puntos. El juego se reiniciará.');
                reiniciar();
            }
            
        } 

    }

    function reiniciar(){ //cuando esta función es llamada, la página se recarga así el juego se reinicia.
        location.reload();
    }
    