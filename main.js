/**
 * Tinh Luong NV (Bài tập 1)
 */
 var btnTinhLuong = document.getElementById("btnTinhLuong");
 btnTinhLuong.onclick = function (){
   //Đàu vào : lấy thong tin user nhập
   const LUONG_NGAY = 100000;
   var soNgayLam = document.getElementById("soNgayLam").value * 1;
 
   //Xử Lý :
   var tongLuong = LUONG_NGAY * soNgayLam;
 
   //format VN
   var currentFormat = new Intl.NumberFormat("Vn-vn");
 
   var ketQua = "<p class = 'alert alert-success'>Tổng lương là:" + currentFormat.format(tongLuong) + "VND </p>";
   //Đầu ra
   document.getElementById ("showInfoLuongNV").innerHTML = ketQua;
 }

 /**
  * Tính giá trị trung bình Bài tập 2
  */
 document.getElementById("btnSubmit1").onclick = function (){


    //Đàu Vào : Lấy Thông tin User
    var so1 = document.getElementById ("so1").value * 1;
    var so2 = document.getElementById ("so2").value * 1;
    var so3 = document.getElementById ("so3").value * 1;
    var so4 = document.getElementById ("so4").value * 1;
    var so5 = document.getElementById ("so5").value * 1;
  
    //Xử Lý :
    var trungBinh = (so1 + so2 + so3 + so4 + so5) / 5;
  
    //Đầu ra:
    var ketQua = "<p> Giá Trị trung bình của 5 số là :" + trungBinh + "</p>"
    document.getElementById ("showInfoTrungBinh").innerHTML = ketQua;
   }

   /**
  * Quy đổi tiền ( bài tập 3)
  */
  document.getElementById("btnQuyDoiTien").onclick = function (){

    //Đầu vào : lấy Thông tin User
    var usd = document.getElementById ("usd").value * 1;
    

    // Xư Lý :
    var QuyDoiTien = usd * 23500 ;

    var currentFormat = new Intl.NumberFormat ("VN-vn");

    //Đầu ra:
    var ketQua = "<p> Giá tiền là :" + currentFormat.format(QuyDoiTien) + " VND</p>";

    document.getElementById ("showInfoQuyDoiTien").innerHTML = ketQua;
  }

  /**
   * tính DT vs CV ( bài tập 4))
   */
   document.getElementById("btnTinhHCN").onclick = function (){

    //Đầu vào : lấy thông tin user
    var chieuDai = document.getElementById ("chieuDai").value * 1 ;
    var chieuRong = document.getElementById ("chieuRong").value * 1 ;

    //Xử Lý :
    var DienTich = chieuDai * chieuRong;
    var ChuVi = (chieuDai + chieuRong ) * 2 ;

    //Kết Quả :
   var ketQua = "<p> Diện tích là :......" + DienTich + "</p>";
    ketQua += "<p> chu vi là :......" + ChuVi + "</p>";

    document.getElementById ("showInfoHCN").innerHTML = ketQua;
   }

   /**
    * Tổng ký số (bài tập 5)
    */
    document.getElementById("btnTongKySo").onclick = function (){
        //Đầu vào : lấy thông tin user
        var kyso = document.getElementById ("kyso").value * 1 ;
  
        //Xử Lý :
        // math.floor : làm tròn số 
        var hangChuc = Math.floor(kyso / 10) ;
        var hangDV = kyso % 10;
        var tong = hangChuc + hangDV ;
  
        //Kết Quả :
        var ketQua = "<p> Tổng 2 ký số là :......" + tong + "</p>";
        document.getElementById ("showInfoKySo").innerHTML = ketQua;
      }