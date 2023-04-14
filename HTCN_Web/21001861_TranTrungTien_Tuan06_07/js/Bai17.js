function checkAccName() {
  let accName = document.getElementById("txtAccName").value;
  let patAccName = /^\w+$/;

  if (!patAccName.test(accName)) {
    document.getElementById("errAccName").innerHTML =
      "* Sai cu phap ten dang nhap!";
    return false;
  } else {
    document.getElementById("errAccName").innerHTML = "*";
    return true;
  }
}

function checkPass() {
  let pass = document.getElementById("txtPass").value;
  let patPass = /^[A-Z]+\d+[a-z]+$/;

  if (!patPass.test(pass)) {
    document.getElementById("errPass").innerHTML =
      "* Ky tu dau phai la chu hoa va ky tu cuoi cung la chu thuong!";
    return false;
  } else {
    document.getElementById("errPass").innerHTML = "*";
    return true;
  }
}

function checkRePass() {
  let rePass = document.getElementById("txtRePass").value;
  let pass = document.getElementById("txtPass").value;

  if (rePass != pass) {
    document.getElementById("errRePass").innerHTML =
      "* Mat khau nhap lai khong khop!";
    return false;
  } else {
    document.getElementById("errRePass").innerHTML = "*";
    return true;
  }
}

function checkName() {
  let name = document.getElementById("txtName").value;
  let patName = /^([A-Z][a-z]*\s{1}){1,}[A-Z][a-z]*$/;

  if (!patName.test(name)) {
    document.getElementById("errName").innerHTML =
      "* In hoa ky tu dau moi chu!";
    return false;
  } else {
    document.getElementById("errName").innerHTML = "*";
    return true;
  }
}

function checkPhoneNum() {
  let phoneNum = document.getElementById("txtNum").value;
  let patPhoneNum = /^\d{9,10}$/;

  if (!patPhoneNum.test(phoneNum)) {
    document.getElementById("errNum").innerHTML = "* SDT bat buoc tu 9-10 so";
    return false;
  } else {
    document.getElementById("errNum").innerHTML = "*";
    return true;
  }
}

function checkMail() {
  let mail = document.getElementById("txtMail").value;
  let patMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (!patMail.test(mail)) {
    document.getElementById("errMail").innerHTML = "* Sai cu phap email";
    return false;
  } else {
    document.getElementById("errMail").innerHTML = "*";
    return true;
  }
}
let stt = 1;

function register() {
  // lay du lieu thuc thi: chuyen trang khac, luu table
  let ten = document.getElementById("txtName").value;
  let dob = document.getElementById("dob").value;
  let sex;
  if (document.getElementById("sex1").checked) {
    sex = document.getElementById("sex1").value;
  } else {
    sex = document.getElementById("sex2").value;
  }
  let dc = document.getElementById("txtAddress").value;
  let sdt = document.getElementById("txtNum").value;
  let ml = document.getElementById("txtMail").value;
  if (checkAccName()) {
    if (checkPass()) {
      if (checkName()) {
        if (checkPhoneNum()) {
          if (checkMail()) {
            // let win = window.open('ketqua.html');
            localStorage.setItem("name", ten);
            let trnew =
              "<tr><td>" +
              stt +
              "</td><td>" +
              ten +
              "</td><td>" +
              dob +
              "</td><td>" +
              sex +
              "</td><td>" +
              dc +
              "</td><td>" +
              sdt +
              "</td><td>" +
              ml +
              "</td></tr>";
            document.getElementById("tbl").innerHTML += trnew;
            stt++;
          }
        }
      }
    }
  }
}
