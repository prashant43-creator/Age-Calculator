function calculateAge(){
  const birthInput = document.getElementById("birthdate").value;
  const result = document.getElementById("result");
  
  if (!birthInput) {
      alert("Please Input a valid Date !!")
      return
  }
  const birthdate = new Date(birthInput);
  const today = new Date();
  
  let year = today.getFullYear() - birthdate.getFullYear()
  let month = today.getMonth() - birthdate.getMonth();
  let day = today.getDate() - birthdate.getDate();
  
  if (day<0) {
    month--
    day += new Date(today.getFullYear(),today.getMonth(),0).getDate();
  }
  if (month < 0 ) {
    year-- 
    month += 12
  }
  
  result.textContent =
  `👉  You are ${year} Year
    ${month} Month 
         ${day} Days Old `
}

function reset(){
   document.getElementById("birthdate").value = "";
   document.getElementById("result").innerText = "";
}

const toggleswitch = 
document.getElementById("toggletheme");

toggleswitch.addEventListener("click",() => {
  
  document.body.classList.toggle("dark-mode")
}  )