$(document).ready(function(){
  $('#submit-button').click(ValidationApp.validateName);
  $('#submit-button').click(ValidationApp.validatePhone);
  $('#submit-button').click(ValidationApp.validateEmail);
  $('#submit-button').click(ValidationApp.validateAge);
});

ValidationApp = {};

ValidationApp.user = function(name, age, phone, email){
  if(userNameVal.length > 3){
    this.userNameVal = userNameVal;
  } else {
    alert('please enter a valid name');
  }

  this.userEmailVal = userEmailVal;
  this.userPhoneVal = userPhoneVal;
  this.userAgeVal = userAgeVal;
};


ValidationApp.validatePhone = function() {
  //This is a regular expression for a phone
  var phoneRegex = /^[0-9]+[0-9]+[0-9]+[_.-]+[0-9]+[0-9]+[0-9]+[_.-]+[0-9]+[0-9]+[0-9]+[0-9]$/;
  this.userPhoneVal = document.getElementById('user_ph').value;
  if(phoneRegex.test(this.userPhoneVal)) {
  }
  else {
    alert("please enter a valid phone number");
  }
};

ValidationApp.validateEmail = function() {
  //This is a regular expression for email
  var emailRegex = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/;
  this.userEmailVal = document.getElementById('user_email').value;
  if(emailRegex.test(this.userEmailVal)) {
  }
  else {
    alert("please enter a valid email");
  }
};

ValidationApp.validateName = function() {
  //This is a regular expression for name
  var nameRegex = /^[a-z0-9_-]{3,16}$/;
  this.userNameVal = document.getElementById('user_name').value;
  if(nameRegex.test(this.userNameVal)) {
  }
  else {
    alert("your name must contain 3 or more letters");
  }
};

ValidationApp.validateAge = function() {
  //This is a regular expression for name
  var ageRegex = /(^[1-9]{1}$|^[1-4]{1}[0-9]{1}$|^90$)/gm;
  this.userAgeVal = document.getElementById('user_age').value;
  if(ageRegex.test(this.userAgeVal)) {
  }
  else {
    alert("please enter a valid age");
  }
};
