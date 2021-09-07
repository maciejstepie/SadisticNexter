let inject_body = document.querySelector("body");
//body.style.backgroundColor = "green";

const div = document.createElement("div");
div.className = "pepe";
div.innerHTML = "Następny";
console.log(document.querySelector("#site_content > div.pagination"));

inject_body.appendChild(div);
