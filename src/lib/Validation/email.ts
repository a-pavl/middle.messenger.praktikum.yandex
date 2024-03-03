export const emailValidation = (value: string) => {
  if (!value.match(/^\S+@\S+\.\S+$/)) {
    return 'Неверный адрес';
  }

  return '';
};
