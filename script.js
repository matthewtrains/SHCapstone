document.addEventListener("DOMContentLoaded", function() {

  let modalDiv = document.getElementById("modalDiv");
  let classesDiv = document.getElementById("classes");
  let modal = document.getElementById("myModal");

  let modalHeader = document.getElementById("header");
  let modalDetails = document.getElementById("modalDetails");
  let detailsDiv = document.getElementById("details");


  classesDiv.innerHTML = "<h2>Please select a class above.</h2>";
  modalHeader.innerHTML = "";
  modalDetails.innerHTML = "";


  // Check if the screen size is below the mobile breakpoint (e.g., 768px)
  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  if (isMobile) {

    //Functionality for modal to close when touched outside box
    document.body.addEventListener('touchend', function(event) {
      if (!modal.contains(event.target)) {
        modal.style.display = "none";
      }
    });

    //Display modal
    modalDiv.style.visibility = 'visible'

    document.getElementById('it').addEventListener('click', itClick);
    document.getElementById('sdp').addEventListener('click', sdpClick);
    document.getElementById('clearAll').addEventListener('click', clearAllClick);

    function itClick() {


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
              const className = classNames[index];

              // Get the learning opportunities for the clicked class
              const learnings = data.programs.find(program => program.name === 'IT').classes[index].learnings;

              //set the innerHTML of the modal header to the class name
              modalHeader.innerHTML = `<h2 class="modal-text-color">${className}</h2>`;

              // Set the innerHTML of the modal header to the class name
              modalHeader.innerHTML = `<h2 class="modal-text-color">${className}</h2>`;

              // Set the innerHTML of the "modalDetails" div to the appropriate HTML string
              modalDetails.innerHTML = `<ul>${learnings.map(learning => `<h2><li>${learning}</li></h2>`).join('')}</ul>`;

              // Open the modal
              modal.style.display = "block";
            });
          });
        });
    }


    function sdpClick() {

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
              // Get the class name of the clicked class
              const className = classNames[index];

              // Set the innerHTML of the modal header to the class name
              modalHeader.innerHTML = `<h2 class="modal-text-color">${className}</h2>`;

              // Get the learning opportunities for the clicked class
              const learnings = data.programs.find(program => program.name === 'SDP').classes[index].learnings;

              // Set the innerHTML of the modal header to the class name
              modalHeader.innerHTML = `<h2 class="modal-text-color">${className}</h2>`;

              // Set the innerHTML of the "modalDetails" div to the appropriate HTML string
              modalDetails.innerHTML = `<ul>${learnings.map(learning => `<h2><li>${learning}</li></h2>`).join('')}</ul>`;

              // Open the modal
              modal.style.display = "block";
            });
          });
        });
    }

    function clearAllClick() {
      classesDiv.innerHTML = "<h2>Please select a class above.</h2>";
      modalDetails.innerHTML = "<h2>Click a class to view the learning opourtunities.</h2>";
    }

    document.getElementById('cheatSheets').addEventListener('click', cheats);

    function cheats() {
      window.location.href = "CheatSheets.html";
    }


  }

  else {

    document.getElementById('it').addEventListener('click', itClick);
    document.getElementById('sdp').addEventListener('click', sdpClick);
    document.getElementById('clearAll').addEventListener('click', clearAllClick);

    function itClick() {
      classesDiv.innerHTML = "";
      detailsDiv.innerHTML = "";

      // Load the JSON file
      fetch('Table.json')
        .then(response => response.json())
        .then(data => {
          // Get the class names
          const classNames = data.programs.find(program => program.name === 'IT').classes.map(cls => cls.name);

          const classesHtml = classNames.map(name => `<a class="link">${name}</a>`).join("");

          // Set the innerHTML of the "classes" div to the HTML string
          classesDiv.innerHTML = classesHtml;

          // Add a click event listener to each link element
          const linkElements = document.querySelectorAll(".link");
          linkElements.forEach((element, index) => {
            element.addEventListener("click", () => {
              const className = classNames[index]; // Get the class name of the clicked class


              // Get the learning opportunities for the clicked class
              const learnings = data.programs.find(program => program.name === 'IT').classes[index].learnings;

              // Set the innerHTML of the "details" div to the appropriate HTML string
              detailsDiv.innerHTML = `<ul>${learnings.map(learning => `<h2><li>${learning}</li></h2>`).join('')}</ul>`;

            });
          });
        });
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
              // Get the class name of the clicked class
              const className = classNames[index];

              // Get the learning opportunities for the clicked class
              const learnings = data.programs.find(program => program.name === 'SDP').classes[index].learnings;

              // Set the innerHTML of the "details" div to the appropriate HTML string
              detailsDiv.innerHTML = `<ul>${learnings.map(learning => `<h2><li>${learning}</li></h2>`).join('')}</ul>`;

            });
          });
        });
    }

    function clearAllClick() {
      classesDiv.innerHTML = "<h2>Please select a class above.</h2>";
      detailsDiv.innerHTML = "<h2>Click a class to view the learning opourtunities.</h2>";
    }

    document.getElementById('cheatSheets').addEventListener('click', cheats);

    function cheats() {
      window.location.href = "CheatSheets.html";
    }

  }

})






