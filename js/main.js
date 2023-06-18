// import Chart from 'chart.js';
// import 'chartjs-adapter-dayjs-4/dist/chartjs-adapter-dayjs-4.esm';

let g = { destroy: e => e };
function graph(dat, name) {
    g.destroy()
    const ctx = document.getElementById('graph');
    g = new Chart(ctx, {
        type: 'line',
        data: {
            datasets: [{
                label: name,
                data: dat.map(e => new Object({ x: convDate(e[0]), y: e[1] })).sort(function (a, b) { return a.x - b.x; }),
                backgroundColor: 'rgb(255, 99, 132)'
            }]
        },
        // data: {
        //     labels: data.map(e=>e[0]),
        //     datasets: [{
        //         fill: false,
        //         lineTension: 0,
        //         backgroundColor: "rgba(0,0,255,0)",
        //         borderColor: "rgba(0,0,255,1)",
        //         data: data.map(e=>e[1]),
        //         borderWidth:0.7
        //     }]
        // },
        options: {
            responsive: false,
            // maintainAspectRatio: false,
            legend: { display: false },
            plugins: {
                legend: {
                    display: false,
                },
                title: {
                    display: true,
                    text: 'Atomic Chess Elo Graph'
                }
            },
            scales: {
                x: {
                    type: 'linear',
                    grace: "0%",
                    display: false
                }
            }
        }
    });
}
function convDate(a) {
    a = a.split(' ')
    a[1] = String(constants.months.indexOf(a[1]) + 1).padStart(2, '0')
    a = `${a[0]}-${a[1]}-${a[2].padStart(2, '0')}T${String((Number(a[3].split(':')[0]) + (a[4] == "PM" ? 12 : 0)) % 24).padStart(2, '0')}:${String(a[3].split(':')[1]).padStart(2, '0')}:00Z`
    return ((new Date(a).getTime()) / 31536000000) + 1970
}

function run() {
    let names = document.getElementById('names').value.split(',');
    let player = names[0];
    names = new RegExp("(" + names.join("|") + ")", "g");
    let working = {year: Number(document.getElementById("year").value), lastDate: new Date("2370-01-01T00:00:00Z")}
    let data = document.getElementById('input').value
        .split('\n\n').map(e => f(e, names, working)).filter(e => !e.includes(NaN));
    let wins = data.filter(e => e[2] > 0).length;
    data = (data.map(e => [e[0], e[1]]));
    document.getElementById('wl').innerHTML = `Win/Total = ${wins}/${data.length} = ${(wins / data.length * 100).toFixed(2)}%`;
    document.getElementById("output").innerHTML = `<table CELLSPACING=0><tr>${data.map(e => `<td>${e[0]}</td><td>${e[1]}</td>`).join("</tr><tr>")}</tr></table>`;
    navigator.clipboard.writeText(data.map(e => e.join('\t')).join('\n'));
    graph(data, player);  //[[0, 1], [1.5, 10], [2, 5]])
}

function f(str, names, working) {
    let lines = str.split('\n')
    console.log(lines)
    let date = NaN
    let elo = NaN
    let elo_change = NaN
    for (let i in lines) {
        if (constants.dateRegex.test(lines[i])) {
            const calculated = new Date(lines[i]);
            console.log(calculated)
            if (calculated > working.lastDate) {
                working.year--;
            }
            date = working.year + ' ' + lines[i]
            console.log(date)
            working.lastDate = calculated;
        }
        if (names.test(lines[i])) {
            elo = lines[Number(i)+1].slice(1, -1);

            let change = lines[Number(i)+2]
            if (change !== undefined && (change.includes('+') || change.includes('-'))) {
                elo_change = Number(change)
            }
        }
    }
    return [date, elo, elo_change]
}

function test() {
    document.getElementById("input").value = constants.testInput;
    document.getElementById("names").value = constants.testNames;
    document.getElementById("year").value = constants.testYear;
}