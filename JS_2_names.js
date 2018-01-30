var arrUserNames = [];

for (var i = 0; i < 5 ; i++) {
  arrUserNames[i] = prompt('Введите имя пользователя');
}

var myName = prompt('Введите Ваше имя');

var matchNames = 0;

for (var i = 0; i < arrUserNames.length; i++) {
  if (myName === arrUserNames[i]) {
    matchNames += 1;
  }
}

if (matchNames == 1) {
  alert(myName + ', вы успешно вошли');
} else {
  alert('Указанного имени нет в списке ');
}
