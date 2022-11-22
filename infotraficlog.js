import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-analytics.js";
import { getDatabase, ref, set, onValue } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyA6YrL9pxA6RPC25Egj4g1uHwiYaRKCe1U",
    authDomain: "database-6ed49.firebaseapp.com",
    projectId: "database-6ed49",
    storageBucket: "database-6ed49.appspot.com",
    messagingSenderId: "486058291850",
    appId: "1:486058291850:web:cf12bb3f415ea9db68f373",
    measurementId: "G-07P0HH3PYE"  
  };
  

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  //



function writeInfoData(infoId, inftext){
    const db = getDatabase();
    set(ref(db, 'InfoText/' + infoId), {
        postText: inftext,
    });
}


function saveIth(){
    let t = localStorage.getItem('info');
    writeInfoData(1, t);
    console.log(t);
}
saveIth();