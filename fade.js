var pointer = 0


function infade() {
    element = document.getElementById('0');
    var op = 0.1;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 30);
}

function changeSourceUp(){
    
    image = ["bike.PNG","bike2.JPG","bike3.JPG","bike4.JPG"];
    e = document.getElementById('0')
    i = pointer
    i = (i+1)%3;
    e.src = image[i];
    pointer = pointer + 1

}

function changeSourceDown(){
    image = ["bike.PNG","bike2.JPG","bike3.JPG","bike4.JPG"];
    e = document.getElementById('0');
    
    i = pointer
    i = (i-1)%3;
    if (i < 0){
        i = i*(-1);
    }

    e.src = image[i];
    pointer = pointer - 1


}