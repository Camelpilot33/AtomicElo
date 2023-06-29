/**
 * Links graph object g to <canvas id="graph"> and sets up graph
 * @param {Array} datapoints datapoints
 * @param {string} mainName first name listed
 * @param {string} type whether to graph vs time or number
 * @returns {void} nothing
 */
function graph(datapoints, mainName,type) {
    //try to destroy graph
    try { g.destroy(); } catch { }
    //create new graph
    const ctx = document.getElementById('graph');
    g = new Chart(ctx, {
        type: 'line',
        //Datapoints for the graph
        data: {
            datasets: [{
                label: mainName,
                data: type=="number"?datapoints.map((e,_) => new Object({ x: datapoints.length-_, y: e[1] })).sort(function (a, b) { return a.x - b.x; }):datapoints.map(e => new Object({ x: convDate(e[0]), y: e[1] })).sort(function (a, b) { return a.x - b.x; }),
                backgroundColor: 'rgb(255, 99, 132)'
            }]
        },
        //Graph options
        options: {
            responsive: false, //Stops the graph from changing it's size
            plugins: {
                legend: { display: false },
                title: {
                    display: true,
                    text: 'Atomic Chess Elo Graph'
                },
                subtitle: {
                    display: true,
                    text: mainName
                }
            },
            scales: {
                x: {
                    type: 'linear',
                    display: false //The x axis scale is almost unreadable until time adapter is added (see TODO line 10)
                }
            }
        }
    });
}

/**
 * Converts Chesscom date to year
 * @param {number} ChessDate Chess.com date in format (MMM DD hh:mm XM)
 * @returns {number} Date in years
 */
function convDate(ChessDate) {
    ChessDate = ChessDate.split(' ');
    ChessDate[1] = String(constants.months.indexOf(ChessDate[1]) + 1).padStart(2, '0');
    ChessDate = `${ChessDate[0]}-${ChessDate[1]}-${ChessDate[2].padStart(2, '0')}T${String((Number(ChessDate[3].split(':')[0]) + (ChessDate[4] == "PM" ? 12 : 0)) % 24).padStart(2, '0')}:${String(ChessDate[3].split(':')[1]).padStart(2, '0')}:00Z`;
    return ((new Date(ChessDate).getTime()) / 31536000000) + 1970;
}

/**
 * @param {Array.<string>} matchData The current match's data
 * @param {Array} names The names regex
 * @param {Object} working
 * @returns {Array.<{date: String, elo: Number, eloChange: Number}>}
 */
function f(matchData, names, working) {
    let lines = matchData.split('\n');
    // console.log(lines)
    let date = NaN;
    let elo = NaN;
    let eloChange = NaN;
    for (let i in lines) {
        if (constants.dateRegex.test(lines[i])) {
            const calculated = new Date(lines[i]);
            // console.log(calculated)
            if (calculated > working.lastDate) {
                working.year--;
            }
            date = working.year + ' ' + lines[i];
            // console.log(date)
            working.lastDate = calculated;
        }
        if (names.test(lines[i])) {
            elo = lines[Number(i) + 1].slice(1, -1);

            let change = lines[Number(i) + 2];
            if (change !== undefined && (change.includes('+') || change.includes('-'))) {
                eloChange = Number(change);
            }
        }
    }
    return [date, elo, eloChange];
}

/**
 * Main runner function
 */
function run() {
    let names = document.getElementById('names').value.split(','); //grabs the names
    let player = names[0]; //gets the first name, which will be used in the graph
    names = new RegExp("(" + names.join("|") + ")", "gi"); //converts the names to regex, with g and i flags
    let working = { year: Number(document.getElementById("year").value), lastDate: new Date("2370-01-01T00:00:00Z") };
    let data = document.getElementById('input').value
        .split('\n\n').map(e => f(e, names, working)).filter(e => !e.includes(NaN)); //converts data to [date, elo, eloChange]
    let wins = data.filter(e => e[2] > 0).length; //gets number of wins from eloChange
    data = (data.map(e => [e[0], e[1]])); //removes eloChange
    //set document
    document.getElementById('wl').innerHTML = `Win/Total = ${wins}/${data.length} = ${(wins / data.length * 100).toFixed(2)}%`;
    document.getElementById("output").innerHTML = `<table CELLSPACING=0><tr>${data.map(e => `<td>${e[0]}</td><td>${e[1]}</td>`).join("</tr><tr>")}</tr></table>`;

    navigator.clipboard.writeText(data.map(e => e.join('\t')).join('\n')); //copy google sheets pastable
    graph(data, player, document.querySelector('input[name="gt"]:checked').value); //graphs the data
}

/**
 * Loads and runs test data from izyuu
 */
function test() {
    document.getElementById("input").value = constants.testInput;
    document.getElementById("names").value = constants.testNames;
    document.getElementById("year").value = constants.testYear;
    run();
}