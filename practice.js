
//ADD YOUR FIREBASE LINKS
const firebaseConfig = {
    apiKey: "AIzaSyC7pbSQZwN-N962eklTdkJw8b5rWI2s2oU",
    authDomain: "kwitter-e2b90.firebaseapp.com",
    databaseURL: "https://kwitter-e2b90-default-rtdb.firebaseio.com",
    projectId: "kwitter-e2b90",
    storageBucket: "kwitter-e2b90.appspot.com",
    messagingSenderId: "66981539359",
    appId: "1:66981539359:web:37e9db08ac803855f56f2a"
  };
  firebase.initializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}