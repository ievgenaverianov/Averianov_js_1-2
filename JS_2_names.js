var aUserNames = [];

for (var i = 0; i < 5 ; i++) {
  aUserNames[i] = prompt('Введите ' + (i + 1) + 'е имя пользователя');
}

var sMyName = prompt('Введите Ваше имя');

var bMatchNames = false;

//searching for sMyName (single user name) in aUserNames (array of allowed users)
for (i = 0; i < aUserNames.length; i++) {
  if (sMyName === aUserNames[i]) {
    bMatchNames = true;
    break;
  }
}

if (bMatchNames) {
  alert(sMyName + ', вы успешно вошли');
} else {
  alert('Указанного имени нет в списке ');
}
