document.addEventListener("DOMContentLoaded", function() {
  document.getElementById('it').addEventListener('click', itClick);
  document.getElementById('sdp').addEventListener('click', sdpClick);
  document.getElementById('clearAll').addEventListener('click', clearAllClick);

  classesDiv = document.getElementById("classes");
  detailsDiv = document.getElementById("details");

  function itClick() {

    classesDiv.innerHTML = "";
    detailsDiv.innerHTML = "";

    // Load the JSON file
    fetch('Table.json')
      .then(response => response.json())
      .then(data => {
        // Get the class names
        const classNames = data.programs.find(program => program.name === 'IT').classes.map(cls => cls.name);

        // Convert the classNames into an HTML string
        const classesHtml = classNames.map(name => `<a class="link">${name}</a>`).join("");

        // Set the innerHTML of the "classes" div to the HTML string
        classesDiv.innerHTML = classesHtml;

        // Add a click event listener to each link element
        const linkElements = document.querySelectorAll(".link");
        linkElements.forEach((element, index) => {
          element.addEventListener("click", () => {
            // Get the learning opportunities for the clicked class
            const learnings = data.programs.find(program => program.name === 'IT').classes[index].learnings;

            // Set the innerHTML of the "details" div to the appropriate HTML string
            detailsDiv.innerHTML = `<h2>${classNames[index]}</h2><ul>${learnings.map(learning => `<h2><li>${learning}</li></h2>`).join('')}</ul>`;

          });
        });
      })
  }

  function sdpClick() {
    classesDiv.innerHTML = "";
    detailsDiv.innerHTML = "";

    // Load the JSON file
    fetch('Table.json')
      .then(response => response.json())
      .then(data => {
        // Get the class names
        const classNames = data.programs.find(program => program.name === 'SDP').classes.map(cls => cls.name);

        // Convert the classNames into an HTML string
        const classesHtml = classNames.map(name => `<a class="link">${name}</a>`).join("");

        // Set the innerHTML of the "classes" div to the HTML string
        classesDiv.innerHTML = classesHtml;

        // Add a click event listener to each link element
        const linkElements = document.querySelectorAll(".link");
        linkElements.forEach((element, index) => {
          element.addEventListener("click", () => {
            // Get the learning opportunities for the clicked class
            const learnings = data.programs.find(program => program.name === 'IT').classes[index].learnings;

            // Set the innerHTML of the "details" div to the appropriate HTML string
            detailsDiv.innerHTML = `<h2>${classNames[index]}</h2><ul>${learnings.map(learning => `<h2><li>${learning}</li></h2>`).join('')}</ul>`;

          });
        });
      })
  }

  function clearAllClick() {
    classesDiv.innerHTML = "<h2>Please select a class above.</h2>";
    detailsDiv.innerHTML = "<h2>Click a class to view the learning opourtunities.</h2>";
  }


  document.getElementById('cheatSheets').addEventListener('click', cheats);

  function cheats() {
    window.location.href = "CheatSheets.html";
  }

})






