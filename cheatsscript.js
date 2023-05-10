document.addEventListener("DOMContentLoaded", function() {

  document.getElementById('back').addEventListener('click', backClick);

  function backClick() {

    history.back();

  }

})