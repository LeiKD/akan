function getName() {
  var dd= parseInt(document.getElementById("day").value);
  var mm= parseInt(document.getElementById("month").value);
  var year= parseInt(document.getElementById("year").value);
  var yy= year % 100
  var cc= parseInt(((year-1)/100) +1);
  var result= parseInt(( ( (cc/4) -2*cc-1) + (5*yy/4) + (26*(mm+1)/10) + dd ) % 7);
  var boy=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
  var girl=["Akosua", " Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  if (document.getElementById("gender").checked) {
    var gender='male';
  } else {
    var gender='female';
  }
  if (dd<1 || dd>31) {
    alert("Invalid Day!");
  } 
  else if (mm<1 || mm>12 || mm==2 && dd>29) {
    alert("Invalid Month!");
  }
  else if (Math.ceil(result) == 1 && gender === 'male') {
    alert("You were born on Monday,your Akan name is " + boy[1]);
  }
  if (Math.ceil(result) == 2 && gender === 'male') {
      alert("You were born on Tuesday ,your Akan name is " + boy[2]);
  }
  else if (Math.ceil(result) == 3 && gender === 'male') {
      alert("You were born on Wednesday ,your Akan name is " + boy[3]);
  }
  else if (Math.ceil(result) == 4 && gender === 'male') {
      alert("You were born on Thursday,your Akan name is " + boy[4]);
  }
  else if (Math.ceil(result) == 5 && gender === 'male') {
      alert("You were born on Friday,your Akan name is " + boy[5]);
  }
  else if (Math.ceil(result) == 6 && gender === 'male') {
      alert("You were born on Saturday,your Akan name is " + boy[6]);
  }
  else if (Math.ceil(result) == 0 && gender === 'male') {
      alert("You were born on Sunday,your Akan name is " + boy[0]);
  }
  else if (Math.ceil(result) == 1 && gender === 'female') { 
      alert("You were born orn on monday ,your Akan name is " + girl[1]);
  }
  else if (Math.ceil(result) == 2 && gender === 'female') {
      alert("You were born on Tuesday,your Akan name is " + girl[2]);
  }
  else if (Math.ceil(result) == 3 && gender === 'female') {
      alert("You were born on Wednesday,your Akan name is " + girl[3]);
  }
  else if (Math.ceil(result) == 4 && gender === 'female') {
      alert("You were born on Thursday,your Akan name is " + girl[4]);
  }
  else if (Math.ceil(result) == 5 && gender === 'female') {
      alert("You were born on Friday,your Akan name is " + girl[5]);
  }
  else if (Math.ceil(result) == 6 && gender === 'female') {
      alert("You were born on Saturday,your Akan name is " + girl[6]);
  }
  else if (Math.ceil(result) == 0 && gender === 'female') {
      alert("You were born on Sunday,your Akan name is " + girl[0]);
  }
  else {
    alert("Please enter the required information!");
  }
}
   
