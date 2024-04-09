const txtDirectory = document.getElementById("introtitle");
const txtpara = document.getElementById("introparagraph");
const sub1title = document.getElementById("sub1title")
const sub1paragraph = document.getElementById("sub1paragraph")
const sub1paragraph2 = document.getElementById("sub1paragraph2")
const sub2title = document.getElementById("sub2title")
const sub2paragraph = document.getElementById("sub2paragraph")
const sub2paragraph2 = document.getElementById("sub2paragraph2") 
const sub3title = document.getElementById("sub3title")
const sub3paragraph = document.getElementById("sub3paragraph")
const sub3paragraph2 = document.getElementById("sub3paragraph2")
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
let editedsubpara2 = document.getElementById("editedParagraph2")
let edited2sub1 = document.getElementById("edited2sub1")
let edited2subpara1 = document.getElementById("edited2Paragraph1")
let edited2subpara2 = document.getElementById("edited2Paragraph2")
let edited3sub1 = document.getElementById("edited3sub1")
let edited3subpara1 = document.getElementById("edited3Paragraph1")
let edited3subpara2 = document.getElementById("edited3Paragraph2")
let news = document.getElementById("news");
let email = document.getElementById("email")
let sub = document.getElementById("sub")
let newsdash = document.getElementById("newsdash")
let newsletter = JSON.parse(localStorage.getItem('newsletter')) || [];
localStorage.setItem('newsletter', JSON.stringify(newsletter));

let cont;

function getData() {
   const storedData = localStorage.getItem("DataYala");
   if(storedData) {
       processData(JSON.parse(storedData));
   } else {
       fetch("yala.json")
      .then(res => res.json())
      .then(data => {
         localStorage.setItem("DataYala", JSON.stringify(data));
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
   sub1paragraph2.innerHTML = cont[1].sub1paragraph2
   sub2title.innerHTML = cont[2].sub2title
   sub2paragraph.innerHTML = cont[2].sub2paragraph
   sub2paragraph2.innerHTML = cont[2].sub2paragraph2
   sub3title.innerHTML = cont[3].sub3title
   sub3paragraph.innerHTML = cont[3].sub3paragraph
   sub3paragraph2.innerHTML = cont[3].sub3paragraph2
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
   window.location.href = "yala.html";
}

login();
logouts.addEventListener("click", logout);




editButton.addEventListener("click", openEditor);

function openEditor() {
   editedTitleInput.value = cont[0].introtitle;
   editedintroductionInput.value = cont[0].introparagraph;
   editedsub1.value = cont[1].sub1title;
   editedsubpara1.value = cont[1].sub1paragraph
   editedsubpara2.value = cont[1].sub1paragraph2
   edited2sub1.value = cont[2].sub2title
   edited2subpara1.value = cont[2].sub2paragraph
   edited2subpara2.value = cont[2].sub2paragraph2
   edited3sub1.value = cont[3].sub3title
   edited3subpara1.value = cont[3].sub3paragraph
   edited3subpara2.value = cont[3].sub3paragraph2
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
   cont[1].sub1paragraph2 = editedsubpara2.value
   cont[2].sub2title = edited2sub1.value;
   cont[2].sub2paragraph = edited2subpara1.value;
   cont[2].sub2paragraph2 = edited2subpara2.value;
   cont[3].sub3title = edited3sub1.value;
   cont[3].sub3paragraph = edited3subpara1.value;
   cont[3].sub3paragraph2 = edited3subpara2.value;

   localStorage.setItem("DataYala", JSON.stringify(cont));

   txtDirectory.innerHTML = cont[0].introtitle;
   txtpara.innerHTML = cont[0].introparagraph;
   sub1title.innerHTML = cont[1].sub1title
   sub1paragraph.innerHTML = cont[1].sub1paragraph
   sub1paragraph2.innerHTML = cont[1].sub1paragraph2
   sub2title.innerHTML = cont[2].sub2title
   sub2paragraph.innerHTML = cont[2].sub2paragraph
   sub2paragraph2.innerHTML = cont[2].sub2paragraph2
   sub3title.innerHTML = cont[3].sub3title
   sub3paragraph.innerHTML = cont[3].sub3paragraph
   sub3paragraph2.innerHTML = cont[3].sub3paragraph2

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
   const storedData = localStorage.removeItem("DataYala");
   if(storedData) {
       processData(JSON.parse(storedData));
   } else {
       fetch("yala.json")
      .then(res => res.json())
      .then(data => {
         localStorage.setItem("DataYala", JSON.stringify(data));
         processData(data);
         })
      .catch(error => console.log(`Error - ${error}`));
   }
   closeEditor();
}
