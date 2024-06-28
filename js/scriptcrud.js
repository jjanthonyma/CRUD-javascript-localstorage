function validateForm(){
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var address = document.getElementById('address').value;
    var email = document.getElementById('email').value;

    if(name == ""){
        alert("name is requerid");
        return false
    }    if(age <=0){
        alert("name is requerid");
        return false
    }    if(address == ""){
        alert("name is requerid");
        return false
    }    if(email == ""){
        alert("name is requerid");
        return false
    }return true;
}
function readData(){
    var listPeople;

    if(localStorage.getItem('listPeople')== null){
        listPeople = [];
    }
    else{
        listPeople = JSON.parse(localStorage.getItem('listPeople'));
    
    }

    var html = "";

    listPeople.forEach(function(element,index) {
        html+="<tr>";
        html+="<td>"+element.name+"</td>";
        html+="<td>"+element.age+"</td>";
        html+="<td>"+element.address+"</td>";
        html+="<td>"+element.email+"</td>";
        html+='<td><button onclick="deleteData('+index+')" class="btn btn-danger col-sm-3">Delete</button> &nbsp; &nbsp;<button onclick="updateData('+index+')" class="btn btn-warning">Edit</button></td>';
        html+="</tr>";
        
    });

    document.querySelector('#crudTable tbody').innerHTML = html;

}

document.onload = readData();


function addData(){
    if(validateForm() == true){
        var name = document.getElementById('name').value;
        var age = document.getElementById('age').value;
        var address = document.getElementById('address').value;
        var email = document.getElementById('email').value;
        
        var listPeople;

        if(localStorage.getItem('listPeople')==null){
            listPeople=[];
        }else{
            listPeople = JSON.parse(localStorage.getItem('listPeople'));
        }
        listPeople.push({
            name: name,
            age: age,
            address: address,
            email: email,
        });
        localStorage.setItem('listPeople', JSON.stringify(listPeople));

        readData();

        document.getElementById('name').value = "";
        document.getElementById('age').value = "";
        document.getElementById('address').value = "";
        document.getElementById('email').value = "";
    }
}


function deleteData(index){
    var listPeople;

    if(localStorage.getItem('listPeople')==null){
        listPeople=[];
    }else{
        listPeople = JSON.parse(localStorage.getItem('listPeople'));
    }
    listPeople.splice(index,1);
    localStorage.setItem('listPeople', JSON.stringify(listPeople));
    readData();
}

function updateData(index){
    document.getElementById('btnAdd').style.display = 'none';
    document.getElementById('btnUpdate').style.display = 'block';

    var listPeople;

    if(localStorage.getItem('listPeople')==null){
        listPeople=[];
    }else{
        listPeople = JSON.parse(localStorage.getItem('listPeople'));
    }

    document.getElementById('name').value = listPeople[index].name;
    document.getElementById('age').value = listPeople[index].age;
    document.getElementById('address').value = listPeople[index].address;
    document.getElementById('email').value = listPeople[index].email;
    
    document.querySelector('#btnUpdate').onclick = function(){
        if(validateForm() == true){
            listPeople[index].name = document.getElementById('name').value;
            listPeople[index].age = document.getElementById('age').value;
            listPeople[index].address = document.getElementById('address').value;
            listPeople[index].email = document.getElementById('email').value;

            localStorage.setItem('listPeople', JSON.stringify(listPeople));
            readData();

            document.getElementById('name').value = "";
            document.getElementById('age').value = "";
            document.getElementById('address').value = "";
            document.getElementById('email').value = "";

            document.getElementById('btnAdd').style.display = 'block';
            document.getElementById('btnUpdate').style.display = 'none';
            

        }
    };

}