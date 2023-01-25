//Traigo una funcion que me conecta la app de React (codigo del front end ) con la plataforma de firebase
import { initializeApp } from "firebase/app";

//Traigo una funcion que me conecta con el servicio de base de datos de firebase
import { getFirestore } from "firebase/firestore";


//Estas son mis llaves de accesso
const firebaseConfig = {
    apiKey: "AIzaSyA615EumNeSI3ydvQybPCt0-AK6jY-Iy9E",
    authDomain: "comision-43575.firebaseapp.com",
    projectId: "comision-43575",
    storageBucket: "comision-43575.appspot.com",
    messagingSenderId: "862360197548",
    appId: "1:862360197548:web:a0175b73fc35d69fa00209"
};


//Esta es una variable que representa "la plataforma" en si
const app = initializeApp(firebaseConfig);//FirebaseApp

//Esta es una variable que representa "la pestaña Firestore Database o la base de datos"
export const db = getFirestore(app);