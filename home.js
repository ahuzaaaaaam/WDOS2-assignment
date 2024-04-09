const txtDirectory = document.getElementById("introtitle");
const txtpara = document.getElementById("introparagraph");
const sub1title = document.getElementById("sub1title")
const sub1paragraph = document.getElementById("sub1paragraph")
const sub2title = document.getElementById("sub2title")
const sub2paragraph = document.getElementById("sub2paragraph")
const sub3title = document.getElementById("sub3title")
const sub3paragraph = document.getElementById("sub3paragraph")
let harduser = JSON.parse(localStorage.getItem('harduser'))
let logins = document.getElementById("logins")
let logouts = document.getElementById("logouts")
let editModal = document.getElementById("editModal");
const textarea = document.querySelector("textarea");
let editButton = document.getElementById("editButton");
let editedTitleInput = document.getElementById("editedTitle");
let editedintroductionInput = document.getElementById("editedintroduction");
let editedsub1 = document.getElementById("editedsub1")
let editedsubpara1 = document.getElementById("editedParagraph1")
let editedsub2 = document.getElementById("editedsub2")
let editedsubpara2 = document.getElementById("editedParagraph2")
let editedsub3 = document.getElementById("editedsub3")
let editedsubpara3 = document.getElementById("editedParagraph3")
let news = document.getElementById("news");
let email = document.getElementById("email")
let sub = document.getElementById("sub")
let newsdash = document.getElementById("newsdash")
let newsletter = JSON.parse(localStorage.getItem('newsletter')) || [];
localStorage.setItem('newsletter', JSON.stringify(newsletter));


let cont;

function getData() {
   const storedData = localStorage.getItem("Data");
   if(storedData) {
       processData(JSON.parse(storedData));
   } else {
       fetch("home.json")
      .then(res => res.json())
      .then(data => {
         localStorage.setItem("Data", JSON.stringify(data));
         processData(data);
         })
      .catch(error => console.log(`Error - ${error}`));
   }
}

getData();

function processData(res){
   cont = res;
   txtDirectory.innerHTML = cont[0].introtitle;
   txtpara.innerHTML = cont[0].introparagraph
   sub1title.innerHTML = cont[1].sub1title
   sub1paragraph.innerHTML = cont[1].sub1paragraph
   sub2title.innerHTML = cont[2].sub2title
   sub2paragraph.innerHTML = cont[2].sub2paragraph
   sub3title.innerHTML = cont[3].sub3title
   sub3paragraph.innerHTML = cont[3].sub3paragraph
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
   window.location.href = "home.html";
}

login();
logouts.addEventListener("click", logout);



editButton.addEventListener("click", openEditor);

function openEditor() {
   editedTitleInput.value = cont[0].introtitle;
   editedintroductionInput.value = cont[0].introparagraph;
   editedsub1.value = cont[1].sub1title;
   editedsubpara1.value = cont[1].sub1paragraph
   editedsub2.value = cont[2].sub2title
   editedsubpara2.value = cont[2].sub2paragraph
   editedsub3.value = cont[3].sub3title
   editedsubpara3.value = cont[3].sub3paragraph
   editModal.style.display = "block";
}

function closeEditor() {
   editModal.style.display = "none";
}

function saveChanges() {
   cont[0].introtitle = editedTitleInput.value;
   cont[0].introparagraph = editedintroductionInput.value;
   cont[1].sub1title = editedsub1.value;
   cont[1].sub1paragraph = editedsubpara1.value;
   cont[2].sub2title = editedsub2.value;
   cont[2].sub2paragraph = editedsubpara2.value;
   cont[3].sub3title = editedsub3.value;
   cont[3].sub3paragraph = editedsubpara3.value;

   localStorage.setItem("Data", JSON.stringify(cont));

   txtDirectory.innerHTML = cont[0].introtitle;
   txtpara.innerHTML = cont[0].introparagraph;
   sub1title.innerHTML = cont[1].sub1title
   sub1paragraph.innerHTML = cont[1].sub1paragraph
   sub2title.innerHTML = cont[2].sub2title
   sub2paragraph.innerHTML = cont[2].sub2paragraph
   sub3title.innerHTML = cont[3].sub3title
   sub3paragraph.innerHTML = cont[3].sub3paragraph

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
   const storedData = localStorage.removeItem("Data");
   if(storedData) {
       processData(JSON.parse(storedData));
   } else {
       fetch("home.json")
      .then(res => res.json())
      .then(data => {
         localStorage.setItem("Data", JSON.stringify(data));
         processData(data);
         })
      .catch(error => console.log(`Error - ${error}`));
   }
   closeEditor();
}

