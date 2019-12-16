let socket = io();

    //On = Escuchar
    socket.on('connect', () => {

        console.log('Conectado al servidor');

    });

    socket.on('disconnect', () => {

        console.log('Se perdió conexión con el servidor');

    });

    //Emit = Enviar información
    socket.emit('enviarMensaje', {
        usuario: 'Eduardo',
        mensaje: 'Hola Mundo'
    }, (resp) => {
        console.log('Respuesta server: ', resp);
    });

    //On = Escuchar
    socket.on('enviarMensaje', (mensaje) => {

        console.log('Servidor: ', mensaje);

    });