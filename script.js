var container = document.getElementById("your-fortune");
var button = document.getElementById("btn");

btn.addEventListener("click", function(){
var ourRequest = new XMLHttpRequest();
ourRequest.open("GET", "http://github.com/Peterson22000/peterson22000.github.io/blob/master/fortunes.json");
ourRequest.onload = function(){
    var ourData = json.parse(ourRequest.responseText);
    renderHTML(ourData);
};
ourRequest.send();
});

function renderHTML(data){
    var htmlString = "this is a test";
 container.insertAdjacentHTML("beforeend", htmlString);
}


