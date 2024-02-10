export const pageData = {
    '/pages/errors/404.html': {
        title: '404 Not Found',
        error: {
            code: '404',
            text: 'Не туда попали'
        },
    },
    '/pages/errors/500.html': {
        title: '500 Bad Request',
        error: {
            code: '500',
            text: 'Мы уже фиксим'
        },
    },
    '/pages/login/login.html': {
        title: 'Login',
        form: {
            title: 'Вход'
        },
    },
    '/pages/signin/signin.html': {
        title: 'Sign In',
        form: {
            title: 'Регистрация'
        },
    },
    '/pages/profile/profile.html': {
        title: 'Profile',
        details: {
            avatar: {
                label: 'Иван'
            },
            email: {
                label: 'Почта',
                value: 'pochta@yandex.ru'
            },
            login: {
                label: 'Логин',
                value: 'ivanivanov'
            },
            firstName: {
                label: 'Имя',
                value: 'Иван'
            },
            secondName: {
                label: 'Фамилия',
                value: 'Иванов'
            },
            displayName: {
                label: 'Имя в чате',
                value: 'Иван'
            },
            phone: {
                label: 'Телефон',
                value: '+7 (909) 967 30 30'
            },
        }
    },
};

const pageDataClone = {
    '/pages/errors/404.html': {
        title: '404 Not Found',
        error: {
            code: '404',
            text: 'Не туда попали'
        },
        backButton: {
            label: 'Назад к чатам'
        }
    },
    '/pages/errors/500.html': {
        title: '500 Bad Request',
        error: {
            code: '500',
            text: 'Мы уже фиксим'
        },
        backButton: {
            label: 'Назад к чатам'
        }
    },
    '/pages/login/login.html': {
        title: 'Login',
        form: {
            title: 'Вход',
            login: {
                label: 'Логин'
            },
            password: {
                label: 'Пароль'
            },
            submitButton: {
                label: 'Войти'
            },
            signinButton: {
                label: 'Нет аккаунта?'
            }
        },
    },
    '/pages/signin/signin.html': {
        title: 'Sign In',
        form: {
            title: 'Регистрация',
            email: {
                label: 'Почта'
            },
            login: {
                label: 'Логин'
            },
            firstName: {
                label: 'Имя'
            },
            secondName: {
                label: 'Фамилия'
            },
            phone: {
                label: 'Телефон'
            },
            password: {
                label: 'Пароль'
            },
            passwordCheck: {
                label: 'Пароль (ещё раз)'
            },
            submitButton: {
                label: 'Зарегистрироваться'
            },
            loginButton: {
                label: 'Войти'
            }
        },
    },
    '/pages/profile/profile.html': {
        title: 'Profile',
        details: {
            avatar: {
                label: 'Иван'
            },
            email: {
                label: 'Почта',
                value: 'pochta@yandex.ru'
            },
            login: {
                label: 'Логин',
                value: 'ivanivanov'
            },
            firstName: {
                label: 'Имя',
                value: 'Иван'
            },
            secondName: {
                label: 'Фамилия',
                value: 'Иванов'
            },
            displayName: {
                label: 'Имя в чате',
                value: 'Иван'
            },
            phone: {
                label: 'Телефон',
                value: '+7 (909) 967 30 30'
            },
        },
        actions: {
            changeDetails: {
                label: 'Изменить данные'
            },
            changePassword: {
                label: 'Изменить пароль'
            },
            logoutButton: {
                label: 'Выйти'
            }
        }
    },
};