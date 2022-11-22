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

  function readInfoData(){
    const db = getDatabase();
    const distanceRef = ref(db, 'InfoText/' + '/1' + '/postText');
    onValue(distanceRef, (snapshot) => {
        const data = snapshot.val();
        localStorage.setItem('infotextout', data);
        console.log(data);

        let element = document.getElementById('text-display');
        element.innerText = data;
    });
    
}
readInfoData();