const itBtn = document.getElementById('it')
const sdpBtn = document.getElementById('sdp')
const classesDiv = document.getElementById("classes");

itBtn.addEventListener()

function itClick() {
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
}

function sdpClick() {

}
