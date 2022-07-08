const txtInput = document.querySelector(".inputs input");
checkBtn = document.querySelector(".inputs button");
infotxt = document.querySelector(".info-text");
let filterInput;   

checkBtn.addEventListener("click", () => {
   // Splits user input character, reverses them into a single word
   let reverseInput = filterInput.split("").reverse().join("");
   infotxt.style.display = "block";
   if(filterInput != reverseInput) {
      return infotxt.innerHTML = `No, <span>'${txtInput.value}'</span> isn't a palindrome!`;
   }
   infotxt.innerHTML = `Yes, <span>'${txtInput.value}'</span> is a palindrome!`;
}); 

txtInput.addEventListener("keyup", () => {
   // function that removes spaces & special characters form being entered
      filterInput = txtInput.value.toLowerCase().replace(/[^A-Z0-9]/ig, "");
   if (filterInput) {
      return checkBtn.classList.add("active");
   }
   infotxt.style.display = "none";
   checkBtn.classList.remove("active");
});