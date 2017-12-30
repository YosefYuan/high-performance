for (var i = 0; i < 10000; i++) {
    var div = document.createElement('div');
    document.body.appendChild(div);
}

function toArray(coll) {
    for (var i = 0, a = [], len = coll.length; i < len; i++) {
        a[i] = coll[i];
    }
    return a;
}

var coll = document.getElementsByTagName('div');
var arr = toArray(coll);

function loopCollection() {
    var time1 = +new Date();
    for (var count = 0; count < coll.length; count++) {
        console.log('test');
    }
    console.log(+new Date() - time1);
}


function loopCopiedArray() {
    var time1 = +new Date();
    for (var count = 0; count < arr.length; count++) {
        console.log('test');
    }
    console.log(+new Date() - time1);
}

loopCollection();
loopCopiedArray();