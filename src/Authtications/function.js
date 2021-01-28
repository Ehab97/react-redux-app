export function checkLetter(name) {
     const letters = /^[A-Za-z]+$/;
     if (name.match(letters)) {
          return true;
     }
     return false;
}

export function checkePassword(password) {
     const passw = /(?=.*\d)(?=.*[A-Z])[a-zA-Z0-9].{8,}/;
     if (password.match(passw)) {
          return true;
     }
     return false;
}

export function ValidateEmail(mail) {
     const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
     if (mail.match(mailformat)) {
          return true;
     }
     return false;
}

export function validatePhone(phone) {
     const phoneFormat = /(010|011|012|015)\d{8}/;
     if (phone.match(phoneFormat)) {
          return true;
     }
     return false;
}

export function isExistPhone(number) {
     for (var i = 0; i < this.$store.getters.getUsers.length; i++) {
          if (this.$store.getters.getUsers[i].phone === number) {
               return true;
          }
     }
     return false;
}

export function newId(){
     return parseInt(new Date().getTime().toString().concat(performance.now()),10)
}