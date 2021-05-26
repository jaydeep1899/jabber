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

function getPin()
{

}
