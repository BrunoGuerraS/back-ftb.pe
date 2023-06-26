const typeDollar = [
  { fecha: "2023-05-28", venta: 3.675, compra: 3.671 },
  { fecha: "2023-05-29", venta: 3.678, compra: 3.674 },
  { fecha: "2023-05-30", venta: 3.68, compra: 3.667 },
];
function exchange(data) {
  if (!data || !(data.length > 0)) return;
  return data.map((item) => {
    if (item.moneda === "PEN") return item;
    const dollarExchange = typeDollar.find(
      (dollar) => item.fecha === dollar.fecha
    );
    item.monto = (item.monto * dollarExchange.compra).toFixed(2);
    item.moneda = "PEN";
    return item;
  });
}

module.exports = { exchange };
