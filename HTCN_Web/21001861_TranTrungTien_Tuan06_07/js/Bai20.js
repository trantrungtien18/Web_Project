let list = [];

function addList() {
  let name = document.getElementById("txtName").value;
  let clss = document.getElementById("selectorClass").value;
  let crs = document.getElementById("selectorCourse").value;
  let ca;
  if (document.getElementById("loai1").checked) {
    ca = document.getElementById("loai1").value;
  } else {
    ca = document.getElementById("loai2").value;
  }

  let person = {
    Name: name,
    Class: clss,
    Course: crs,  
    Category: ca,
  };

  document.getElementById("hoTen").innerHTML += name + "\n";
  document.getElementById("lop").innerHTML += clss + "\n";
  document.getElementById("monHoc").innerHTML += crs + "\n";
  document.getElementById("loai").innerHTML += ca + "\n";

  list.push(person);
  console.log(this.list);
}
