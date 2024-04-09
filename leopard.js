const txtDirectory = document.getElementById("introtitle");
const txtDirectory2 = document.getElementById("introtitle2")
const txtpara = document.getElementById("introparagraph");
const sub1title = document.getElementById("sub1title")
const sub1paragraph = document.getElementById("sub1paragraph")
const sub2title = document.getElementById("sub2title")
const sub2paragraph = document.getElementById("sub2paragraph") 
const sub3title = document.getElementById("sub3title")
const sub3paragraph = document.getElementById("sub3paragraph")
const sub4title = document.getElementById("sub4title")
const sub4title2 = document.getElementById("sub4title2")
const sub4paragraph = document.getElementById("sub4paragraph")
const sub4paragraph2 = document.getElementById("sub4paragraph2")
const sub4title3 = document.getElementById("sub4title3")
const sub4paragraph3 = document.getElementById("sub4paragraph3")
const sub4paragraph4 = document.getElementById("sub4paragraph4")
const sub4title4 = document.getElementById("sub4title4")
const sub4paragraph5 = document.getElementById("sub4paragraph5")
const sub5title = document.getElementById("sub5title")
const sub5title2 = document.getElementById("sub5title2")
const sub5paragraph = document.getElementById("sub5paragraph")
const sub5paragraph2 = document.getElementById("sub5paragraph2")
const sub5title3 = document.getElementById("sub5title3")
const sub5paragraph3 = document.getElementById("sub5paragraph3")
const sub5paragraph4 = document.getElementById("sub5paragraph4")
const sub5title4 = document.getElementById("sub5title4")
const sub5paragraph5 = document.getElementById("sub5paragraph5")
let harduser = JSON.parse(localStorage.getItem('harduser'))
let logins = document.getElementById("logins")
let logouts = document.getElementById("logouts")
let editModal = document.getElementById("editModal");
const textarea = document.querySelector("textarea");
let editButton = document.getElementById("editButton");
let editedTitleInput = document.getElementById("editedTitle");
let editTitle = document.getElementById("editedTitle2");
let editedintroductionInput = document.getElementById("editedintroduction");
let editedsub1 = document.getElementById("editedsub1")
let editedsubpara1 = document.getElementById("editedParagraph1")
let edited2sub1 = document.getElementById("edited2sub1")
let edited2subpara1 = document.getElementById("edited2Paragraph1")
let edited3sub1 = document.getElementById("edited3sub1")
let edited3subpara1 = document.getElementById("edited3Paragraph1")
let edited4sub1 = document.getElementById("edited4sub1")
let edited4sub2 = document.getElementById("edited4sub2")
let edited4subpara1 = document.getElementById("edited4Paragraph1")
let edited4subpara2 = document.getElementById("edited4Paragraph2")
let edited4sub3 = document.getElementById("edited4sub3")
let edited4subpara3 = document.getElementById("edited4Paragraph3")
let edited4subpara4 = document.getElementById("edited4Paragraph4")
let edited4sub4 = document.getElementById("edited4sub4")
let edited4subpara5 = document.getElementById("edited4Paragraph5")
let edited5sub1 = document.getElementById("edited5sub1")
let edited5sub2 = document.getElementById("edited5sub2")
let edited5subpara1 = document.getElementById("edited5Paragraph1")
let edited5subpara2 = document.getElementById("edited5Paragraph2")
let edited5sub3 = document.getElementById("edited5sub3")
let edited5subpara3 = document.getElementById("edited5Paragraph3")
let edited5subpara4 = document.getElementById("edited5Paragraph4")
let edited5sub4 = document.getElementById("edited5sub4")
let edited5subpara5 = document.getElementById("edited5Paragraph5")
let news = document.getElementById("news");
let email = document.getElementById("email")
let sub = document.getElementById("sub")
let newsdash = document.getElementById("newsdash")
let newsletter = JSON.parse(localStorage.getItem('newsletter')) || [];
localStorage.setItem('newsletter', JSON.stringify(newsletter));

