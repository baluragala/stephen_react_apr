function createTable(rows, cols, headers, footer) {
  console.log(rows, cols, headers, footer);
}
createTable(10, 4, ["c1", "c2", "c3", "c4"], "this is footer");

//named params
function createTable({ rows, cols, headers, footer }) {
  console.log(rows, cols, headers, footer);
}

createTable({
  headers: ["c1", "c2", "c3", "c4"],
  rows: 10,
  cols: 5,
  footer: "footer"
});
