const MONTH = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'];
const YEAR_IN_MS = 31536000000;

const formatDate = ( date ) => {

  let year = date.getFullYear();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let month = date.getMonth();
  const day = date.getDate();
  const fullDateISO = `${year}-${addZero( month )}-${addZero( day )}`;

  hours = addZero(hours);
  minutes = addZero(minutes);
  month = MONTH[month];
  year = ( Date.now() - date > YEAR_IN_MS ) ? year : '';

  return{ year, month, day, hours, minutes, fullDateISO };
};

const addZero = ( num ) => ( num < 10 ) ? `0${num}`: num;

export default formatDate;