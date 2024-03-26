export const validationsReg = (refs) => {
    let errorMessage = '';
    const validateEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    }

    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,20}$/;
        return passwordRegex.test(password);
    }

    const validateName = (name) => {
        const nameRegex = /^[a-zA-Zа-яА-Я]{3,50}$/;
        return nameRegex.test(name);
    }

    const validatePatronymic = (patronymic) => {
        if (patronymic) {
            const patronymicRegex = /^[a-zA-Zа-яА-Я]{3,50}$/;
            return patronymicRegex.test(patronymic);
        }
        return true; // Если отчество не введено, то считаем его валидным
    }

    const validateDate = (date) => {
        if (date) {
            const currentDate = new Date();
            const currentYear = currentDate.getFullYear();
            const minYear = 1900;

            const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.(19\d{2}|20\d{2})$/;
            const isValidFormat = dateRegex.test(date);

            if (isValidFormat) {
                const enteredYear = parseInt(date.split('.')[2]);
                if (enteredYear >= minYear && enteredYear <= currentYear) {
                    // props.dispatch(onDateChangeActionCreator( date ));
                    return true;
                }
            }

            return false;
        }

        return false; // Если дата не введена, считаем ее невалидной
    }
    if (!validateEmail(refs[0].current.value)) {
        errorMessage += "Пожалуйста, введите корректный Email.\n";
    }
    if (!validatePassword(refs[1].current.value)) {
        errorMessage += "Пароль должен содержать от 6 до 20 символов, включать латинские буквы нижнего и верхнего регистров, а также цифры.\n";
    }
    if (refs[1].current.value !== refs[2].current.value) {
        errorMessage += "Пароли не совпадают.\n";
    }
    if (!validateName(refs[3].current.value)) {
        errorMessage += "Имя должно содержать от 3 до 50 символов и состоять из русских или английских букв.\n";
    }
    if (!validateName(refs[4].current.value)) {
        errorMessage += "Фамилия должна содержать от 3 до 50 символов и состоять из русских или английских букв.\n";
    }
    if (!validatePatronymic(refs[5].current.value)) {
        errorMessage += "Отчество должно содержать от 3 до 50 символов и состоять из русских или английских букв, или может отсутствовать.\n";
    }
    if (!validateDate(refs[6].current.value)) {
        errorMessage += "Укажите реальную дату рождения от 1900 года до текущего дня\n";
    }
    return errorMessage;
}