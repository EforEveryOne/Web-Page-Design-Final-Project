// window.alert('Our JavaScript is linked!');

let allPars = document.querySelectorAll('p');
alert(allPars); 


// let colorChange = document.querySelectorAll('p');

allPars[1].style.color = 'blue';
allPars[1].innerText = "I got changed"
allPars[2].style.color = 'purple';
// allPars[2].fontSize = 50px;
allPars[3].style.color = 'black';
allPars[4].style.color = 'red';




for(let i = 0; i < allPars.length; i++){
    allPars[i].addEventListener("click", function (e) {
       this.style.color = 'blue';
       
    })
}