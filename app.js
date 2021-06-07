function query() {
  var x = document.getElementById("query-sel").value;
  if (x == 'Pincode') {
    var y = document.getElementsByClassName("show");
    if (y.length > 0) {
      y[0].classList.toggle('show');
      document.getElementById("dis-btn").style.display = 'none';
    }
    document.getElementsByClassName("pin-hid")[0].classList.toggle("show");
    document.getElementById("pin-btn").style.display = 'inline';
  } else if (x == 'District') {
    var y = document.getElementsByClassName("show");
    if (y.length > 0) {
      y[0].classList.toggle('show');
      document.getElementById("pin-btn").style.display = 'none';
    }
    document.getElementsByClassName("dis-hid")[0].classList.toggle("show");
    document.getElementById("dis-btn").style.display = 'inline';
  }
}
Object.size = function(obj) {
  var size = 0,
    key;
  for (key in obj) {
    if (obj.hasOwnProperty(key)) size++;
  }
  return size;
};

function souper(object) {
  temp = "";
  var size = Object.size(object.centers);
  for (var i = 0; i < size; i++) {
    temp += `<div class="dib">`
    temp += `<input class="che" type="checkbox" onchange = "checkform()" value="${object.centers[i].center_id}" id="${object.centers[i].center_id}">`
    temp += `<label class="lab" for="${object.centers[i].center_id}">${object.centers[i].name}
        (Address: ${object.centers[i].address}, Block: ${object.centers[i].block_name})<p>Age: ${object.centers[i].sessions[0].min_age_limit}</p></label></div>`
  }
  return temp;
}

function getPin() {
  var p = document.getElementById("Pincode").value;
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  today = dd + '-' + mm + '-' + yyyy;
  var url = `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=${p}&date=${today}`;

  fetch(url)
    .then(response => response.json())
    .then(json => {
      var radr = JSON.stringify(json);
      var j = JSON.parse(radr);
      var temp = souper(j);
      document.getElementById('tags').innerHTML = temp;
    });
}

function getDis() {
  var p = document.getElementById("district-query").value.split(" ")[0];
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  today = dd + '-' + mm + '-' + yyyy;
  var url = `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=${p}&date=${today}`;

  fetch(url)
    .then(response => response.json())
    .then(json => {
      var radr = JSON.stringify(json);
      var j = JSON.parse(radr);
      var temp = souper(j);
      document.getElementById('tags').innerHTML = temp;
    });
}

function totalchecked(f) {
  var ch = f.children;
  var temp = 0;
  for (var i = 0; i < Object.size(ch); i++) {
    if (ch[i].children[0].checked)
      temp++;
  }
  return temp;
}

function checkform() {
  var f = document.forms["theform"].children;
  var total = totalchecked(f[8]);
  if (f[0].value != "" && f[1].value != "" && total > 0) {
    document.getElementById("submit").removeAttribute("disabled");
  } else {
    document.getElementById("submit").setAttribute("disabled", "disabled");
  }
}
