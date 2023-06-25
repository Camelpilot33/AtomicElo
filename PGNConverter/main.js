async function run() {
    let file = document.getElementById("input1").files[0];
    let txt = document.getElementById("input0").value;
    if (file != null) txt = await file.text();
    document.getElementById("input0").value = txt;
    let last = [...txt.matchAll(/(1-0|0-1|1\/2-1\/2)/g)].map(e => e.index)[1];
    for (i = 0; i < 100; i++) {
        if (txt[last - i] == '\n') {
            txt = txt.slice(0, -txt.length + last - i);
            break;
        }
    }
    console.log('e', txt);
    document.getElementById("output").value = txt;
    document.getElementById("output").select();
    document.execCommand('copy');
}
