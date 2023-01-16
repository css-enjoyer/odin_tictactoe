const boxes = document.querySelectorAll(".box");


boxes.forEach(button => {
    button.addEventListener('click', function() {
      button.innerHTML = "✖";
    }); 
});

console.log("End");