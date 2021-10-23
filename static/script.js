function addNewWEField() {
    let newNode = document.createElement('input')
    newNode.classList.add('form-control');
    newNode.classList.add('wefield');
    newNode.classList.add("mt-2")
    newNode.setAttribute("rows", 3);
    newNode.setAttribute('placeholder', 'Enter here')

    let weOb = document.getElementById("we")
    let weAddButtonOb = document.getElementById("weAddButton")

    weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewAQField() {
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('eqfield');
    newNode.classList.add("mt-2")
    newNode.setAttribute("rows", 3);
    newNode.setAttribute('placeholder', 'Enter here')

    let aqOb = document.getElementById("aq")
    let aqAddButtonOb = document.getElementById("aqAddButton")

    aqOb.insertBefore(newNode, aqAddButtonOb);
}

function generateCV() {
    let namefield = document.getElementById("namefield").value;
    let nameT1 = document.getElementById("nameT1");
    nameT1.innerHTML = namefield;

    document.getElementById("nameT2").innerHTML = namefield;

    document.getElementById("contactT").innerHTML = document.getElementById("contactfield").value;

    

    document.getElementById("addressT1").innerHTML = document.getElementById("addressfield1").value;

    document.getElementById("usn").innerHTML = document.getElementById("addressfield").value;

    document.getElementById("addressT2").innerHTML = document.getElementById("addressfield2").value;

    document.getElementById("emT").innerHTML = document.getElementById("emfield").value;

    let wes = document.getElementsByClassName("wefield")

    let str = ''

    for (let e of wes) {
        str = str + `<li> ${e.value} </li>`;
    }

    document.getElementById("weT").innerHTML = str;

    let aqs = document.getElementsByClassName("eqfield")
    let str1 = ''
    for (let e of aqs) {
        str1 += `<li>${e.value}</li>`;
    }
    
    document.getElementById("aqT").innerHTML = str1;

    let file=document.getElementById("imgfield").files[0];

    console.log(file);

    let reader=new FileReader()
    reader.readAsDataURL(file);
    console.log(reader.result);

    reader.onloadend=function(){
        document.getElementById("imgT").src=reader.result;
    }


    document.getElementById('cv-form').style.display='none';
    document.getElementById('cv-template').style.display='block';
    
}

function printCV(){
    document.getElementById('pr').style.display='none';
    document.getElementById('l').style.display='none';
    document.getElementById('h').style.display='none';
    window.print();
    
}