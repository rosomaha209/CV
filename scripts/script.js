document.addEventListener("DOMContentLoaded", function () {
    const listItems = document.querySelectorAll(".course__list-item");
    const hoverImage = document.getElementById("hoverImg");
    hoverImage.style.display = "none";
   
    
    listItems.forEach((item) => {
        item.addEventListener("mouseover", function (event) {
            const imagePath = item.getAttribute("data-image");
            hoverImage.src = imagePath;

            
            const mouseX = event.clientX;
            const mouseY = event.clientY;

            
            hoverImage.style.left = mouseX  + "px";
            hoverImage.style.top = mouseY  + "px";
            

            hoverImage.style.display = "block";

            
            
        });

        item.addEventListener("mouseout", function () {
            hoverImage.style.display = "none";
        });
    });

    document.addEventListener("mousemove", function (event) {
        
        const mouseX = event.clientX;
        const mouseY = event.clientY;

        hoverImage.style.left = mouseX + "px";
        hoverImage.style.top = mouseY  + "px";
        
    });
   // Отримання елементів DOM
   var dropdownBtn = document.getElementById('dropdown-btn');
   var tableContainer = document.querySelector('.table-container');

   // Додавання обробника подій для кнопки
   dropdownBtn.addEventListener('click', function() {
    tableContainer.style.maxHeight = (tableContainer.style.maxHeight === '0px') ? tableContainer.scrollHeight + 'px' : '0';
   });
    
  
  
  
   
});
