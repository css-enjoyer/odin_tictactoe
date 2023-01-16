const boxes = document.querySelectorAll(".box");


boxes.forEach(button => {
    button.addEventListener('click', function() {
      console.log("Test");
    }); 
});

console.log("End");