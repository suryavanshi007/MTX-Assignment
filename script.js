var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["RollNo"] = document.getElementById("RollNo").value;
    formData["Branch"] = document.getElementById("Branch").value;
    formData["Marks"] = document.getElementById("Marks").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("StudentApp").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.RollNo;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.Branch;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.Marks;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)"><button type="button" class="btn btn-success">Edit</button></a>
                       <a onClick="onDelete(this)"><button type="button" class="btn btn-danger">Delete</button></a>`;
}

function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("RollNo").value = "";
    document.getElementById("Branch").value = "";
    document.getElementById("Marks").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("RollNo").value = selectedRow.cells[1].innerHTML;
    document.getElementById("Branch").value = selectedRow.cells[2].innerHTML;
    document.getElementById("Marks").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.RollNo;
    selectedRow.cells[2].innerHTML = formData.Branch;
    selectedRow.cells[3].innerHTML = formData.Marks;
}

function onDelete(td) {
    if (confirm('Do you want to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("StudentApp").deleteRow(row.rowIndex);
        resetForm();
    }
}
function searchFunName(){
    let filter = document.getElementById('myInput').value.toUpperCase();
    let mytable = document.getElementById('StudentApp');
    let tr = mytable.getElementsByTagName('tr');

    for(var i=0; i<tr.length; i++){
        let td = tr[i].getElementsByTagName('td')[0];

        if(td){
            let textvalue = td.textContent || td.innerHTML;

            if(textvalue.toUpperCase().indexOf(filter)>-1){
                tr[i].style.display="";
  
            }
            else{
                tr[i].style.display="none";
            }
        }

    }
}

function searchFunRoll(){
    let filter1 = document.getElementById('myInput1').value;
    let mytable1 = document.getElementById('StudentApp');
    let tr1 = mytable1.getElementsByTagName('tr');

    for(var i=0; i<tr1.length; i++){
        let td1 = tr1[i].getElementsByTagName('td')[1];

        if(td1){
            let textvalue = td1.textContent || td1.innerHTML;

            if(textvalue.indexOf(filter1)>-1){
                tr1[i].style.display="";
  
            }
            else{
                tr1[i].style.display="none";
            }
        }

    }
}

function searchFunBranch(){
    let filter2 = document.getElementById('myInput2').value.toUpperCase();
    let mytable2 = document.getElementById('StudentApp');
    let tr2 = mytable2.getElementsByTagName('tr');

    for(var i=0; i<tr2.length; i++){
        let td2 = tr2[i].getElementsByTagName('td')[2];

        if(td2){
            let textvalue = td2.textContent || td2.innerHTML;

            if(textvalue.toUpperCase().indexOf(filter2)>-1){
                tr2[i].style.display="";
  
            }
            else{
                tr2[i].style.display="none";
            }
        }

    }
}

function validate() {
    isValid = true;
    if (document.getElementById("fullName").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}