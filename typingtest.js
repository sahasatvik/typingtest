var i = 0;
var start = -1;
var typed = '';
var typedcorrect = '';

function init() {
    i = 0;
    start = -1;
    typed = '';
    updateTestText();
    document.getElementById('wpm').innerHTML = '--';
    document.getElementById('accuracy').innerHTML = '--';
}

function updateTestText() {
    var t = '';
    typedcorrect = '';
    for (var j = 0; j < i; j++) {
        c = text.charAt(j);
        if (c == typed.charAt(j)) {
            t += c;
            typedcorrect += c;
        } else {
            if (c == ' ') {c = '_';}
            t += '<span class="testtext-wrong">' + c + '</span>';
        }
    }
    document.getElementById('testtext-typed').innerHTML = t;
    document.getElementById('testtext-untyped').innerHTML = text.substring(i);
    document.getElementById('testtext-untyped').scrollIntoView();
}

function updateConsole() {
    if (start > 0 && i > 0) {
        var current = (new Date()).getTime();
        var ms = current - start;
        var wpm = Math.round(1000 * 60 * characters(typedcorrect) / (5 * ms));
        var accuracy = Math.round(typedcorrect.length * 100.0 / typed.length);
        document.getElementById('wpm').innerHTML = wpm + 'wpm';
        document.getElementById('accuracy').innerHTML = accuracy + '%';
    }
}

function keyDownEventListener(e) {
    if (e.keyCode == 8) {
        i--;
        typed = typed.substring(0, i);
    } else if (e.keyCode == 27) {
        init();
    } else if (e.key.length == 1) {
        i++;
        typed += e.key;
        if (start < 0) {
            start = (new Date()).getTime();
        }
    }
    
    if (i < 0) { i = 0;}
    if (i > text.length) {i = 0;}

    updateTestText();
    updateConsole()
}

function characters(s) {
    return s.replace(/[^a-zA-Z0-9]/g,'').length;
}

let text = `The thousand injuries of Fortunato I had borne as I best could; but when he ventured upon insult, I vowed revenge. You, who so well know the nature of my soul, will not suppose, however, that I gave utterance to a threat. At length I would be avenged; this was a point definitely settled - but the very definitiveness with which it was resolved precluded the idea of risk. I must not only punish, but punish with impunity. A wrong is unredressed when retribution overtakes its redresser. It is equally unredressed when the avenger fails to make himself felt as such to him who has done the wrong. It must be understood that neither by word nor deed had I given Fortunato cause to doubt my good-will. I continued, as was my wont, to smile in his face, and he did not perceive that my smile now was at the thought of his immolation. He had a weak point - this Fortunato - although in other regards he was a man to be respected and even feared. He prided himself on his connoisseurship in wine. Few Italians have the true virtuoso spirit. For the most part their enthusiasm is adopted to suit the time and opportunity - to practise imposture upon the British and Austrian millionaires. In painting and gemmary, Fortunato, like his countrymen, was a quack - but in the matter of old wines he was sincere. In this respect I did not differ from him materially: I was skillful in the Italian vintages myself, and bought largely whenever I could.`;
