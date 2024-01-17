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

    document.addEventListener("click",function (){
        hoverImage.style.left = 100 + "px";
        hoverImage.style.top = 100  + "px";
        
    });
});