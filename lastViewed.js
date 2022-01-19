// let viewedStore = localStorage.getItem("view")
// let viewCurrent = document.querySelector(".current");
// viewCurrent.innerHTML = "No products viewed"

// if(viewedStore === null){
//     let view = []
// } else {
  
//     viewCurrent = `${view}`;
// }


// function viewBox(){
//     let current = document.createElement("img")
//     current.src = "Assets/Image/Product1.jpg"
//     document.querySelector('.current').appendChild(current)
//     view.push(current)
//     viewStore = JSON.stringify(view)
//     localStorage.setItem("view", current.value)
// }

// let serializedUsers = localStorage.getItem("users")
// let userH1 = document.querySelector("#loginName");

// if(serializedUsers === null){
//     users = []
// } else {
//     users = JSON.parse(serializedUsers)
//     userH1.innerHTML = `${users}`;
//     userH1.setAttribute('href', 'profile.html')
// }

// function store() {
//     let newUser = document.querySelector("#username");
//     let valueUser = newUser.value;
//     users.push(valueUser);
//     serializedUsers = JSON.stringify(users);
//     localStorage.setItem("users", serializedUsers);
//     window.location.href = "index.html";
// }