class Validation {
  constructor() {
    this.isEmpty = (value, idError, name) => {
      if (value.trim() === "") {
        document.getElementById(
          idError
        ).innerHTML = `${name} không được bỏ trống !`;
        return false;
      }
      document.getElementById(idError).innerHTML = "";
      return true;
    };

    this.isString = (value, idError, name) => {
      const regexLetter = /^[A-Z a-z]+$/;
      if (regexLetter.test(value)) {
        document.getElementById(idError).innerHTML = "";
        return true;
      }
      document.getElementById(
        idError
      ).innerHTML = `${name} tất cả phải là ký tự`;
      return false;
    };

    this.isEmail = (value, idError, name) => {
      const regexEmail =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      if (regexEmail.test(value)) {
        document.getElementById(idError).innerHTML = "";
        return true;
      }
      document.getElementById(idError).innerHTML = `${name} không hợp lệ!`;
      return false;
    };

    this.isNumber = (value, idError, name, allowEmpty = false) => {
      const regexNumber = /^[0-9]+$/;
      if (allowEmpty && value.trim() === "") {
        document.getElementById(idError).innerHTML = "";
        return true;
      }
      if (regexNumber.test(value)) {
        document.getElementById(idError).innerHTML = "";
        return true;
      }
      document.getElementById(idError).innerHTML = `${name} không hợp lệ!`;
      return false;
    };

    this.isLength = (value, idError, name, minLength, maxLength) => {
      if (value.length > maxLength || value.length < minLength) {
        document.getElementById(
          idError
        ).innerHTML = `${name} từ ${minLength} đến ${maxLength} ký tự !`;
        return false;
      }
      document.getElementById(idError).innerHTML = "";
      return true;
    };

    this.isValue = (
      value,
      idError,
      name,
      minValue,
      maxValue,
      allowEmpty = false
    ) => {
      const regexNumber = /^[0-9.]+$/;
      if (allowEmpty && value.trim() === "") {
        document.getElementById(idError).innerHTML = "";
        return true;
      }
      if (regexNumber.test(value)) {
        if (Number(value) < minValue || Number(value) > maxValue) {
          document.getElementById(
            idError
          ).innerHTML = `${name} giá trị từ ${minValue} đến ${maxValue} !`;
          return false;
        }
        document.getElementById(idError).innerHTML = "";
        return true;
      }
      document.getElementById(idError).innerHTML = `${name} không hợp lệ!`;
      return false;
    };
  }
}
