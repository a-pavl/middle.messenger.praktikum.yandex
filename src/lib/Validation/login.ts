export const loginValidation = (login: string) => {
  if (login.length < 3) {
    return 'Логин должен содержать не менее 3 символов';
  }
  if (login.length > 20) {
    return 'Логин должен содержать не более 20 символов';
  }
  if (!login.match(/(?=.*[a-z])/)) {
    return 'Логин должен содержать буквы';
  }
  if (!login.match(/^[a-z0-9_-]{3,}$/)) {
    return 'Разрешенные символы: латинские буквы нижнего регистра, цифры, дефис и подчеркивание';
  }

  return '';
};
