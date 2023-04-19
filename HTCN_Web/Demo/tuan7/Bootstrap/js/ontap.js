$(document).ready(function () {
    let dem=1;
    function ktraten()
    {
        let ten;
        ten=$("#txtname").val();
        if(ten=="")
        {
            $("#spanten").text("Tên không được để trống");
            return false;
        }
        else
        {
            let pattern=/^[A-Z][a-z]{2,30}$/;
            if(pattern.test(ten))
            {
                $("#spanten").text("");
                return true;
            }
            else
            {
                $("#spanten").text("Ten phai bat dau bang chu hoa");
                return false;
            }
           
        }       
    }

    $('#txtname').blur(function (e) { 
        ktraten();
    });

    $("#btndk").click(function (e) { 
        // alert("Đăng ký thành công");
        let ten, ngay,  sdt,hinhthanhtoan,phuthu;
        ten=$("#txtname").val();
        ngay=$("#txtngay").val();
        phuthu=$("#lsthanhly").val();
        sdt=$("#txtsdt").val();
        hinhthanhtoan=$("input[type='radio']:checked").val();
        let newrow="<tr><td><input type='Checkbox'></td><td>"+dem+"</td><td>"+ten+"</td><td>"+ngay+"</td><td>"+sdt+"</td><td>"+phuthu+"</td><td>"+hinhthanhtoan+"</td></tr>";
        $("#tbkinfo").append(newrow);
        dem++;
        $("#spansl").text(dem-1);
    });
    $("#lsthanhly").change(function (e) { 
        let phuthu;
        phuthu=$("#lsthanhly").val();
        $("#txtgiapt").val(phuthu);
        
    });
});