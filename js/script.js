
// script teks menulis sendiri
const txtElement = ['Wan  ', 'Muhammad  ', 'Adil  '];
let count = 0;
let txtIndex = 0;
let currentTxt = '';
let words = '';

(function ngetik(){

    if(count == txtElement.length){
        count = 0;
    }

    currentTxt = txtElement[count];

    words = currentTxt.slice(0, ++txtIndex);
    document.querySelector('.efek-ngetik').textContent = words;

    if(words.length == currentTxt.length){
        count++;
        txtIndex = 0;
    }

    setTimeout(ngetik, 250);

})();

// menambah class navbarDark di navbar scroll
const header = document.querySelector('.navbar');
console.log(header)
window.onscroll = function() {
    const top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}
// script collapse navbar setelah menekan di devices kecil
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')

navLinks.forEach((l) => {
    l.addEventListener('click', () => { new bootstrap.Collapse(menuToggle).toggle() })
});

// script function untuk pengisian form
const form = document.querySelector("form[name='contact-form']");
const nameInput = document.querySelector("input[name='name']");
const emailInput = document.querySelector("input[name='email']");
const phoneInput = document.querySelector("input[name='phone']");
const subjectInput = document.querySelector("select[name='subject']");
const messageInput = document.querySelector("textarea[name='message']");

nameInput.isValid = () => !!nameInput.value;
emailInput.isValid = () => isValidEmail(emailInput.value);
phoneInput.isValid = () => isValidPhone(phoneInput.value);
subjectInput.isValid = () => !!subjectInput.value;
messageInput.isValid = () => !!messageInput.value;

const inputFields = [nameInput, emailInput, phoneInput, messageInput, subjectInput];

const isValidEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const isValidPhone = (phone) => {
  const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  return re.test(String(phone).toLowerCase());
};

  

   let shouldValidate = false;
   let isFormValid = false;

function validateInputs () {
  if (!shouldValidate) return;

  isFormValid = true;
  inputFields.forEach((input) => {
    input.classList.remove("invalid");
    input.nextElementSibling.classList.add("hide");

    if (!input.isValid()) {
      input.classList.add("invalid");
      isFormValid = false;
      input.nextElementSibling.classList.remove("hide");
    }
  });
  
};



form.addEventListener("submit", (e) => {
  shouldValidate = true;
  e.preventDefault();
  validateInputs();
  if (isFormValid) {
    alert('Pesan anda berhasil terkirim!');
    // TODO: DO AJAX REQUEST
  }else{
    alert('Cek form kembali, pastikan isinya benar dan tidak di kosongi!');
  }
  
});

inputFields.forEach((input) => input.addEventListener("input", validateInputs));

// script event untuk footer sosial media

function confirmAction1(){
  var result = confirm("Apakah Anda ingin ke Facebook ?");
  if (result == false){
      event.preventDefault();
  }

};

function confirmAction2(){
  var result = confirm("Apakah Anda ingin ke Instagram ?");
  if (result == false){
      event.preventDefault();
  }

};

function confirmAction3(){
  var result = confirm("Apakah Anda ingin ke Twitter ?");
  if (result == false){
      event.preventDefault();
  }

};

function confirmAction4(){
  var result = confirm("Apakah Anda ingin ke LinkedIn ?");
  if (result == false){
      event.preventDefault();
  }

};

function confirmAction5(){
  var result = confirm("Apakah Anda ingin ke Twitch ?");
  if (result == false){
      event.preventDefault();
  }

};

// script objek dan fungsi built-in
function renderTime(){
  // Date
  var mydate = new Date();
  var year = mydate.getYear();
      if(year < 1000){
        year +=1900
      }
  var day = mydate.getDay();
  var month = mydate.getMonth();
  var daym = mydate.getDate();
  var dayarray = new Array("Minggu,","Senin,","Selasa,","Rabu,","Kamis,","Jumat","Sabtu,");
  var montharray = new Array("Januari","Februari","Maret","April","Mei","Juni","Juli","Augustus","September","Oktober","November","Desember");

  // Time
  var currentTime = new Date();
  var h = currentTime.getHours();
  var m = currentTime.getMinutes();
  var s = currentTime.getSeconds();
      if(h == 24){
        h = 0;
      } else if(h > 12){
        h = h - 0;
      }

      if(h < 10){
        h = "0" + h;
      }

      if(m < 10){
        m = "0" + m;
      }

      if(s < 10){
        s = "0" + s;
      }

      var myClock = document.getElementById("clockDisplay");
      myClock.textContent = "" +dayarray[day]+ " " +daym+ " " +montharray[month]+ " " +year+ " | " +h+ " : " +m+ " : " +s;
      myClock.innerText = "" +dayarray[day]+ " " +daym+ " " +montharray[month]+ " " +year+ " | " +h+ " : " +m+ " : " +s;

      setTimeout("renderTime()", 1000);

}
renderTime();




