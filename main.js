import orgs from "./orgs.js"
import repos from "./repos.js"

const repoSource = document.getElementById("repos-template").innerHTML;
const repoTemplate = Handlebars.compile(repoSource);
const repoHtml = repoTemplate({repos})

document.querySelector(".repo-list").insertAdjacentHTML("afterbegin", repoHtml);


const orgsSource = document.getElementById("orgs-template").innerHTML;
const orgsTemplate = Handlebars.compile(orgsSource);
const orgsHtml = orgsTemplate({orgs})

document.querySelector(".organizations").insertAdjacentHTML("afterbegin", orgsHtml);
