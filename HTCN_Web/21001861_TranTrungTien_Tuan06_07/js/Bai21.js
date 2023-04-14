function getTotal() {
  let sl1 = document.getElementById("txtSL1").value;
  let sl2 = document.getElementById("txtSL2").value;
  let sl3 = document.getElementById("txtSL3").value;
  let sl4 = document.getElementById("txtSL4").value;
  let sl5 = document.getElementById("txtSL5").value;

  let kq1 = eval(sl1 * 20000);
  let kq2 = eval(sl2 * 40000);
  let kq3 = eval(sl3 * 30000);
  let kq4 = eval(sl4 * 50000);
  let kq5 = eval(sl5 * 90000);

  document.getElementById("result").innerHTML = eval(
    kq1 + kq2 + kq3 + kq4 + kq5
  );
}
