
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
var arrowCompany = document.getElementsByClassName("sort__arrow-company")[0];
var arrowDate = document.getElementsByClassName("sort__arrow-date")[0];
var sortOrderName = "asc";
var sortOrderDate = "asc";
var sortOrderCompany = "asc";

function sortTableByName() {
    var table = document.getElementById("courseTable");
    var rows = table.getElementsByTagName("tr");
    var data = [];

    sortOrderName = (sortOrderName === "asc") ? "desc" : "asc";

    for (var i = 1; i < rows.length; i++) {
        var cells = rows[i].getElementsByTagName("td");
        var courseName = cells[0].innerText.trim();
        var company = cells[1].innerText.trim();
        var completionDate = cells[2].innerText.trim();
        var onclickData = cells[0].getAttribute("onclick");

        var courseData = { courseName: courseName, company: company, completionDate: completionDate, onclick: onclickData };
        data.push(courseData);
    }

    data.sort(function (a, b) {
        var order = (sortOrderName === "asc") ? 1 : -1;
        return order * a.courseName.localeCompare(b.courseName);
    });

    for (var i = 1; i < rows.length; i++) {
        var cells = rows[i].getElementsByTagName("td");
        cells[0].innerText = data[i - 1].courseName;
        cells[1].innerText = data[i - 1].company;
        cells[2].innerText = data[i - 1].completionDate;
        cells[0].setAttribute("onclick", data[i - 1].onclick);
    }

    updateSortIndicator(arrowName, sortOrderName);
    arrowDate.style.color = "#f1f2f2";
    arrowDate.style.textShadow = "none";
    arrowCompany.style.color = "#f1f2f2";
    arrowCompany.style.textShadow = "none";

}

function sortTableByCompany() {
    var table = document.getElementById("courseTable");
    var rows = table.getElementsByTagName("tr");
    var data = [];

    sortOrderCompany = (sortOrderCompany === "asc") ? "desc" : "asc";

    for (var i = 1; i < rows.length; i++) {
        var cells = rows[i].getElementsByTagName("td");
        var courseName = cells[0].innerText.trim();
        var company = cells[1].innerText.trim();
        var completionDate = cells[2].innerText.trim();
        var onclickData = cells[0].getAttribute("onclick");

        var courseData = { courseName: courseName, company: company, completionDate: completionDate, onclick: onclickData };
        data.push(courseData);
    }

    data.sort(function (a, b) {
        var order = (sortOrderCompany === "asc") ? 1 : -1;
        return order * a.company.localeCompare(b.company);
    });

    for (var i = 1; i < rows.length; i++) {
        var cells = rows[i].getElementsByTagName("td");
        cells[0].innerText = data[i - 1].courseName;
        cells[1].innerText = data[i - 1].company;
        cells[2].innerText = data[i - 1].completionDate;
        cells[0].setAttribute("onclick", data[i - 1].onclick);
    }

    updateSortIndicator(arrowCompany, sortOrderCompany);
    arrowDate.style.color = "#f1f2f2";
    arrowDate.style.textShadow = "none";
    arrowName.style.color = "#f1f2f2";
    arrowName.style.textShadow = "none";

}

function sortTableByDate() {
    var table = document.getElementById("courseTable");
    var rows = table.getElementsByTagName("tr");
    var data = [];


    sortOrderDate = (sortOrderDate === "asc") ? "desc" : "asc";

    for (var i = 1; i < rows.length; i++) {
        var cells = rows[i].getElementsByTagName("td");
        var courseName = cells[0].innerText.trim();
        var company = cells[1].innerText.trim();
        var completionDate = cells[2].innerText.trim();

        var parts = completionDate.split(".");
        var formattedDate = parts[1] + "/" + parts[0] + "/" + parts[2];

        var courseData = { courseName: courseName, company: company, completionDate: new Date(formattedDate), onclick: cells[0].getAttribute("onclick") };
        data.push(courseData);
    }

    data.sort(function (a, b) {
        var order = (sortOrderDate === "asc") ? 1 : -1;
        return order * (a.completionDate - b.completionDate);
    });

    for (var i = 1; i < rows.length; i++) {
        var cells = rows[i].getElementsByTagName("td");
        cells[0].innerText = data[i - 1].courseName;
        cells[1].innerText = data[i - 1].company;
        cells[2].innerText = data[i - 1].completionDate.toLocaleDateString();
        cells[0].setAttribute("onclick", data[i - 1].onclick);
    }

    updateSortIndicator(arrowDate, sortOrderDate);

    arrowName.style.color = "#f1f2f2";
    arrowName.style.textShadow = "none";
    arrowCompany.style.color = "#f1f2f2";
    arrowCompany.style.textShadow = "none";

}
function updateSortIndicator(arrowElement, sortOrder) {

    if (sortOrder === "asc") {
        arrowElement.innerHTML = "↓";
    } else {
        arrowElement.innerHTML = "↑";
    }


    arrowElement.style.color = "aqua";
    arrowElement.style.textShadow = "1px 0px 10px aqua";

}

window.onload = function () {
    if (window.innerWidth <= 768) {
        
        var navbarLink = document.querySelector('.course__link');
        if (navbarLink) {
            navbarLink.textContent = 'Courses';
        }
       
    }
};


var searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", function () {
    searchTable();
});
function searchTable() {
    var input, filter, table, tr, tdName,tdCompany, i, txtValue;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("courseTable");
    tr = table.getElementsByTagName("tr");

    for (i = 1; i < tr.length; i++) {
        tdName = tr[i].getElementsByTagName("td")[0];
        tdCompany = tr[i].getElementsByTagName("td")[1];
        if (tdName && tdCompany) {
            txtValueName = tdName.textContent || tdName.innerText;
            txtValueCompany = tdCompany.textContent || tdCompany.innerText;

            var combinedText = txtValueName + " " + txtValueCompany;

            if (combinedText.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}
