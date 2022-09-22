// import orgs from "./orgs.js"
// import repos from "./repos.js"


(function(){
    'use strict'

function generateHTML(data){
const repoSource = document.getElementById("repos-template").innerHTML;
const repoTemplate = Handlebars.compile(repoSource);
const repoHtml = repoTemplate({repos:data[0]})

document.querySelector(".repo-list").insertAdjacentHTML("afterbegin", repoHtml);


const orgsSource = document.getElementById("orgs-template").innerHTML;
const orgsTemplate = Handlebars.compile(orgsSource);
const orgsHtml = orgsTemplate({orgs:data[1]})

document.querySelector(".organizations").insertAdjacentHTML("afterbegin", orgsHtml);

const userSource = document.getElementById("user-template").innerHTML;
const userTemplate = Handlebars.compile(userSource);
const userHtml = userTemplate({user:data[2]})

document.querySelector(".pic-info").insertAdjacentHTML("afterbegin", userHtml);



// fetch API





}
Promise.all([
    fetch(`https://api.github.com/users/chawthorne02/repos`),
    fetch(`https://api.github.com/users/chawthorne02/orgs`),
    fetch('https://api.github.com/users/chawthorne02')
])

.then(function(responses){
    console.log('response', responses);

    return Promise.all(responses.map(function(response){
        return response.json();
    }));
})

.then(function(json){
    console.log('json', json);
    generateHTML(json);
})

.catch(function(error){
    console.error('Error', error);
})






})();
