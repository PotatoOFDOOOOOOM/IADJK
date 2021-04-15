 // Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAiGTmJghMZqxvDxaR83cxIohiiyRe63-0",
  authDomain: "quitter-75528.firebaseapp.com",
  databaseURL: "https://quitter-75528-default-rtdb.firebaseio.com",
  projectId: "quitter-75528",
  storageBucket: "quitter-75528.appspot.com",
  messagingSenderId: "549059139672",
  appId: "1:549059139672:web:04f81a61a16eb79a77d22d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

 user_name=localStorage.getItem("user_name");
 document.getElementById("user_name").innerHTML="Welcome " + user_name + "!";


 function addRoom(){
   room_name = document.getElementById("room_name").value;

   firebase.database().ref("/").child(room_name).update({
purpose:"adding room child"
   });
   localStorage.setItem("room_name",room_name);

   window.location = "kwitter_page.html";
 }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_childs = childKey;
      //Start code
 console.log("Room Child - "+ Room_childs);
 row="<div class='room_name' id="+Room_childs+" onclick='redirectToRoomName(this.id)'>#"+Room_childs+"</div><hr>";
 document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location = "kwitter_page.html"
}
function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html"
}
