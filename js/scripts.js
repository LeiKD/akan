function getName() {
  var dd= parseInt(document.getElementById("day").value);
  var mm= parseInt(document.getElementById("month").value);
  var yy= parseInt(document.getElementById("year").value);
  var cc= (yy-1)/100 +1
  var result= ( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd ) % 7;
  var boy=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
  var girl=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
  var siku=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  if (document.getElementsById("Gender").checked ) {
    var gender=male;
  } else {
    var gender=female;
  }
  if (dd<1 || dd>31) {
    alert("Invalid Date!");
  }
  else if (mm<1 || mm>12 || mm==2 && dd>29) {
    alert("Invalid Month!");
  }
  
 
}
