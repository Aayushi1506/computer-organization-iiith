

  function chBackcolor() {
     document.getElementById(nav1).style.background = "red";
  }

  function myFunction1() {
  var x =Number(document.getElementById("decno").value);
  var y =Number(document.getElementById("bitno").value);
  if(x=="" || y==""){
  window.alert("enter the numbers first");
    return false;
  }
  document.getElementById("lower_part").style.visibility="visible";
  document.getElementById("input1").value = x + y ;
  document.getElementById("input2").value = x - y;
  document.getElementById("input3").value = x * y;
  document.getElementById("input4").value = x/y;
  document.getElementById("table1").rows[0].col[0].Value = "2";
  }

  function myFunction2() {
    document.getElementById("lower_part").style.visibility="hidden";
    document.getElementById("decno").value = "";
      document.getElementById("bitno").value = "";
  document.getElementById("input1").value = "";
  document.getElementById("input2").value = "";
  document.getElementById("input3").value = "";
  document.getElementById("input4").value = "";
  }

 function openTab(tabName) {
  var i;
  var x = document.getElementsByClassName("tab");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "block";
  }



