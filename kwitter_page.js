//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyC6aFBnRrVrcBzJFB90Vv8GAGPfXuxueCc",
      authDomain: "kwitter-1bab4.firebaseapp.com",
      databaseURL: "https://kwitter-1bab4-default-rtdb.firebaseio.com",
      projectId: "kwitter-1bab4",
      storageBucket: "kwitter-1bab4.appspot.com",
      messagingSenderId: "191517806303",
      appId: "1:191517806303:web:7e6f9116ebb0ef1f33a36a"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");
//send funcion//
function send(){
var message=document.getElementById("message").value;
firebase.database().ref("room_name").push({name:user_name, message:message, like:0});
document.getElementById("message").value="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
