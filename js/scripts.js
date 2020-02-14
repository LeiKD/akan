function day() {
  var name= document.getElementById="name";
  var day= document.getElementById="day";
  var month= document.getElementById="month";
  var year= document.getElementById="year";
  var century=year.slice(0,2);
  if (day===""|| day<1 || day>31 || month===""|| month<1 || month>12 || year===""|| ) {
  alert("Please confirm that you have written the correct values")
  } else {
    ( ( (century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + day ) % 7
  }   
  }
function gender() {
  var male=document.getElementByName="male"
  var male=document.getElementsByName="female"
  
}
function getName() {
  
}