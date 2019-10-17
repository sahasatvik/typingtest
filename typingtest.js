var i = 0;
var start = -1;

function init() {
    document.getElementById('testtext-untyped').innerHTML = text;
    document.getElementById("testtext-untyped").scrollIntoView();
}

function update() {
    if (start > 0) {
        var current = (new Date()).getTime();
        var ms = current - start;
        var wpm = Math.round(1000 * 60 * characters(i) / (5 * ms));
        document.getElementById('wpm').innerHTML = wpm + 'wpm';
    }
}

function keyDownEventListener(e) {
    if (start < 0) {
        start = (new Date()).getTime();
    }
    if (e.keyCode == 8) {
        i--;
    } else if (e.key == text[i]) {
        i++;
    }
    
    if (i < 0) { i = 0;}
    if (i > text.length) {i = 0;}

    t = cut(i);
    document.getElementById('testtext-untyped').innerHTML = t[1];
    document.getElementById('testtext-typed').innerHTML = t[0];
    document.getElementById("testtext-untyped").scrollIntoView();
}

function cut(i) {
    return [text.substring(0, i), text.substring(i)];
}

function characters(i) {
    return text.substring(0, i).replace(/[^a-zA-Z0-9]/g,'').length;
}

var text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus pulvinar elementum integer enim neque volutpat. Etiam erat velit scelerisque in. Nibh mauris cursus mattis molestie a iaculis at erat pellentesque. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed. Non arcu risus quis varius quam quisque id diam vel. Amet luctus venenatis lectus magna. Nunc scelerisque viverra mauris in aliquam sem fringilla. Cursus risus at ultrices mi tempus imperdiet nulla malesuada. Feugiat nibh sed pulvinar proin gravida hendrerit. Sollicitudin nibh sit amet commodo nulla. Sagittis id consectetur purus ut faucibus pulvinar elementum integer enim. Eu consequat ac felis donec et odio pellentesque.\nNunc aliquet bibendum enim facilisis gravida neque convallis a. A scelerisque purus semper eget duis at. Facilisis leo vel fringilla est ullamcorper eget nulla facilisi. Nunc congue nisi vitae suscipit tellus mauris a diam maecenas. In hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Nunc aliquet bibendum enim facilisis gravida neque convallis. Neque convallis a cras semper auctor neque. Mattis vulputate enim nulla aliquet porttitor lacus luctus. Platea dictumst quisque sagittis purus. Risus ultricies tristique nulla aliquet enim tortor at auctor urna. Venenatis cras sed felis eget velit aliquet sagittis id consectetur. Duis tristique sollicitudin nibh sit amet.\nAc auctor augue mauris augue neque gravida. Malesuada proin libero nunc consequat interdum varius sit amet mattis. Eu mi bibendum neque egestas. Rhoncus aenean vel elit scelerisque mauris pellentesque. Ornare massa eget egestas purus viverra accumsan in nisl nisi. Odio tempor orci dapibus ultrices. Fringilla ut morbi tincidunt augue. Fames ac turpis egestas integer. Aliquet eget sit amet tellus cras adipiscing. Consectetur a erat nam at lectus urna duis convallis. Purus semper eget duis at tellus at. Lectus arcu bibendum at varius vel pharetra vel turpis. Lectus urna duis convallis convallis tellus. Est velit egestas dui id ornare arcu. Neque convallis a cras semper auctor neque vitae tempus quam. Dictumst quisque sagittis purus sit amet volutpat.\nOrci porta non pulvinar neque laoreet suspendisse interdum consectetur libero. Eget est lorem ipsum dolor. Felis bibendum ut tristique et egestas quis. Nec nam aliquam sem et. Rhoncus dolor purus non enim. Sollicitudin tempor id eu nisl nunc mi. Felis imperdiet proin fermentum leo vel orci porta non. Donec ac odio tempor orci. Vulputate eu scelerisque felis imperdiet proin fermentum. Eu feugiat pretium nibh ipsum consequat nisl vel. Sit amet luctus venenatis lectus magna. Pellentesque nec nam aliquam sem et tortor. Orci eu lobortis elementum nibh tellus molestie nunc non blandit. Vitae congue eu consequat ac. Nisl suscipit adipiscing bibendum est ultricies. Vitae justo eget magna fermentum iaculis eu non diam phasellus. Elementum integer enim neque volutpat. In fermentum posuere urna nec tincidunt praesent. Duis tristique sollicitudin nibh sit amet. Luctus accumsan tortor posuere ac ut.\nQuam viverra orci sagittis eu volutpat. Non sodales neque sodales ut etiam sit amet. Sit amet venenatis urna cursus eget nunc scelerisque viverra. Ultricies mi quis hendrerit dolor. Cras pulvinar mattis nunc sed blandit libero volutpat sed cras. Sed augue lacus viverra vitae congue eu consequat. Lacus luctus accumsan tortor posuere. A lacus vestibulum sed arcu. Vitae auctor eu augue ut lectus arcu bibendum. Quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis. Auctor neque vitae tempus quam. Orci eu lobortis elementum nibh tellus molestie nunc non blandit. Aliquam sem fringilla ut morbi tincidunt augue interdum. Aliquam id diam maecenas ultricies. Elementum curabitur vitae nunc sed velit dignissim.';
