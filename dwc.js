const txtDirectory = document.getElementById("introtitle");
const sub1paragraph = document.getElementById("sub1paragraph");
const sub1paragraph2 = document.getElementById("sub1paragraph2");
let harduser = JSON.parse(localStorage.getItem('harduser'))
let logins = document.getElementById("logins")
let logouts = document.getElementById("logouts")
let editModal = document.getElementById("editModal");
const textarea = document.querySelector("textarea");
let editButton = document.getElementById("editButton");
let editedTitleInput = document.getElementById("editedTitle");
let editedsubpara1 = document.getElementById("editedParagraph1")
let editedsubpara2 = document.getElementById("editedParagraph2")
let news = document.getElementById("news");
let email = document.getElementById("email")
let sub = document.getElementById("sub")
let newsdash = document.getElementById("newsdash")
let newsletter = JSON.parse(localStorage.getItem('newsletter')) || [];
localStorage.setItem('newsletter', JSON.stringify(newsletter));

let cont;

function getData() {
   const storedData = localStorage.getItem("DataDwc");
   if(storedData) {
       processData(JSON.parse(storedData));
   } else {
       fetch("dwc.json")
      .then(res => res.json())
      .then(data => {
         localStorage.setItem("DataDwc", JSON.stringify(data));
         processData(data);
         })
      .catch(error => console.log(`Error - ${error}`));
   }
}

getData();

function processData(res){
   cont = res;
   txtDirectory.innerHTML = cont[0].introtitle;
   sub1paragraph.innerHTML = cont[1].sub1paragraph;
   sub1paragraph2.innerHTML = cont[1].sub1paragraph2;
}

function login() {
   if (harduser && Array.isArray(harduser.user)) {
      const loggedInUser = harduser.user.find(user => user.loggedin === true);
      if (loggedInUser) {
         logouts.style.display = "inline";
         logins.style.display = "none";
      } else{
         logouts.style.display = "none";
         logins.style.display = "inline";
      }
   }
}
function logout() {
   if (harduser && Array.isArray(harduser.user)) {
      const loggedInUser = harduser.user.find(user => user.loggedin === true);
      if (loggedInUser){
         loggedInUser.loggedin = false;
         logouts.style.display = "none";
         logins.style.display = "block";
         localStorage.setItem('harduser', JSON.stringify(harduser));
      }
   }
   window.location.href = "dwc.html";
}

login();
logouts.addEventListener("click", logout);




editButton.addEventListener("click", openEditor);

function openEditor() {
   editedTitleInput.value = cont[0].introtitle;
   editedsubpara1.value = cont[1].sub1paragraph
   editedsubpara2.value = cont[1].sub1paragraph2
   editModal.style.display = "block";
}

function closeEditor() {
   editModal.style.display = "none";
}

function saveChanges() {
   cont[0].introtitle = editedTitleInput.value;
   cont[1].sub1paragraph = editedsubpara1.value;
   cont[1].sub1paragraph2 = editedsubpara2.value

   localStorage.setItem("DataDwc", JSON.stringify(cont));

   txtDirectory.innerHTML = cont[0].introtitle;
   sub1paragraph.innerHTML = cont[1].sub1paragraph
   sub1paragraph2.innerHTML = cont[1].sub1paragraph2

   closeEditor();
}

textarea.addEventListener("keyup", e =>{
   textarea.style.height = "61px";
   let hieght = e.target.scrollHeight;
   textarea.style.height = `${hieght}px`;
})

function news1(data){
   data.preventDefault();

   const emails = email.value;
   const oldsub = newsletter.includes(emails);

   if(oldsub){
      alert("You have already subscribed with this Email")
   } else{
      newsletter.push(emails)
      localStorage.setItem("newsletter", JSON.stringify(newsletter));
      alert("thank you for subscribing")
   }
}
news.addEventListener("submit", news1);

function edituser() {
   if (harduser && Array.isArray(harduser.user)) {
      const loggedInUser = harduser.user.find(user => user.loggedin === true && (user.username === "admin" || user.username === "user"));
      if (loggedInUser) {
         editButton.style.display = "block";
      } else{
         editButton.style.display = "none";
      }
   }
}
edituser();

function adminnew() {
   if (harduser && Array.isArray(harduser.user)) {
      const loggedInUser = harduser.user.find(user => user.loggedin === true && user.username === "admin");
      if (loggedInUser) {
         newsdash.style.display = "block";
      } else{
         newsdash.style.display = "none";
      }
   }
}
adminnew();

function def() {
   const storedData = localStorage.removeItem("DataDwc");
   if(storedData) {
       processData(JSON.parse(storedData));
   } else {
       fetch("dwc.json")
      .then(res => res.json())
      .then(data => {
         localStorage.setItem("DataDwc", JSON.stringify(data));
         processData(data);
         })
      .catch(error => console.log(`Error - ${error}`));
   }
   closeEditor();
}
