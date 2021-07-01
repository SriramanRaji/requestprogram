var firebaseConfig = {
  apiKey: "AIzaSyBNCW3PXiZ9g8rcksXx98zmH9YN2bTp_lM",
  authDomain: "contact-form-653ad.firebaseapp.com",
  databaseURL:
    "https://contact-form-653ad-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "contact-form-653ad",
  storageBucket: "contact-form-653ad.appspot.com",
  messagingSenderId: "1007365752865",
  appId: "1:1007365752865:web:98a5507828f3ba851a3b60",
  measurementId: "G-6LSQQFKB26",
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

var messagesRef = firebase.database().ref("program-requests");

document
  .getElementById("program-request-form")
  .addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var firstName = getInputValue("firstName");
  var lastName = getInputValue("lastName");
  var email = getInputValue("email");
  var phone = getInputValue("phone");
  var programSummary = getInputValue("programSummary");
  var programDescription = getInputValue("programDescription");

  saveMessage(
    firstName,
    lastName,
    email,
    phone,
    programSummary,
    programDescription
  );
}

function getInputValue(id) {
  return document.getElementById(id).value;
}

function saveMessage(
  firstName,
  lastName,
  email,
  phone,
  programSummary,
  programDescription
) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    firstName: firstName,
    lastName: lastName,
    email: email,
    phone: phone,
    programSummary: programSummary,
    programDescription: programDescription,
  });

  setTimeout(function () {
    document.querySelector(".main").style.display = "none";
    document.querySelector(".success").style.display = "block";
  }, 1000);

  setTimeout(function () {
    document.querySelector(".main").style.display = "block";
    document.querySelector(".success").style.display = "none";
  }, 4000);
}
