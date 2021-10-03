function login(){
    var user_name= document.getElementById("user_input").value;
    localStorage.setItem("username", user_name);
    window.location="kwitter_room.html";
}