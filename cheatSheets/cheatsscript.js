document.addEventListener("DOMContentLoaded", function() {
  let tableBody = document.getElementById("table-body");

  // Add click event listeners to all anchor elements
  const anchorElements = document.querySelectorAll('a[id]');
  anchorElements.forEach(anchor => {
    anchor.addEventListener('click', function() {
      const anchorId = anchor.getAttribute('id'); // Get the id attribute of the clicked anchor element

      // Load the JSON file
      fetch('Table.js')
        .then(response => response.json())
        .then(data => {
          console.log(data)
          const section = data[anchorId]; // Use anchorId to access the corresponding section
          console.log(anchorId)

          // Populate the table body with the topics from the section
          if (section) {
            // Clear the table body before populating it with new data
            tableBody.innerHTML = "";
            section.forEach(topic => {
              let row = tableBody.insertRow();
              let cell1 = row.insertCell(0);
              let cell2 = row.insertCell(1);

              cell1.textContent = topic.learn;
              cell2.textContent = topic.description;
            });
          }
        });
    });
  });
});
