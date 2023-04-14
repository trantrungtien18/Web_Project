function checkName() {
  let ho = document.getElementById("txtHo").value;
  let ten = document.getElementById("txtName").value;
  let patHo = /^([A-Z][a-z]*\s{1}){1,}[A-Z][a-z]*$/;
  let patTen = /^[A-Z][a-z]*$/;

  if (!patHo.test(ho)) {
    document.getElementById("erName").innerHTML =
      "(*) In hoa cac chu cai dau!!";
    return false;
  } else {
    document.getElementById("erName").innerHTML = "";
    if (!patTen.test(ten)) {
      document.getElementById("erName").innerHTML =
        "(*) In hoa cac chu cai dau!!";
    } else {
      document.getElementById("erName").innerHTML = "";
    }
    return true;
  }
}

function checkMail() {
  let mail = document.getElementById("txtMail").value;
  let patMail = /^\w+(\.\w+)*@\w+(\.-\w+)*(\.\w{2,3})+$/;

  if (!patMail.test(mail)) {
    document.getElementById("erMail").innerHTML = "* Sai cu phap email";
    return false;
  } else {
    document.getElementById("erMail").innerHTML = "";
    return true;
  }
}

function checkRMail() {
  let reMail = document.getElementById("txtReMail").value;
  let mail = document.getElementById("txtMail").value;

  if (reMail != mail) {
    document.getElementById("erRMail").innerHTML = "* Sai email";
    return false;
  } else {
    document.getElementById("erRMail").innerHTML = "";
    return true;
  }
}

function checkPass() {
  let pass = document.getElementById("txtPass").value;
  let patPass = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d\s]{6,}$/;

  if (!patPass.test(pass)) {
    document.getElementById("erPass").innerHTML =
      "* Mat khau phai co ky tu chu, so va it nhat 6 ky tu";
    return false;
  } else {
    document.getElementById("erPass").innerHTML = "";
    return true;
  }
}

function checkYob() {
  let yob = document.getElementById("txtYob").value;
  if (yob >= 2002) {
    document.getElementById("erY").innerHTML = "* Nam sinh phai < 2002";
    return false;
  } else {
    document.getElementById("erY").innerHTML = "";
    return true;
  }
}

let stt = 1;
function register() {
  // lay du lieu thuc thi: chuyen trang khac, luu table
  let ho = document.getElementById("txtHo").value;
  let ten = document.getElementById("txtName").value;
  let yob = document.getElementById("txtYob").value;
  let ml = document.getElementById("txtMail").value;
  let name = ho + " " + ten;
  if (checkName()) {
    if (checkMail()) {
      if (checkPass()) {
        if (checkYob()) {
          // let win = window.open('ketqua.html');
          localStorage.setItem("name", ten);
          let trnew =
            "<tr><td>" +
            stt +
            "</td><td>" +
            name +
            "</td><td>" +
            ml +
            "</td><td>" +
            yob +
            "</td></tr>";
          document.getElementById("tbl").innerHTML += trnew;
          stt++;
        }
      }
    }
  }
}
