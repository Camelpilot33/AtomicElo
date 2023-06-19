chrome.action.onClicked.addListener(async (tab) => {
    //adapted from commit db2f381
    function getData() {
        //load function
        function f(matchData, names, working, _=1) {
            let lines = matchData
            let date = NaN;
            let elo = NaN;
            let eloChange = NaN;
            for (let i in lines) {
                if (/(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) \d+ \d+:\d+ [AP]M/g.test(lines[i])) {
                    const calculated = new Date(lines[i]);
                    if (calculated > working.lastDate) {
                        working.year--;
                    }
                    date = working.year + ' ' + lines[i];
                    working.lastDate = calculated;
                }
                if (names.test(lines[i])) {
                    elo = lines[Number(i) + 2].slice(1, -1);

                    let change = lines[Number(i) + 4];
                    if (change !== undefined && (change.includes('+') || change.includes('-'))) {
                        eloChange = Number(change);
                    }
                }
            }
            return [date, elo, eloChange];
        }
        let names = window.prompt("csv names").split(',')//document.getElementsByClassName("ui_v5-input-component ui_v5-input-dark ui_v5-input-group-space-left ui_v5-input-group-space-right")[0].value
        names = new RegExp("(" + names.join("|") + ")", "gi"); 
        let working = { year: Number(window.prompt("year:")), lastDate: new Date("2370-01-01T00:00:00Z") };
        let data = document.getElementsByClassName("archive-results-found-games")[0].textContent.replace(/  /g, '').split(/3 \| 2/g);
        data.shift();
        data = data.map(e => e.split('\n'))
        data=data.map((e,_) => f(e, names, working,_))//.filter(e => !e.includes(NaN));
        // console.log(data[0])
        let wins = data.filter(e => e[2] > 0).length;
        data = (data.map(e => [e[0], e[1]]));
        try {
            setTimeout(async () => console.log(await navigator.clipboard.writeText(data.map(e => e.join('\t')).join('\n'))), 1)
        } catch (e) {
            console.log(e)
        }
        window.alert("Copied!")
    }

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: getData,
        args: ['Hello']
    });
});