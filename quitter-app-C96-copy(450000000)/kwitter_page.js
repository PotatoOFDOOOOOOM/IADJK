//YOUR FIREBASE LINKS
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
//Start code
user_name=localStorage.getItem("user_name");//potato
room_name=localStorage.getItem("room_name");//potato
function send()
{
      msg=document.getElementById("msg").value;//potato
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0

      });//potato
      document.getElementById("msg").value="";//potato
}
//End code
