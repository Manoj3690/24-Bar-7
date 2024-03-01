// grabbing id
let hour_x=document.getElementById("hour");
let minute_y=document.getElementById("minute");
let second_z=document.getElementById("second");
let ist_f=document.getElementById("ist");

// create function
function digitalclock(){
  let x= new Date().getHours();
  let y= new Date().getMinutes();
  let z= new Date().getSeconds();
  let f= "AM";
  
  // AM PM choice
  if (x>12){
    x=x-12;
    f="PM";
  }
  // Execution
  hour_x.innerText=x;
  minute_y.innerText=y;
  second_z.innerText=z;
  ist_f.innerText=f;
  
 // refresh
  setTimeout((digitalclock), 1000);
  
}
//function call
digitalclock();