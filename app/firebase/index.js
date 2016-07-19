import firebase from 'firebase';

try {
  var config = {
    apiKey: "AIzaSyCd5SWrDbWl1Jx26NKDqjkOTJxVzn0TWCo",
    authDomain: "nimi-todo-app.firebaseapp.com",
    databaseURL: "https://nimi-todo-app.firebaseio.com",
    storageBucket: "nimi-todo-app.appspot.com",
  };
  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
