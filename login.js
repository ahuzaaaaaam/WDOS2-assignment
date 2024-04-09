let gos = document.getElementById("go")
let gob =  document.getElementById("gob")
let sigin = document.getElementById("signin")
let sigins = document.getElementById("signins")
let title = document.getElementById("title")
let signup = document.getElementById("signup")
let regin = document.getElementById("regin")
let reg = document.getElementById("regform")
let log = document.getElementById("logform")
let names = document.getElementById('name')
let pass = document.getElementById("password")
let newname = document.getElementById("newname")
let newpass = document.getElementById("newpass")
let harduser = JSON.parse(localStorage.getItem('harduser')) || {
    user: 
    [
        { 
            username: "admin", 
            password: "admin", 
            role: "admin", 
            email: "admin@admin.com", 
            loggedin: false 
        },
        { 
            username: "user", 
            password: "password", 
            role: "site_user", 
            email: "user@user.com", 
            loggedin: false 
        }
    ]
};

localStorage.setItem('harduser', JSON.stringify(harduser));

function click() {
    sigin.classList.remove("off");
    gos.classList.add("off");
    sigins.classList.remove("off");
    gob.classList.add("off");
}
function clicks() {
    sigin.classList.add("off");
    gos.classList.remove("off");
    sigins.classList.add("off");
    gob.classList.remove("off");
}
function go(){
    window.location.href = 'home.html'
}
function showsignup(){
    reg.style.display = "block";
    log.style.display = "none";
}
function showregin(){
    reg.style.display = "none";
    log.style.display = "block";
}
function login(data) {
    data.preventDefault();
    
    const username = names.value;
    const password = pass.value;
    const user = harduser.user.find(user => user.username === username && user.password === password);
    
    if (user){
        user.loggedin = true;
        localStorage.setItem('harduser', JSON.stringify(harduser));
        
        const reroute = (username === "admin") ? "home.html" : "home.html";
        window.location.href = reroute;
    } else{
        alert("Incorrect username or password, Please try again.");
    }
}
function save(data){
    data.preventDefault();

    const newuser = newname.value;
    const newpassword = newpass.value;
    const olduser = harduser.user.find(user => user.username === newuser && user.password === newpassword);

    if (olduser){
        alert("User already exists")
    } else{
        harduser.user.push(
            {
                username : newuser,
                password : newpassword,
                role : "site_user",
                loggedin : false
            }
        );
        localStorage.setItem("harduser", JSON.stringify(harduser));
        window.location.href = "login.html";
        showsignup()
    }
}

gos.addEventListener("mouseover", clicks);
gos.addEventListener("click", go);
gob.addEventListener("click", go);
gob.addEventListener("mouseover", clicks)
sigin.addEventListener("mouseover", click);
sigins.addEventListener("mouseover", click);
signup.addEventListener("click", showsignup);
regin.addEventListener("click", showregin);
log.addEventListener("submit", login);
reg.addEventListener("submit", save);









