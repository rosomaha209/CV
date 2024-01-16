
function increaseSize() {
    var button = document.querySelector('.button');
    
    
    
    button.textContent = 'Congratulations on choosing a course';
    
    
    
    
    setTimeout(function() {
        button.textContent = 'Choose a course';
        
    }, 3000);
    setTimeout(function() {
        window.location.href = 'Courses.html';
        
    }, 3000);
    
}