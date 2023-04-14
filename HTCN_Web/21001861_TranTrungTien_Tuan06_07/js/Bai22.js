function checkName() {
  let name = document.getElementById("txtName").value;
  let patName = /^([A-Z][a-z]*\s{1}){1,}[A-Z][a-z]*$/;

  if (!patName.test(name)) {
    document.getElementById("errName").innerHTML = "* In hoa cac ky tu dau!!";
    return false;
  } else {
    document.getElementById("errName").innerHTML = "";
    return true;
  }
}

function checkAcc() {
  let acc = document.getElementById("txtAcc").value;
  let patAcc = /^\S+$/;

  if (!patAcc.test(acc)) {
    document.getElementById("errAcc").innerHTML =
      "(*) Khong duoc co khoang trang!!";
    return false;
  } else {
    document.getElementById("errAcc").innerHTML = "(*)";
    return true;
  }
}

function checkRePass() {
  let pass = document.getElementById("txtPass").value;
  let rePass = document.getElementById("txtRePass").value;

  if (rePass != pass) {
    document.getElementById("errRePass").innerHTML = "(*) Sai mat khau";
    return false;
  } else {
    document.getElementById("errRePass").innerHTML = "(*)";
    return true;
  }
}
