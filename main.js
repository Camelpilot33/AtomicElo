// const xValues = [10,12,15];
// const yValues = [1500,1600,1700];
// new Chart("graph", {
//   type: "line",
//   data: {
//     labels: xValues,
//     datasets: [{
//       fill: false,
//       lineTension: 0,
//       backgroundColor: "rgba(0,0,255,1.0)",
//       borderColor: "rgba(0,0,255,0.1)",
//       data: yValues
//     }]
//   },
//   options: {
//     legend: {display: false},
//     scales: {
//       yAxes: [{ticks: {min: 1500, max:3500}}],
//     }
//   }
// });
function run() {
    let names = document.getElementById('names').value.split(',').map(e => new RegExp(e))
    let data = document.getElementById('input').value
        .split('\n\n').map(e => f(e, names)).filter(e=>!e.includes(NaN))
    let output = `<table cellspaceing=0><tr>${data.map(e => `<td>${e.join("</td><td>")}</td>`).join("</tr><tr>")}</tr></table>`
    document.getElementById("output").innerHTML = output
    navigator.clipboard.writeText(data.map(e=>e.join('\t')).join('\n'));
}

function f(str, names) {
    a = str.split('\n')
    date = NaN
    elo = NaN
    for (let i in a) {
        date = /(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) \d+ \d+:\d+ [AP]M/g.test(a[i]) ? document.getElementById("year").value+' '+a[i]: date
        for (let name of names) {
            elo = name.test(a[i]) ? Number(a[Number(i) + 1].slice(0, -1).slice(1, 10)) : elo
        }
    }
    return [date, elo]
}