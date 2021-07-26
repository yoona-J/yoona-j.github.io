// Regular expression from W3C HTML5.2 input specification:
// https://www.w3.org/TR/html/sec-forms.html#email-state-typeemail
var emailRegExp = "https://script.google.com/macros/s/AKfycbwKkLtHln86WNkkUypK-AdeKXY4XMbm9GtCbtjMfsmIAfGMbdZwVaioNhu0GZYkHr6X/exec";
const nodemailer = require ("nodemailer");

new Vue({
  // root node
  el: "#app",
  // the instance state
  data: function() {
    return {
      name: "",
      email: [] ,
      features: ["Reactivity", "Encapsulation", "Data Binding"],
      selection: {
        member: "0",
        framework: "vue",
        features: []
      },
      message: {
        text: `Dear Mr. President,\n...`,
        maxlength: 255
      },
      submitted: false
    };
  },
  methods: {
    // submit form handler
    submit: function() {
      this.submitted = true;
    },
    // validate by type and value
    validate: function(type, value) {
      if (type === "email") {
        this.email.valid = this.isEmail(value) ? true : false;
      }
    },
    // check for valid email adress
    isEmail: function(value) {
      return emailRegExp.test(value);
    },
    // check or uncheck all
    checkAll: function(event) {
      this.selection.features = event.target.checked ? this.features : [];
    }
  },
  watch: {
    // watching nested property
    "email.value": function(value) {
      this.validate("email", value);
    }
  },

  transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'master@artudent.co.kr',  // gmail 계정 아이디를 입력
      pass: '210401asdf!@'          // gmail 계정의 비밀번호를 입력
    }
  }),

  mailOptions = {
    from: 'master@artudent.co.kr',    // 발송 메일 주소 (위에서 작성한 gmail 계정 아이디)
    to: email ,                     // 수신 메일 주소
    subject: '2021 서울 일러스트 페어 참가 신청 관련 메일 수신',   // 제목
    text: 'That was easy!'  // 내용
  }

});
