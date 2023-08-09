class Student{// Pascal cale
    name;
    age;
    constructor(nameInput, ageInput) {
        this.name = nameInput;
        this.age = ageInput;
    }
    study(){
        return this.name + 'dang hoc' //là một method ( phương thức cảu student - k cần từ khóa function
    }
    getName(){ // getter: lấy ra dữ liệu
        return this.name;
    }
    setName(nameInput){ // setter: sửa dữ liệu
        this.name = nameInput;
    }
}
// student: là một lớp miêu tả cho các đối tượng học viên
// constructor: hàm tạo, dùng để khởi tạo các đối tương

// let sinhVien = new Student('lam', 25)
// alert(sinhVien.name)// cách truy xuất thuộc tính(đặc điểm) của đối tượng
// alert(sinhVien.study()) // phương thức truy suất của mô đối tượng
let sinhVieen2 = new Student('tien anh', 25);
// alert(sinhVieen2.name);
// alert(sinhVieen2.study())
alert(sinhVieen2.getName());
sinhVieen2.setName('linh');
alert(sinhVieen2.getName())