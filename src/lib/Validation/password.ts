export const passwordValidation = (value: string) => {
  if (value.length < 8) {
    return 'Пароль должен содержать не менее 8 символов';
  }
  if (value.length > 40) {
    return 'Пароль должен содержать не более 40 символов';
  }
  if (!value.match(/(?=.*[A-Z])/)) {
    return 'Пароль должен содержать не менее одной буквы верхнего регистра';
  }
  if (!value.match(/(?=.*[a-z])/)) {
    return 'Пароль должен содержать не менее одной буквы нижнего регистра';
  }
  if (!value.match(/(?=.*[0-9])/)) {
    return 'Пароль должен содержать не менее одной цифры';
  }

  return '';
};