let cont;

function getData() {
   const storedData = localStorage.getItem("DataLeo");
   if(storedData) {
       processData(JSON.parse(storedData));
   } else {
       fetch("leopard.json")
      .then(res => res.json())
      .then(data => {
         localStorage.setItem("DataLeo", JSON.stringify(data));
         processData(data);
         })
      .catch(error => console.log(`Error - ${error}`));
   }
}

getData();

function processData(res){
   cont = res;
   txtDirectory.innerHTML = cont[0].introtitle;
   txtDirectory2.innerHTML = cont[0].introtitle2
   txtpara.innerHTML = cont[0].introparagraph
   sub1title.innerHTML = cont[1].sub1title
   sub1paragraph.innerHTML = cont[1].sub1paragraph
   sub2title.innerHTML = cont[2].sub2title
   sub2paragraph.innerHTML = cont[2].sub2paragraph
   sub3title.innerHTML = cont[3].sub3title
   sub3paragraph.innerHTML = cont[3].sub3paragraph
   sub4title.innerHTML = cont[4].sub4title
   sub4title2.innerHTML = cont[4].sub4title2
   sub4paragraph.innerHTML = cont[4].sub4paragraph
   sub4paragraph2.innerHTML = cont[4].sub4paragraph2
   sub4title3.innerHTML = cont[4].sub4title3
   sub4paragraph3.innerHTML = cont[4].sub4paragraph3
   sub4paragraph4.innerHTML = cont[4].sub4paragraph4
   sub4title4.innerHTML = cont[4].sub4title4
   sub4paragraph5.innerHTML = cont[4].sub4paragraph5
   sub5title.innerHTML = cont[5].sub5title
   sub5title2.innerHTML = cont[5].sub5title2
   sub5paragraph.innerHTML = cont[5].sub5paragraph
   sub5paragraph2.innerHTML = cont[5].sub5paragraph2
   sub5title3.innerHTML = cont[5].sub5title3
   sub5paragraph3.innerHTML = cont[5].sub5paragraph3
   sub5paragraph4.innerHTML = cont[5].sub5paragraph4
   sub5title4.innerHTML = cont[5].sub5title4
   sub5paragraph5.innerHTML = cont[5].sub5paragraph5
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
   window.location.href = "leopard.html";
}

login();
logouts.addEventListener("click", logout);




editButton.addEventListener("click", openEditor);

function openEditor() {
   editedTitleInput.value = cont[0].introtitle;
   editTitle.value = cont[0].introtitle2;
   editedintroductionInput.value = cont[0].introparagraph;
   editedsub1.value = cont[1].sub1title;
   editedsubpara1.value = cont[1].sub1paragraph
   edited2sub1.value = cont[2].sub2title
   edited2subpara1.value = cont[2].sub2paragraph
   edited3sub1.value = cont[3].sub3title
   edited3subpara1.value = cont[3].sub3paragraph
   edited4sub1.value = cont[4].sub4title
   edited4sub2.value = cont[4].sub4title2
   edited4subpara1.value = cont[4].sub4paragraph
   edited4subpara2.value = cont[4].sub4paragraph2
   edited4sub3.value = cont[4].sub4title3
   edited4subpara3.value = cont[4].sub4paragraph3
   edited4subpara4.value = cont[4].sub4paragraph4
   edited4sub4.value = cont[4].sub4title4
   edited4subpara5.value = cont[4].sub4paragraph5
   edited5sub1.value = cont[5].sub5title
   edited5sub2.value = cont[5].sub5title2
   edited5subpara1.value = cont[5].sub5paragraph
   edited5subpara2.value = cont[5].sub5paragraph2
   edited5sub3.value = cont[5].sub5title3
   edited5subpara3.value = cont[5].sub5paragraph3
   edited5subpara4.value = cont[5].sub5paragraph4
   edited5sub4.value = cont[5].sub5title4
   edited5subpara5.value = cont[5].sub5paragraph5

   editModal.style.display = "block";
}

