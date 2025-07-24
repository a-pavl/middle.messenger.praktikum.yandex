const convertDatetimeToTime = (datetimeStr: string): string => {
  return new Date(datetimeStr).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}).replace(/AM|PM/,'').trim()
};

export { convertDatetimeToTime };
