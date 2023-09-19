// function handleGetFormData() {
//   let name = document.getElementById('name').value;
//   let city = document.getElementById('city').value;
//   let email = document.getElementById('email').value;
//   let zipCode = document.getElementById('zip-code').value;
//   let status = document.getElementById('status').checked;

//   return {
//     name,
//     city,
//     email,
//     zipCode,
//     status,
//   };
// }

// function isNumber() {
//   let number = handleGetFormData().zipCode;

//   if (isNaN(number)) {
//     alert('Masukan angka pada kolom zip code');
//   } else {
//     return true;
//   }
// }

// function checkboxIsChecked() {
//   let status = handleGetFormData().status;

//   if (status == false) {
//     alert('pilih checkbox');
//   } else {
//     return true;
//   }
// }

// function checkForm() {
//   if (
//     handleGetFormData().name == '' &&
//     handleGetFormData().city == '' &&
//     handleGetFormData().email == ''
//   ) {
//     alert('Data tidak boleh kosong');
//   } else {
//     console.log(handleGetFormData());
//   }
// }

// function validateForm(event) {
//   event.preventDefault();
//   if (checkForm() && isNumber() && checkboxIsChecked() === '') {
//     return false;
//   } else {
//     console.log(checkForm(), isNumber());
//     checkboxIsChecked();
//   }
// }

// function submit() {
//   let btnSubmit = document.getElementById('submit-form');
//   btnSubmit.addEventListener('click', validateForm);
// }

// submit();
const warningDiv = document.getElementById('warning');
const warningMessage = `<span>Data telah terkirim</span>`;

function handleGetFormData() {
  const name = document.getElementById('name').value;
  const city = document.getElementById('city').value;
  const email = document.getElementById('email').value;
  const zipCode = document.getElementById('zip-code').value;
  const status = document.getElementById('status').checked;

  return {
    name,
    city,
    email,
    zipCode,
    status,
  };
}

function isNumber() {
  const zipCode = handleGetFormData().zipCode;

  if (isNaN(zipCode) || zipCode === '') {
    alert('Masukkan angka pada kolom zip code');
    return false;
  }

  return true;
}

function checkboxIsChecked() {
  const status = handleGetFormData().status;

  if (!status) {
    alert('Pilih checkbox');
    return false;
  }

  return true;
}

function checkForm() {
  const formData = handleGetFormData();

  if (formData.name === '' || formData.city === '' || formData.email === '') {
    alert('Data tidak boleh kosong');
    return false;
  }

  return true;
}

function validateForm(event) {
  event.preventDefault();
  if (checkForm() && isNumber() && checkboxIsChecked()) {
    console.log(handleGetFormData());
    warningDiv.innerHTML = warningMessage;
  } else {
    console.log('Validasi gagal');
  }
}

function submit() {
  const btnSubmit = document.getElementById('submit-form');
  btnSubmit.addEventListener('click', validateForm);
}

submit();
