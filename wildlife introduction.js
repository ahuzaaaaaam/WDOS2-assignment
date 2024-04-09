const txtDirectory = document.getElementById("introtitle");
const txtpara = document.getElementById("introparagraph");
const sub1title = document.getElementById("sub1title")
const sub1paragraph = document.getElementById("sub1paragraph")
const sub1paragraph2 = document.getElementById("sub1paragraph2")
const sub2title = document.getElementById("sub2title")
const sub2paragraph = document.getElementById("sub2paragraph")
const sub2paragraph2 = document.getElementById("sub2paragraph2") 
const ttitle = document.getElementById("ttitle")
const thead1 = document.getElementById("thead1")
const thead2 = document.getElementById("thead2")
const thead3 = document.getElementById("thead3")
const tdata1 = document.getElementById("tdata1")
const tdata2 = document.getElementById("tdata2")
const tdata3 = document.getElementById("tdata3")
const tdata4 = document.getElementById("tdata4")
const tdata5 = document.getElementById("tdata5")
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
let news = document.getElementById("news");
let email = document.getElementById("email")
let sub = document.getElementById("sub")
let newsdash = document.getElementById("newsdash")
let newsletter = JSON.parse(localStorage.getItem('newsletter')) || [];
localStorage.setItem('newsletter', JSON.stringify(newsletter));




let cont;

function getData() {
   const storedData = localStorage.getItem("DataWild");
   if(storedData) {
       processData(JSON.parse(storedData));
   } else {
       fetch("wildlife introduction.json")
      .then(res => res.json())
      .then(data => {
         localStorage.setItem("DataWild", JSON.stringify(data));
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
   ttitle.innerHTML = cont[3].ttitle
   thead1.innerHTML = cont[3].thead1
   thead2.innerHTML = cont[3].thead2
   thead3.innerHTML = cont[3].thead3
   tdata1.innerHTML = cont[3].tdata1
   tdata2.innerHTML = cont[3].tdata2
   tdata3.innerHTML = cont[3].tdata3
   tdata4.innerHTML = cont[3].tdata4
   tdata5.innerHTML = cont[3].tdata5
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
   window.location.href = "wildlife introduction.html";
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

   localStorage.setItem("DataWild", JSON.stringify(cont));

   txtDirectory.innerHTML = cont[0].introtitle;
   txtpara.innerHTML = cont[0].introparagraph;
   sub1title.innerHTML = cont[1].sub1title
   sub1paragraph.innerHTML = cont[1].sub1paragraph
   sub1paragraph2.innerHTML = cont[1].sub1paragraph2
   sub2title.innerHTML = cont[2].sub2title
   sub2paragraph.innerHTML = cont[2].sub2paragraph
   sub2paragraph2.innerHTML = cont[2].sub2paragraph2

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
   const storedData = localStorage.removeItem("DataWild");
   if(storedData) {
       processData(JSON.parse(storedData));
   } else {
       fetch("wildlife introduction.json")
      .then(res => res.json())
      .then(data => {
         localStorage.setItem("DataWild", JSON.stringify(data));
         processData(data);
         })
      .catch(error => console.log(`Error - ${error}`));
   }
   closeEditor();
}
