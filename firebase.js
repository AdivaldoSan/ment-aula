const firebaseConfig = {
  apiKey: "AIzaSyAMJqS5RrwnCAMIONNraFWIRRA2k1YsPg4",
  authDomain: "ment-aula.firebaseapp.com",
  databaseURL: "https://ment-aula-default-rtdb.firebaseio.com",
  projectId: "ment-aula",
  storageBucket: "ment-aula.firebasestorage.app",
  messagingSenderId: "959984637634",
  appId: "1:959984637634:web:5ada1eb50ddd63d65f4d5b"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.database();
