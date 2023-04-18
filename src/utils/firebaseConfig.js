const firebaseConfig = {
  apiKey: 'AIzaSyBynkTp6c_sEhEF6e-EZ7fLayy28_i70YI',
  authDomain: 'flavias-sweets.firebaseapp.com',
  databaseURL: 'https://flavias-sweets-default-rtdb.firebaseio.com',
  projectId: 'flavias-sweets',
  storageBucket: 'flavias-sweets.appspot.com',
  messagingSenderId: '6930398200',
  appId: '1:6930398200:web:31b9d3eeedd904e0e6340d',
  measurementId: 'G-ECC718YS2N',
};

firebase.initializeApp(firebaseConfig);

var contactFormDB = firebase.database().ref('contactForm');

document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e) {
  e.preventDefault();

  var firstName = getElementVal('first-name');
  var lastName = getElementVal('last-name');
  var message = getElementVal('message');
  saveContactForm(firstName, lastName, message);
}

const saveContactForm = (firstName, lastName, message) => {
  const newContactForm = contactFormDB.push();
  newContactForm.set({
    firstName: firstName,
    lastName: lastName,
    message: message,
  });
  const getElementVal = (id) => document.getElementById(id).value;
};
