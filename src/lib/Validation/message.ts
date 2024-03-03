export const messageValidation = (value: string) => {
  if (value.length === 0) {
    return 'Сообщение не должно быть пустым';
  }

  return '';
};
