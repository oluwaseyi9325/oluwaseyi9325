function convert() {
    if(temAreaOne.value=="Celsius" && vertTo.value=="Temperature" &&temAreaTwo.value=="Kelvin" ){
          var askUnit= parseFloat(enterNumber.value)+273.15;
        //   len.innerText="";
          result.value= askUnit;
          gradeOne.innerHTML= '<sup>0</sup>C';
        gradeTwo.innerText= 'K';
       
    }else if(temAreaOne.value=="Celsius" && vertTo.value=="Temperature" &&temAreaTwo.value=="Fahrenheit" ){
        var askUnit= parseFloat(enterNumber.value*1.8)+32;
      //   len.innerText="";
        result.value= askUnit;
        gradeOne.innerHTML= '<sup>0</sup>C';
      gradeTwo.innerText= 'F'}
    else if(temAreaOne.value=="Kelvin" && vertTo.value=="Temperature" && temAreaTwo.value=="Celsius"){
        var askUnit= parseFloat(enterNumber.value)-273.15;
        // len.innerText="";
        result.value= askUnit;
        gradeOne.innerText= 'k';
        gradeTwo.innerText= 'C';
    }else if(temAreaOne.value=="Kelvin" && vertTo.value=="Temperature" && temAreaTwo.value=="Fahrenheit"){
        var askUnit= parseFloat(enterNumber.value-273.15)*1.8+32;
        // len.innerText="";
        result.value= askUnit;
        gradeOne.innerText= 'k';
        gradeTwo.innerText= 'F';
    }
    else if(temAreaOne.value=="Fahrenheit" && vertTo.value=="Temperature" && temAreaTwo.value=="Celsius"){
        var askUnit= (enterNumber.value-32)*0.556;
        
        result.value= askUnit;
        gradeOne.innerText= 'F';
        gradeTwo.innerHTML= '<sup>0</sup>C';
    }else if(temAreaOne.value=="Fahrenheit" && vertTo.value=="Temperature" && temAreaTwo.value=="Kelvin"){
        var askUnit= (enterNumber.value-32)*0.556+273.15;
        
        result.value= askUnit;
        gradeOne.innerText= 'F';
        gradeTwo.innerText= 'k';
    }
    else if(lengthAreaOne.value=="cm" && vertTo.value=="Length" && lengthAreaTwo.value=="mm"){
        var askUnit= enterNumber.value*10;
       
        result.value= askUnit;
        gradeOne.innerText= 'cm';
        gradeTwo.innerText= 'mm'
    }else if(lengthAreaOne.value=="km" && vertTo.value=="Length" && lengthAreaTwo.value=="cm"){
        var askUnit= enterNumber.value*100000;
       
        result.value= askUnit;
        gradeOne.innerText= 'km';
        gradeTwo.innerText= 'cm'
    }   else if(lengthAreaOne.value=="cm" && vertTo.value=="Length" && lengthAreaTwo.value=="km"){
        var askUnit= enterNumber.value/100000;
       
        result.value= askUnit;
        gradeOne.innerText= 'cm';
        gradeTwo.innerText= 'km'
    }  else if(lengthAreaOne.value=="mm" && vertTo.value=="Length" && lengthAreaTwo.value=="km"){
        var askUnit= enterNumber.value/1000000;
       
        result.value= askUnit;
        gradeOne.innerText= 'mm';
        gradeTwo.innerText= 'km'
    }  else if(lengthAreaOne.value=="mm" && vertTo.value=="Length" && lengthAreaTwo.value=="cm"){
        var askUnit= enterNumber.value/10;
       
        result.value= askUnit;
        gradeOne.innerText= 'mm';
        gradeTwo.innerText= 'cm'
    } else if(lengthAreaOne.value=="km" && vertTo.value=="Length" && lengthAreaTwo.value=="mm"){
        var askUnit= enterNumber.value*1000000;
       
        result.value= askUnit;
        gradeOne.innerText= 'km';
        gradeTwo.innerText= 'mm'
    }   else if(timeAreaOne.value=="hr" && vertTo.value=="Time" && timeAreaTwo.value=="min"){
        var askUnit= enterNumber.value*60;
       
        result.value= askUnit;
        gradeOne.innerText= 'hr';
        gradeTwo.innerText= 'min'
    }  else if(timeAreaOne.value=="hr" && vertTo.value=="Time" && timeAreaTwo.value=="sec"){
        var askUnit= enterNumber.value*60*60;
       
        result.value= askUnit;
        gradeOne.innerText= 'hr';
        gradeTwo.innerText= 'sec'
    } else if(timeAreaOne.value=="min" && vertTo.value=="Time" && timeAreaTwo.value=="hr"){
        var askUnit= enterNumber.value/60;
       
        result.value= askUnit;
        gradeOne.innerText= 'min';
        gradeTwo.innerText= 'hr'
    } else if(timeAreaOne.value=="min" && vertTo.value=="Time" && timeAreaTwo.value=="sec"){
        var askUnit= enterNumber.value*60;
       
        result.value= askUnit;
        gradeOne.innerText= 'min';
        gradeTwo.innerText= 'sec'
    } else if(timeAreaOne.value=="sec" && vertTo.value=="Time" && timeAreaTwo.value=="hr"){
        var askUnit= enterNumber.value*3600;
       
        result.value= askUnit;
        gradeOne.innerText= 'sec';
        gradeTwo.innerText= 'hr';
    } else if(timeAreaOne.value=="sec" && vertTo.value=="Time" && timeAreaTwo.value=="min"){
        var askUnit= enterNumber.value/60;
       
        result.value= askUnit;
        gradeOne.innerText= 'sec';
        gradeTwo.innerText= 'min'
    }
   theSame();   
}


   function theSame() {
    if ((temAreaOne.value==temAreaTwo.value && vertTo.value=="Temperature") || (lengthAreaOne.value==lengthAreaTwo.value && vertTo=="Length") ) {
        var askUnit=enterNumber.value;
          result.value= askUnit;
          gradeOne.innerHTML= temAreaOne.value.charAt(0);
          gradeTwo.innerHTML= temAreaTwo.value.charAt(0),lengthAreaTwo.value.charAt(0);
    }
   }




function delSelect() {
    if (vertTo.value=="Length") {
        // tem.innerText="";
        document.getElementById('tem').style.display='none';
        document.getElementById('len').style.display='block';
        document.getElementById('tm').style.display='none';
    } else if(vertTo.value=="Temperature") {
    //    len.innerText="";
    document.getElementById('len').style.display='none';
    document.getElementById('tem').style.display='block';
    document.getElementById('tm').style.display='none';
        
    }else if(vertTo.value=="Time") {
        //    len.innerText="";
        document.getElementById('len').style.display='none';
        document.getElementById('tem').style.display='none';
        document.getElementById('tm').style.display='block';
        
            
        }
    else if (vertTo.value=="Unit"){
       tem.style.display='none';
       len.style.display='none';
       tm.style.display='none';
      
    }
}
// document.getElementById('ade').style.display='none'

delSelect();