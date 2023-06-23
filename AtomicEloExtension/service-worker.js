chrome.action.onClicked.addListener(async (tab) => {
    //adapted from commit db2f381
    function Injection() {
        function popup(html) {
            let prev = ['ATOMICinjectedstyle','ATOMICinjectedbox'].map(e=>document.getElementById(e))
            if (prev[0]!=null)  prev.forEach(e=>e.remove())
            const popuphtml = `<style id="ATOMICinjectedstyle">.ATOMICm {z-index: 999;align-items: center;display: flex;justify-content: center;position: absolute;top: 0;bottom: 0;left: 0;right: 0;transition: all 0.4s;background-color: rgba(44,44,44,0.8);visibility: hidden;opacity: 0;}.ATOMICc {color: white;position: absolute;background: grey;width: 400px;padding: 1em 2em;border-radius: 4px;}.ATOMICm:target {visibility: visible;opacity: 1;}.ATOMICbc {position: absolute;top: 0;right: 15px;text-decoration: none;font-size: 30px;}</style><div id="ATOMICinjectedbox" class="ATOMICm"><div class="ATOMICc">${html}<a href="#" class="ATOMICbc">&#10005;</a></div></div>`;
            document.getElementsByTagName("body")[0].innerHTML = popuphtml + document.getElementsByTagName("body")[0].innerHTML
            window.location.href = '#ATOMICinjectedbox';
        }
        function f(matchData, names, working, _ = 1) {
            let lines = matchData;
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
        console.info("%cAtomicElo Injection", "font-size:20px;color: #00ff00")
        let names = window.prompt("csv names").split(',')//document.getElementsByClassName("ui_v5-input-component ui_v5-input-dark ui_v5-input-group-space-left ui_v5-input-group-space-right")[0].value
        names = new RegExp("(" + names.join("|") + ")", "gi"); 
        let working = { year: Number(window.prompt("year:")), lastDate: new Date("2370-01-01T00:00:00Z") };
        let data = document.getElementsByClassName("archive-results-found-games")[0].textContent.replace(/  /g, '').split(/Atomic/g);
        data.shift();
        data = data.map(e => e.split('\n'))
        data=data.map((e,_) => f(e, names, working,_)).filter(e => !e.includes(NaN));
        let wins = data.filter(e => e[2] > 0).length;
        data = (data.map(e => [e[0], e[1]]));
        let copied=true
        const copypts = () => setTimeout(async () => console.log(await navigator.clipboard.writeText(data.map(e => e.join('\t')).join('\n'))), 1)
        try {   copypts()   } catch (e) {   console.log("%cError Copying points: "+e,"color:#FF1010"); copied=false  }
        popup(`
            <h1 style="color:white">AtomicElo Extension</h1>
            Copied: ${copied ? `<e style='color:#00FF00'>Successfully</e>` : `<e style='color:#FF0000'>Unsuccessfully</e>`}<br>
            Win/Total = ${wins}/${data.length} = ${(wins / data.length * 100).toFixed(2)}%
        `)
    }

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: Injection,
        args: []
    });
});