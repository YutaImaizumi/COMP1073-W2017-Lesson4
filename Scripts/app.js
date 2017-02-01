/* javascript lives here */


// WEEK 1　基本

console.log("App Started");

var MainContentDiv = document.getElementById("MainContentDiv");
// console.log(MainContentDiv.innerHTML);
var MainContentDivInnerHTML = MainContentDiv.textContent;
console.log(MainContentDivInnerHTML)





// WEEK3 テキスト出力

// declare / initialize firstHeading variable
// firstHeading variable creates a link (referene) to the H1 Element
var firstHeading = document.getElementById("firstHeading");

// I can use my firstHeading variable as if it IS the Element
// DON"T USE THIS ↓　POP UPモーダルウインドウができちゃうよ！"
//window.alert(firstHeading.textContent);

//これもだめ、へんなところに文字がしゅつりょくされちゃう↓
//document.write(firstHeading.textContent);

// but This is OK,
console.log(firstHeading.textConsole);
firstHeading.textContent = "COMP1073 - Lesson 3";

// console.info("Here is the info");
// console.error("An error occured");
// console.debug("Debugging information"); とかもできるよ～！！！

firstHeading.style.color = "#0000ff";
firstHeading.style.fontweight = "700";
firstHeading.style.fontStyle = "italic";
firstHeading.style.opacity = "0.5";

// Three steps for injecting content onto your page
// Step 1 - create a referen e to an Element (Reference variable)
var FirstParagraph = document.getElementById("FirstParagraph");
// Step 2 - create a variable that contains yourr content (content variable)
var myContent = "It was a sunny day in Florida. It felt great. I love the sun.";
// Step 3 - assign the variable with your content to the textContent property of the reference variable
FirstParagraph.textContent = myContent;

var SecondParagraph = document.getElementById("SecondParagraph");
var myHTMLContent = "<h2>Second Heading</h2>" + " <p>This is an inner paragraph to the Second Paragraph</p>";
SecondParagraph.innerHTML = myHTMLContent;






// WEEK2　ボタン

// create a reference to the button on the page (index.html)
var clickMeButton = document.getElementById("clickMeButton");

// add an event listener - for the click event and call the Click function
clickMeButton.addEventListener("click", Click);

// click function - used as an event handler
function Click() {
 console.log("clicked!");
}
