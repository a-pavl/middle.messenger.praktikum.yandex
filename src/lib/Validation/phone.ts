export const phoneValidation = (value: string) => {
  if (value.length < 10) {
    return 'Телефон должен содержать не менее 10 символов';
  }
  if (value.length > 15) {
    return 'Телефон должен содержать не более 15 символов';
  }
  if (!value.match(/^\+?\d+$/)) {
    return 'Неверный номер телефона';
  }

  return '';
};
