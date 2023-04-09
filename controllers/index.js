import { Student, Employee, Customer, ListPerson } from "../models";

const personList = new ListPerson();

const student = new Student(
  "John Doe",
  "123 Main St",
  "001",
  "john.doe@email.com",
  80,
  90,
  85
);
const employee = new Employee(
  "Jane Smith",
  "456 High St",
  "002",
  "jane.smith@email.com",
  22,
  100
);
const customer = new Customer(
  "Bob Johnson",
  "789 Elm St",
  "003",
  "bob.johnson@email.com",
  "XYZ Corp",
  500,
  4
);

personList.addPerson(student);
personList.addPerson(employee);
personList.addPerson(customer);

console.log("Before removing person:");
console.log(personList.persons);

personList.removePerson("002");

console.log("After removing person:");
console.log(personList.persons);

const updatedStudent = new Student(
  "John Doe",
  "123 Main St",
  "001",
  "john.doe@yahoo.com",
  85,
  95,
  90
);
personList.updatePerson("001", updatedStudent);

console.log("After updating person:");
console.log(personList.persons);

personList.sortByFullName();

console.log("After sorting by full name:");
console.log(personList.persons);

const students = personList.filterByType(Student);

console.log("Students:");
console.log(students);

const employees = personList.filterByType(Employee);

console.log("Employees:");
console.log(employees);
const getElement = (selector) => document.querySelector(selector);
const addClass = (element, className) => element.classList.add(className);
const removeClass = (element, className) => element.classList.remove(className);

document.addEventListener("DOMContentLoaded", () => {
  const loaiNguoiDung = getElement("#loaiNguoiDung");
  const diemToanGroup = getElement("#diemToan-group");
  const diemLyGroup = getElement("#diemLy-group");
  const diemHoaGroup = getElement("#diemHoa-group");
  const soNgayLamViecGroup = getElement("#soNgayLamViec-group");
  const luongTheoNgayGroup = getElement("#luongTheoNgay-group");
  const tenCongTyGroup = getElement("#tenCongTy-group");
  const triGiaHoaDonGroup = getElement("#triGiaHoaDon-group");
  const danhGiaGroup = getElement("#danhGia-group");

  const tableSinhVien = getElement("#table-sinhVien");
  const tableNhanVien = getElement("#table-nhanVien");
  const tableKhachHang = getElement("#table-khachHang");

  const hideElements = (elements) =>
    elements.forEach((element) => addClass(element, "d-none"));
  const showElements = (elements) =>
    elements.forEach((element) => removeClass(element, "d-none"));

  const hideAllTables = () => {
    hideElements([tableSinhVien, tableNhanVien, tableKhachHang]);
  };

  const hideAllGroups = () => {
    hideElements([
      diemToanGroup,
      diemLyGroup,
      diemHoaGroup,
      soNgayLamViecGroup,
      luongTheoNgayGroup,
      tenCongTyGroup,
      triGiaHoaDonGroup,
      danhGiaGroup,
    ]);
  };

  hideAllTables();
  showElements([tableSinhVien]);
  hideAllGroups();
  showElements([diemToanGroup, diemLyGroup, diemHoaGroup]);

  loaiNguoiDung.addEventListener("change", () => {
    const selectedValue = loaiNguoiDung.value;

    hideAllTables();
    hideAllGroups();

    if (selectedValue === "sinhVien") {
      showElements([tableSinhVien, diemToanGroup, diemLyGroup, diemHoaGroup]);
    } else if (selectedValue === "nhanVien") {
      showElements([tableNhanVien, soNgayLamViecGroup, luongTheoNgayGroup]);
    } else {
      showElements([
        tableKhachHang,
        tenCongTyGroup,
        triGiaHoaDonGroup,
        danhGiaGroup,
      ]);
    }
  });
});
