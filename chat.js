// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyD_1WQyEQ3FBd_nBIgimkKP3sto9e0YLyA",
    authDomain: "kwitter-c0dee.firebaseapp.com",
    databaseURL: "https://kwitter-c0dee-default-rtdb.firebaseio.com",
    projectId: "kwitter-c0dee",
    storageBucket: "kwitter-c0dee.appspot.com",
    messagingSenderId: "110428772651",
    appId: "1:110428772651:web:53fc3578e84fbefb16cd6e"
  };
  

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



