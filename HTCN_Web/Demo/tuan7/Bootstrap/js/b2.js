$(document).ready(function () {
    let dem=1;
    $("#btn").click(function (e) { 
        let pos, name, fullname, mail;
        pos=$("#lst").val();
        name=$("#txtname").val();
        fullname=$("#txtfullname").val();

        mail=$("#txtemail").val();
        let rownew="<tr><td><input type='checkbox'> </td><td>"+dem+"</><td>"+pos+"</td><td>"+name+"</td><td>"+fullname+"</td><td>"+mail+"</td></tr>";
        $("#tblinfo").append(rownew);
        dem++;

    });
});