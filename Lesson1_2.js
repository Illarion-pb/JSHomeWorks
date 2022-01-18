var message, login;
login = 'Owner';
message = (login == 'Pitter')?'Hi':
    (login == 'Owner')?'Hello':
        (login == '')?'unknown':'';
console.log(message);
