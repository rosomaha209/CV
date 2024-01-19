
function openCertificate(imageSrc) {
    console.log("openCertificate")
    var modal = document.createElement("div");
    modal.style.position = "fixed";
    modal.style.top = "0";
    modal.style.left = "0";
    modal.style.width = "100%";
    modal.style.height = "100%";
    modal.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    modal.style.display = "flex";
    modal.style.alignItems = "center";
    modal.style.justifyContent = "center";
    modal.style.zIndex = 999;

    var certificateImage = document.createElement("img");
    certificateImage.src = imageSrc;
    certificateImage.alt = "Certificate";
    certificateImage.style.maxWidth = "100%";
    certificateImage.style.maxHeight = "100%";

    modal.appendChild(certificateImage);

    document.body.appendChild(modal);

    modal.onclick = function () {
        modal.style.display = "none";
    };
}



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
