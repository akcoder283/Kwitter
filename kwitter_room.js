
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
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

var user_name= localStorage.getItem("username");

function add_room(){
      var room_name=document.getElementById("room_input").value;
      firebase.database().ref("/").child(room_name).update({purpose: "adding room"});
      localStorage.setItem("room_name", room_name);
      window.location= "kwitter_page.html";
}
  
document.getElementById("user_name").innerHTML= "Welcome " + user_name + "!";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
     console.log("room-name " + Room_names);
     var row="<div class='room_name' id="+Room_names+" onclick='redirect(this.id)'>#" + Room_names + "</div><hr>";
     document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirect(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location= "kwitter_page.html";
}