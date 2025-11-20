let date = document.querySelector(".alzeihmer")
let text = document.querySelector(".text")
let send = document.querySelector("button")
let alz = {
  years : 0,
  days : 0,
}

send.addEventListener("click", () => {
  let confirmation = date.value
  if (confirm("Are you sure the date is: " + confirmation.replace(/-/g, "/").split("").reverse().join(""))) {
    clearInterval(interval);
    alert("Your date has been successfully registered!");
    alert("Oops... I think I forgot your date. What was it again? " + apply_alz(confirmation).replace(/-/g,"/").split("").reverse().join(""));
  }
});

function apply_alz(str) {
  if(!date.value) return;
  let year,day,month
  let string = str.split("-");
  let seed = Math.floor(Math.random() * 3)-1; 
  let bit = Math.floor(Math.random()*2)
  
    year = Math.min(Math.max(parseInt(string[0]) + seed, 0), 9999).toString().padStart(4,"0");
    month = Math.min(Math.max(parseInt(string[1]) + seed-bit), 12).toString().padStart(2,"0");
    day = Math.min(Math.max(parseInt(string[2]) + seed * bit, 1), month==="02"?28:30).toString().padStart(2,"0");
    text.textContent = "Is this the date ? "+day+"/"+month+"/"+year+"... I'm not sure.";

  if(Math.random()>0.90){
    year = parseInt(string[0]);
    month = Math.min(parseInt(string[2]),12).toString().padStart(2,"0");
    day = parseInt(string[1]).toString().padStart(2,"0")
    text.textContent = "Oops! Sometimes I mix up the months and days!"
  }
  return `${year}-${month}-${day}`
}

const interval = setInterval(() => {
    if (alz.days % Math.max(1, 20 - alz.years) === 0) {
        date.value = apply_alz(date.value);
    }
    alz.days++;
    if (alz.days >= 365) { 
        alz.years++; 
        alz.days = 0; 
    }
}, 50);
interval;
