export function dateFormat(date) {
  if (!date) return;

  const newDate = new Date(date);

  const yyyy = newDate.getFullYear();
  let mm = newDate.getMonth() + 1; // Months start at 0!
  let dd = newDate.getDate();

  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;

  return `${dd}/${mm}/${yyyy}`;
}

export function formatDateToIso(date) {
  var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

  if (month.length < 2) 
      month = '0' + month;
  if (day.length < 2) 
      day = '0' + day;

  return [year, month, day].join('-');
}


export function formatCurrency(decimal) {
  if (!decimal) return null;

  const BRLCurrency = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  
  return BRLCurrency.format(decimal);
}


export function formatMonth(numb) {
  if (!numb) return null;
  
  var months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  var selectedMonthName = months[numb - 1];

  return selectedMonthName;
}