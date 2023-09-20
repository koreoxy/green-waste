const warningDiv = document.getElementById('warning');
const warningMessage = `<span>Data telah terkirim</span>`;
const form = document.getElementById('form');

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

function isNumber(zipCode) {
  if (isNaN(zipCode) || zipCode === '') {
    alert('Masukkan angka pada kolom zip code');
    return false;
  }

  return true;
}

function checkboxIsChecked() {
  const status = document.getElementById('status').checked;

  if (!status) {
    alert('Pilih checkbox');
    return false;
  }

  return true;
}

function checkForm(formData) {
  if (formData.name === '' || formData.city === '' || formData.email === '') {
    alert('Data tidak boleh kosong');
    return false;
  }

  return true;
}

function validateFormData(fromData) {
  if (FormData && isNumber(fromData.zipCode) && checkboxIsChecked()) {
    return true;
  }
  return false;
}

function submit() {
  if (validateFormData(handleGetFormData()) == false) {
    document.getElementById('warning').textContent =
      'Periksa form anda sekali lagi';
  } else {
    document.getElementById('warning').textContent = '';
    document.getElementById('warning').textContent = 'Succes';
    form.reset();
  }
}

document.getElementById('submit-form').addEventListener('click', (event) => {
  event.preventDefault();
  submit();
});
