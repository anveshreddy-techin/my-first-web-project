//defining a function to call interest
function compute()
{
  let p, r, t, si, tamt;  //local vars
  
  //data coll
  p=+pamt.value;
  t=+time.value;
  r=+roi.value;
  
  //calc's
  si=p*t*r/100;
  tamt=p+si;
  
  //display op's
  intAmt.innerHTML="Interest Amount &#8377;"+si;
  totAmt.innerHTML="Total Amount &#8377;"+tamt;
}