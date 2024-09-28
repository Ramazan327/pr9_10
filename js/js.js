'use script'

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();  // Отключаем отправку формы

    // Очищаем предыдущие ошибки
    let errorname = '';
    let erroryear = '';
    let errorbtn = '';

    // Получаем значения полей
    const name = document.getElementById('name').value.trim();
    const year = document.getElementById('year').value.trim();
    const currentYear = new Date().getFullYear();

    // Проверка поля Имя
    if (name === '') {
        errorname = 'Имя не может быть пустым';
        document.getElementById('name').classList.add('error');
    } else if (name.length < 2) {
        errorname = 'Имя должно содержать минимум 2 символа';
        document.getElementById('name').classList.add('error');
    } else {
        document.getElementById('name').classList.remove('error');
    }

    // Проверка поля Год рождения
    if (year === '') {
        erroryear = 'Год рождения не может быть пустым';
        document.getElementById('year').classList.add('error');
    } else if (year.length !== 4 || isNaN(year)) {
        erroryear = 'Год рождения должен содержать 4 цифры';
        document.getElementById('year').classList.add('error');
    } else {
        const age = currentYear - parseInt(year);
        if (age < 18) {
            erroryear = 'Вам должно быть не менее 18 лет';
            document.getElementById('year').classList.add('error');
        } else {
            document.getElementById('year').classList.remove('error');
        }
    }

    // Вывод ошибок или успешного сообщения
    document.getElementById('errorname').innerText = errorname;
    document.getElementById('erroryear').innerText = erroryear;

    if (errorname === '' && erroryear === '') {
        errorbtn = 'Форма успешно отправлена!';
        document.getElementById('errorbtn').innerText = errorbtn;
    } else {
        errorbtn = 'Ошибка';
        document.getElementById('errorbtn').innerText = errorbtn;
    }
});
