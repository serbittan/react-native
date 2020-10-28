// Este archivo es para enlazar (en este caso) la tipografia que hemos añadido al archivo assets.
// El nombre del archivo debe ser: react-native.config.js
//Utiliza código de node.

module.exports = {
    project: {
        ios: {},
        android: {}
    },
    assets: ['./assets/fonts/']
}



// Una vez añadido el estilo en Header: fontFamily: 'Lato-Black' si nos marca un error (no siempre es así)
// tendremos que abrir la terminal y escribir: npx react-native link
// esto nos linkará el archivo assets y desaparecerá el error.

// luego vuelve a correr: npx react-native run-ios