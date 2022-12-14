//console.log("foreground test");
let inject_body = document.querySelector("body");
let availableButotns = document.querySelector("#site_content > div.pagination");
if (availableButotns) availableButotns = availableButotns.children;
let prev = null;
let next = null;

for (const el of availableButotns) {
    if (el.title === "Wstecz") {
        prev = el.href;
        // console.log(prev);
    }
    if (el.title === "Dalej") {
        next = el.href;
    }
}

if (next) {
    //Next divw
    const divNext = document.createElement("div");
    divNext.className = "pepe next";
    divNext.innerHTML = "<span>Następny</span><span>(" + next.split("/")[next.split("/").length - 1] + ")</span>";
    divNext.addEventListener("click", () => redirectClick(next));
    inject_body.appendChild(divNext);
}

//previous div
if (prev) {
    const divPrevious = document.createElement("div");
    divPrevious.className = "pepe previous";
    divPrevious.innerHTML = "<span>Poprzedni</span><span>(" + prev.split("/")[prev.split("/").length - 1] + ")</span>";
    divPrevious.addEventListener("click", () => redirectClick(prev));
    inject_body.appendChild(divPrevious);
}
function redirectClick(url) {
    window.location.href = url;
}
