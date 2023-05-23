document.addEventListener("DOMContentLoaded", function() {

  anchorName = document.getElementByName(this.name)
  
  // Load the JSON file
  fetch('Cheats.json')
    .then(response => response.json())
    .then(data => {
      // Loop through the learnings array and create a new row and cells for each learning
      data.cheats.find(cheats => cheats.name = anchorName.forEach((learningObj) => {
        const newRow = document.createElement('tr');
        const learningCell = document.createElement('td');
        learningCell.innerText = learningObj.learning;
        const descriptionCell = document.createElement('td');
        descriptionCell.innerText = learningObj.description;
        newRow.appendChild(learningCell);
        newRow.appendChild(descriptionCell);
        learning.appendChild(newRow);
      });
    });
});
