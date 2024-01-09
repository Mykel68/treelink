/*********** ************
 * ********* Light and dark themes
 **************************/

// const menu = document.querySelector("#menu");
// const body = document.querySelector("#body");
// var h4 = document.querySelector("h4");
// var p = document.querySelector("p");

// menu.onclick = function () {
//   console.log("cllicked");
//   this.classList.toggle("bi-moon-fill");
//   body.classList.toggle("bg-dark");
//   h4.classList.toggle("text-white");
//   p.classList.toggle("text-white");
// };

const body = document.querySelector('body'),
    
    switchIcon = body.querySelector('#menu')

    switchIcon.addEventListener("click", ()=>{
        switchIcon.classList.toggle('bi-moon-fill')
        body.classList.toggle('dark')
    })
    

/*********** ************
 * ********* Chatbot Steps
 **************************/

var data = {
  chatinit: {
    title: [
      "Hello, Welcome <span class='emoji'> &#128075 </span>",
      "I am Micheal Olowookere",
      "How can i help you",
    ],
    options: [
      "Services",
      "Contact Me <span class='emoji fa fa-phone'></span> ",
    ],
  },
  services: {
    title: [
      "Am a Web developer and Graphics designer",
      "Do you need a website or a graphics work ",
      "Am available",
    ],
    options: ["Website", "Graphics"],
    url: {},
  },
  graphics: {
    title: [
      "I make good designs",
      "What kind of graphic work do you want?",
      "Please select category",
    ],
    options: ["Logo", "Fliers", "Mockup"],
    url: {},
  },
  website: {
    title: [
      "I can build fascinating website",
      "Join a team of developers to build a site",
    ],
    options: ["New Project", "Work in a collaboration project"],
    url: {},
  },
  new: {
    title: [
      "I can really help with that",
      "How do you want to raeach out to me ?",
    ],
    options: ["Facebook", "WhatsApp"],
    url: {},
  },
  work: {
    title: [
      "Really appreciate!!",
      "It's gonna be a pleasure",
      "How do you want to reach out to me ?",
    ],
    options: ["Facebook", "WhatsApp", "Github"],
    url: {},
  },
  contact: {
    title: [
      "Finding it hard reaching me ?",
      "Am more active on Facebook and WhatsApp",
    ],
    options: ["Facebook", "WhatsApp"],
    url: {},
  },
  facebook: {
    title: ["You can message me here on <a href='https://www.facebook.com/profile.php?id=61552120619708' >Facebook</a>"],
    options: ["Done"],
    url: {},
  },
  whatsapp: {
    title: ["You can message me here on <a href='#' >WhatsApp</a>"],
    options: ["Done"],
    url: {},
  },
  github: {
    title: ["My Github <a href='https://github.com/Mykel68/' >Github</a>"],
    options: ["Done"],
    url: {},
  },
  done: {
    title: ["You can also follow me on <a href='https://www.facebook.com/profile.php?id=61552348636303' >Facebook</a>"],
    options: ["Okay"],
    url: {},
  },
};

/*********** ************
 * ********* Chatbot Logic
 **************************/

document.getElementById("init").addEventListener("click", showChatBot);
var cbot = document.getElementById("chat-box");

var len1 = data.chatinit.title.length;

function showChatBot() {
  console.log(this.innerText);
  if (this.innerText == "Start Chat") {
    document.getElementById("test").style.display = "block";
    document.getElementById("init").innerText = "Close Chat";
    initChat();
  } else {
    location.reload();
  }
}

function initChat() {
  j = 0;
  cbot.innerHTML = "";
  for (var i = 0; i < len1; i++) {
    setTimeout(handleChat, i * 500);
  }
  setTimeout(function () {
    showOptions(data.chatinit.options);
  }, (len1 + 1) * 500);
}

var j = 0;
function handleChat() {
  console.log(j);
  var elm = document.createElement("p");
  elm.innerHTML = data.chatinit.title[j];
  elm.setAttribute("class", "msg");
  cbot.appendChild(elm);
  j++;
  handleScroll();
}

function showOptions(options) {
  for (var i = 0; i < options.length; i++) {
    var opt = document.createElement("span");
    var inp = "<div>" + options[i] + "</div>";
    opt.innerHTML = inp;
    opt.setAttribute("class", "opt");
    opt.addEventListener("click", handleOpt);
    cbot.appendChild(opt);
    handleScroll();
  }
}

function handleOpt() {
  console.log(this);
  var str = this.innerText;
  var textArr = str.split(" ");
  var findText = textArr[0];
  document.querySelectorAll(".opt").forEach((el) => {
    el.remove();
  });
  var elm = document.createElement("p");
  elm.setAttribute("class", "test");
  var sp = '<span class="rep">' + findText + "</span>";
  elm.innerHTML = sp;
  cbot.appendChild(elm);

  console.log(findText.toLowerCase());
  var tempObj = data[findText.toLowerCase()];
  handleResults(tempObj.title, tempObj.options, tempObj.url);
}

function handleResults(title, options, url) {
  for (let i = 0; i < options.length; i++) {
    var elm = document.createElement("p");
    elm.innerHTML = title[i];
    elm.setAttribute("class", "msg");
    cbot.appendChild(elm);
  }

  const isObjectEmpty = (url) => {
    return JSON.stringify(url) === "{}";
  };

  if (isObjectEmpty(url) == true) {
    console.log("having some options");
    showOptions(options);
  } else {
    console.log("end result");
    handleOptions(options, url);
  }
}

function handleOptions(options, url) {
  for (var i = 0; i < options.length; i++) {
    var opt = document.createElement("span");
    var inp =
      '<a class="m-link" href="' + url.link[i] + ">" + options[i] + "</a>";
    opt.innerHTML = inp;
    opt.setAttribute("class", "opt");
    cbot.appendChild(opt);
  }
  var opt = document.createElement("span");
  var inp = '<a class="m-link" href="' + url.more + '">' + "See more</a>";

  const isObjectEmpty = (url) => {
    return JSON.stringify(url) === "{}";
  };

  console.log(isObjectEmpty(url));
  console.log(url);
  opt.innerHTML = inp;
  opt.setAttribute("class", "opt link");
  handleScroll();
}

function handleScroll() {
  var elem = document.getElementById("chat-box");
  elem.scrollTop = elem.scrollHeight;
}
