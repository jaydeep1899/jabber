function query()
{
  var x = document.getElementById("query-sel").value;
  if(x == 'Pincode')
  {
    var y = document.getElementsByClassName("show");
    if(y.length > 0)
    {
        y[0].classList.toggle('show');
        document.getElementById("dis-btn").style.display = 'none';
    }
    document.getElementsByClassName("pin-hid")[0].classList.toggle("show");
    document.getElementById("pin-btn").style.display = 'inline';
  }
  else if(x == 'District'){
    var y = document.getElementsByClassName("show");
    if(y.length > 0)
    {
        y[0].classList.toggle('show');
        document.getElementById("pin-btn").style.display = 'none';
    }
    document.getElementsByClassName("dis-hid")[0].classList.toggle("show");
    document.getElementById("dis-btn").style.display = 'inline';
  }
}
function souper(object){
    temp = "";

}
function getPin(){
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
      document.getElementById('tags').innerHTML = `<div class="dib">
<input class="che" type="checkbox" value="">
  <label class="">
    Default checkbox
  </label>
</div>
<hr>
<div class="dib">
  <input class="che" type="checkbox" value="">
  <label class="">
    Checked checkbox
  </label>
</div><hr><div class="dib">
  <input class="che" type="checkbox" value="">
  <label class="">
    Checked checkbox
  </label>
</div><hr>`;
    });
}
