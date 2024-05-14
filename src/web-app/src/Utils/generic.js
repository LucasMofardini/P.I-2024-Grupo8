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

export function formatCurrency(decimal) {
  if (!decimal) return null;

  const BRLCurrency = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  
  return BRLCurrency.format(decimal);
}