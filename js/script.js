function showModule(clicked_id){
	document.getElementById('moduleAddUser').style.display = 'none';
	document.getElementById('moduleConsultManual').style.display = 'none';
	document.getElementById('moduleDeleteUser').style.display = 'none';
	document.getElementById('moduleConsultFAQ').style.display = 'none';
	document.getElementById(clicked_id).style.display = 'block';
}
function addedUser(){
	alert("Usuario Agregado");
	document.getElementById('moduleAddUser').style.display = 'block';
	showModule('moduleAddUser');
	//document.getElementById('formAddUser').submit();
}

function formulario(f) {
	if (f.formAddUserRFC.value   == '') { 
		alert ('El nombre esta vacío'); 
		f.nombre.focus();
		return false; 
	}
	if (f.email.value  == '') { 
		alert ('El email esta vacío');
		f.email.focus(); 
		return false; 
	} 
	document.getElementById('moduleAddUser').style.display = 'block';
	return true; 
} 
function obtainRFC(){
	var rfcToModify;
	var radioButtonsName = document.getElementsByName("editUser");
	for(var i=0;i<radioButtonsName.length;i++)
        {
            if(radioButtonsName[i].checked)
                rfcToModify=radioButtonsName[i].value;
        }
	document.getElementById('formModifyUserRFC').value = rfcToModify;
	var idApellido = 'Apellidos'+rfcToModify;
	var idName = 'Name'+rfcToModify;
	var idPasswd = 'Passwd'+rfcToModify;

	var valorApellido = document.getElementById(idApellido).textContent;
	var valueName = document.getElementById(idName).textContent;
	var valuePasswd = document.getElementById(idPasswd).textContent;

	document.getElementById('formModifyUserName').value = valueName;
	document.getElementById('formModifyUserLastName').value = valorApellido;
	document.getElementById('formModifyUserPasswd').value = valuePasswd;
	document.getElementById('formAddUserTurn').value= strTurn;
	

}
