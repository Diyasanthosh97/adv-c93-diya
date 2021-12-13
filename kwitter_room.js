var firebaseConfig = {
      apiKey: "AIzaSyAm2qJyENNM_SmTHVMxi4j2Q3lH3Q6xT-c",
      authDomain: "kwitter-4c4ad.firebaseapp.com",
      projectId: "kwitter-4c4ad",
      storageBucket: "kwitter-4c4ad.appspot.com",
      messagingSenderId: "65234163808",
      appId: "1:65234163808:web:f9a47b6492ade17ac94b05"
    };
    
    // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