function closeEditor() {
   editModal.style.display = "none";
}

function saveChanges() {
   cont[0].introtitle = editedTitleInput.value;
   cont[0].introtitle2 = editTitle.value;
   cont[0].introparagraph = editedintroductionInput.value;
   cont[1].sub1title = editedsub1.value;
   cont[1].sub1paragraph = editedsubpara1.value;
   cont[2].sub2title = edited2sub1.value;
   cont[2].sub2paragraph = edited2subpara1.value;
   cont[3].sub3title = edited3sub1.value;
   cont[3].sub3paragraph = edited3subpara1.value;
   cont[4].sub4title = edited4sub1.value;
   cont[4].sub4title2 = edited4sub2.value;
   cont[4].sub4paragraph = edited4subpara1.value;
   cont[4].sub4paragraph2 = edited4subpara2.value;
   cont[4].sub4title3 = edited4sub3.value;
   cont[4].sub4paragraph3 = edited4subpara3.value;
   cont[4].sub4paragraph4 = edited4subpara4.value;
   cont[4].sub4title4 = edited4sub4.value;
   cont[4].sub4paragraph5 = edited4subpara5.value;
   cont[5].sub5title = edited5sub1.value;
   cont[5].sub5title2 = edited5sub2.value;
   cont[5].sub5paragraph = edited5subpara1.value;
   cont[5].sub5paragraph2 = edited5subpara2.value;
   cont[5].sub5title3 = edited5sub3.value;
   cont[5].sub5paragraph3 = edited5subpara3.value;
   cont[5].sub5paragraph4 = edited5subpara4.value;
   cont[5].sub5title4 = edited5sub4.value;
   cont[5].sub5paragraph5 = edited5subpara5.value;

   localStorage.setItem("DataLeo", JSON.stringify(cont));

   txtDirectory.innerHTML = cont[0].introtitle;
   txtDirectory2.innerHTML = cont[0].introtitle2
   txtpara.innerHTML = cont[0].introparagraph
   sub1title.innerHTML = cont[1].sub1title
   sub1paragraph.innerHTML = cont[1].sub1paragraph
   sub2title.innerHTML = cont[2].sub2title
   sub2paragraph.innerHTML = cont[2].sub2paragraph
   sub3title.innerHTML = cont[3].sub3title
   sub3paragraph.innerHTML = cont[3].sub3paragraph
   sub4title.innerHTML = cont[4].sub4title
   sub4title2.innerHTML = cont[4].sub4title2
   sub4paragraph.innerHTML = cont[4].sub4paragraph
   sub4paragraph2.innerHTML = cont[4].sub4paragraph2
   sub4title3.innerHTML = cont[4].sub4title3
   sub4paragraph3.innerHTML = cont[4].sub4paragraph3
   sub4paragraph4.innerHTML = cont[4].sub4paragraph4
   sub4title4.innerHTML = cont[4].sub4title4
   sub4paragraph5.innerHTML = cont[4].sub4paragraph5
   sub5title.innerHTML = cont[5].sub5title
   sub5title2.innerHTML = cont[5].sub5title2
   sub5paragraph.innerHTML = cont[5].sub5paragraph
   sub5paragraph2.innerHTML = cont[5].sub5paragraph2
   sub5title3.innerHTML = cont[5].sub5title3
   sub5paragraph3.innerHTML = cont[5].sub5paragraph3
   sub5paragraph4.innerHTML = cont[5].sub5paragraph4
   sub5title4.innerHTML = cont[5].sub5title4
   sub5paragraph5.innerHTML = cont[5].sub5paragraph5

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
   const storedData = localStorage.removeItem("DataLeo");
   if(storedData) {
       processData(JSON.parse(storedData));
   } else {
       fetch("leopard.json")
      .then(res => res.json())
      .then(data => {
         localStorage.setItem("DataLeo", JSON.stringify(data));
         processData(data);
         })
      .catch(error => console.log(`Error - ${error}`));
   }
   closeEditor();
}