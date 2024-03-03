export const nameValidation = (value: string) => {
  if (!value.match(/^[A-Z\u0410-\u042F]+/)) {
    return 'Первая буква должна быть заглавной';
  }
  if (!value.match(/[\u0041-\u005A\u0061-\u007A\u0400-\u04FF-]$/)) {
    return 'Допустимы только символы латиницы, кириллицы, дефис';
  }

  return '';
};
