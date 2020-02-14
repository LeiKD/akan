var akanFemale=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]
var akanMale=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
var daysOfTheWeek=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
function getName() {
  var name= document.getElementById="name";
  var day= parseInt(document.getElementById="day").value;
  var month= parseInt(document.getElementById="month").value;
  var year= parseInt(document.getElementById="year").value;
  var yr= year.slice(2,4);
  var century= year.slice(0,2);
  var result= ( ( (century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + day ) % 7
  if (day===0|| day<1 || day>31 || month===0| month<1 || month>12 || year===0| ) {
  alert("Please confirm that you have written the correct values")
  } else {
    alert(result)
  }   
  }
function gender() {
  var male=document.getElementByName="male"
  var male=document.getElementsByName="female"
  
}
