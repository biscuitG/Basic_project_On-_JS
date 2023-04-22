
const zodiac=document.getElementById("zodiac");
const body=document.body;
console.log(zodiac);
console.log(body);
const ChangeBackGroundColor=()=>{
   console.log('hi');
      switch(zodiac.value){
        case "aries" :
            body.style.backgroundColor="red"; 
           break;
       case "tarus" :
            body.style.backgroundColor="green"; 
           break;
      case "gemini" :
            body.style.backgroundColor="blue"; 
           break;
      case "cancer" :
            body.style.backgroundColor="yellow"; 
           break;
       case "leo" :
            body.style.backgroundColor="orange"; 
           break;
    case "virgo" :
            body.style.backgroundColor="gray"; 
           break;
    case "libra" :
            body.style.backgroundColor="brown"; 
           break;
    case "scorpio" :
            body.style.backgroundColor="aqua"; 
           break;
    case "sagittarius" :
            body.style.backgroundColor="pink"; 
           break;
    case "aquarius" :
            body.style.backgroundColor="black"; 
           break;
     case "capricorn" :
            body.style.backgroundColor="red"; 
           break;
    case "pisces" :
            body.style.backgroundColor="blue"; 
           break;
    
           default :
           alert("Nothing choosen"); 

      }
}