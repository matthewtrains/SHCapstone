document.getElementById('it').addEventListener('click', itClick);
document.getElementById('sdp').addEventListener('click', sdpClick);
const classesDiv = document.getElementById("classes");
const detailsDiv = document.getElementById("details");


function itClick() {
  classesDiv.innerHTML = "";

  const testData = [
    "How",
    "Ethical Hacking",
    "Cloud and Devops",
    "VOIP",
    "Capstone Project",
    "Webserver Admin",
    "San and desater recovery",
    "Test",
    "Test",
    "Test",
    "Test",
    "Test",
    "Test"
  ];

  // Convert the test data into an HTML string
  const classesHtml = testData.map(text => `<a class="link" target="_blank">${text}</a>`).join("");

  // Set the innerHTML of the "classes" div to the HTML string
  classesDiv.innerHTML = classesHtml;

  // Add a click event listener to each detail element
  const detailElements = document.querySelectorAll(".link");
  detailElements.forEach((element, index) => {
    element.addEventListener("click", () => {
      // Set the innerHTML of the "details" div to the appropriate HTML string
      detailsDiv.innerHTML = `<h2>${testData[index]}</h2><p>Details for ${testData[index]}</p>`;
    });
  });
}

function sdpClick() {
  classesDiv.innerHTML = "";

  const testData = [
    "This",
    "Is",
    "To",
    "Test",
    "This",
    "Function",
    "This",
    "Is",
    "To",
    "Test",
    "This",
    "Function",
    "This",
    "Is",
    "To",
    "Test",
    "This",
    "Function",
    "This",
    "Is",
    "To",
    "Test",
    "This",
    "Function"
  ];

  // Convert the test data into an HTML string
  const classesHtml = testData.map(text => `<a class="link" target="_blank">${text}</a>`).join("");

  // Set the innerHTML of the "classes" div to the HTML string
  classesDiv.innerHTML = classesHtml;

  // Add a click event listener to each detail element
  const detailElements = document.querySelectorAll(".link");
  detailElements.forEach((element, index) => {
    element.addEventListener("click", () => {
      // Set the innerHTML of the "details" div to the appropriate HTML string
      detailsDiv.innerHTML = `<h2>${testData[index]}</h2><p>Details for ${testData[index]}</p>`;
    });
  });
}
