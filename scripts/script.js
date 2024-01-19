
function openCertificate(imageSrc) {
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
    certificateImage.style.maxWidth = "765px";
    certificateImage.style.maxHeight = "560px";

    modal.appendChild(certificateImage);

    document.body.appendChild(modal);

    modal.onclick = function () {
        modal.style.display = "none";
    };
}

var arrowName = document.getElementsByClassName("sort__arrow-name")[0];
var arrowDate = document.getElementsByClassName("sort__arrow-date")[0];

function sortTableByDate() {
    var table = document.getElementById("courseTable");
    var rows = table.getElementsByTagName("tr");
    var data = [];

    // Збираємо дані з таблиці в масив
    for (var i = 1; i < rows.length; i++) {
        var cells = rows[i].getElementsByTagName("td");
        var courseName = cells[0].innerText.trim();
        var completionDate = cells[1].innerText.trim();

        // Змінюємо формат дати на "MM/DD/YYYY"
        var parts = completionDate.split(".");
        var formattedDate = parts[1] + "/" + parts[0] + "/" + parts[2];

        var courseData = { courseName: courseName, completionDate: new Date(formattedDate) };
        data.push(courseData);
    }

    // Сортуємо масив за датою
    data.sort(function(a, b) {
        return a.completionDate - b.completionDate;
    });

    // Перезаписуємо дані в таблицю
    for (var i = 1; i < rows.length; i++) {
        var cells = rows[i].getElementsByTagName("td");
        cells[0].innerText = data[i - 1].courseName;
        cells[1].innerText = data[i - 1].completionDate.toLocaleDateString(); // Повертаємо у форматі тексту
    }
    // Задаємо стиль для стрілки сортування за датою
    arrowDate.style.color = "aqua";
    arrowDate.style.textShadow = "1px 0px 10px aqua";
    // Скидаємо колір для стрілки сортування за іменем
    arrowName.style.color = "";
    arrowName.style.textShadow = "";
    
}
function sortTableByName() {
    var table = document.getElementById("courseTable");
    var rows = table.getElementsByTagName("tr");
    var data = [];

    // Збираємо дані з таблиці в масив
    for (var i = 1; i < rows.length; i++) {
        var cells = rows[i].getElementsByTagName("td");
        var courseName = cells[0].innerText.trim();
        var completionDate = cells[1].innerText.trim();

        var courseData = { courseName: courseName, completionDate: completionDate };
        data.push(courseData);
    }

    // Сортуємо масив за іменем курсу
    data.sort(function(a, b) {
        return a.courseName.localeCompare(b.courseName);
    });

    // Перезаписуємо дані в таблицю
    for (var i = 1; i < rows.length; i++) {
        var cells = rows[i].getElementsByTagName("td");
        cells[0].innerText = data[i - 1].courseName;
        cells[1].innerText = data[i - 1].completionDate;
    }
     // Задаємо стиль для стрілки сортування за іменем
     arrowName.style.color = "aqua";
     arrowName.style.textShadow = "1px 0px 10px aqua";
     // Скидаємо колір для стрілки сортування за датою
     arrowDate.style.color = "";
     arrowDate.style.textShadow = "";
}


