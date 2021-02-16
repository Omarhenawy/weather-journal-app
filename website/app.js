/* Global Variables */
const baseUrl = `https://api.openweathermap.org/data/2.5/weather?zip=`
const apiKey = '&appid=724edf3ce7af174e949c209c89598fd4&units=metric' ; //apikey from generated from the site
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
// event on click generate
 document.getElementById('generate').addEventListener('click',performAction);
// main function
 function performAction(e){
   const zipNew = document.getElementById('zip').value;
   const feeling = document.getElementById('feelings').value;
// first function
   getZipCode(baseUrl,zipNew,apiKey)
   .then(function(data) {
     console.log(data);
     // second function
     postZipCode('/get_data',{temp:data.main.temp, date: newDate, content:feeling});
   })
   .then(function(){
// third function
     updateUI()
}

)
 }
/* get data from api function  (first function)*/
 const getZipCode = async (baseUrl , zipcode , key)=> {
   const res = await fetch(baseUrl+zipcode+key)
   try{
     console.log('get function');
     const data = await res.json();
     console.log(data)
     return data;
   }
   catch(error) {
       console.log("error", error);
       }
  }
  /* post data to server function (second function) */
 const postZipCode = async ( url = '' , data = {}) => {
   console.log(data);
   const respons = await fetch(url, {
   method: 'POST',
   credentials: 'same-origin',
   headers: {
       'Content-Type': 'application/json',
   },
   body: JSON.stringify(data), // body data type must match "Content-Type" header
 });
   try {
  const newData = await respons.json();
  console.log(newData);
  return newData;
}
catch(error) {
console.log("error", error);
}
}
 // update ui function (third function)
const updateUI = async ()=> {
  const request = await fetch('/all');
  try {
  const allData = await request.json();

    document.getElementById('temp').innerHTML = allData.temp;
    document.getElementById('date').innerHTML = allData.date;
    document.getElementById('content').innerHTML = allData.content;
  }catch(error){
    console.log('error',error);
  }
}
