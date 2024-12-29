const firebaseConfig = {
    apiKey: "AIzaSyBCYWh8SspbP3xekK5UJUChiEFJT_CCcxU",
    authDomain: "contactform-medikal.firebaseapp.com",
    databaseURL: "https://contactform-medikal-default-rtdb.firebaseio.com",
    projectId: "contactform-medikal",
    storageBucket: "contactform-medikal.firebasestorage.app",
    messagingSenderId: "231279582678",
    appId: "1:231279582678:web:b0c461d326445dc7ddd877"
  };
//initializatio of our database 
  firebase.initializeApp(firebaseConfig);

// reference of our database 
var contactFormDB = firebase.database().ref('contactForm'); 
document.getElementById('contactForm').addEventListener('submit',submitForm);
function submitForm(e){
    e.preventDefault();
    var name = getElementval ("name");
    var age = getElementval ("age");
    var patientID = getElementval("patientID");
    var birthday = getElementval("birthday");
    var gender = getElementval("gender");
    var phone = getElementval ("phone");
    var address = getElementval("address");
    var bloodType = getElementval("bloodType");
    var weight = getElementval("weight");
    var height = getElementval("height");
    var emergencyContact= getElementval("emergencyContact");
    var insurance = getElementval("insurance");
    var allergies = getElementval("allergies");
    var medications = getElementval("medications");
    var diseases = getElementval("diseases");
    console.log(name,age,patientID,birthday,gender,phone,address,bloodType,weight,height,emergencyContact,insurance,allergies,medications,diseases);
    

}

const getElementval = (id) => {
    return document.getElementById(id).value;
}