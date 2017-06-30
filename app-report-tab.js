window.onload = function() {
    var ref = firebase.database().ref().child("allerta1/results/");
    var newArray = [];
    var indexArray = [];
    ref.once("value").then(function(snapshot) {
        var i=0;
        
        snapshot.forEach(function(childSnapshot) {
             
            if(childSnapshot.val().count != undefined)
                newArray[childSnapshot.key] = childSnapshot.val().count;
            else
                newArray[childSnapshot.key] = 0;
        });
        console.log(newArray);
        var i = 0;
        
        document.getElementById("qac1").innerHTML = checkUndefined(newArray.qac1);
        addTD("#qac1", i); i++;
        document.getElementById("qac2").innerHTML = checkUndefined(newArray.qac2);
        addTD("#qac2", i); i++;
        document.getElementById("qac3").innerHTML = checkUndefined(newArray.qac3);
        addTD("#qac3", i); i++;
        document.getElementById("qbc1").innerHTML = checkUndefined(newArray.qbc1);
        addTD("#qbc1", i); i++;
        document.getElementById("qbc2").innerHTML = checkUndefined(newArray.qbc2);
        addTD("#qbc2", i); i++;
        document.getElementById("qbc3").innerHTML = checkUndefined(newArray.qbc3);
        addTD("#qbc3", i); i++;
        document.getElementById("qbc4").innerHTML = checkUndefined(newArray.qbc4);
        addTD("#qbc4", i); i++;
        document.getElementById("qbc5").innerHTML = checkUndefined(newArray.qbc5);
        addTD("#qbc5", i); i++;
        document.getElementById("qbc6").innerHTML = checkUndefined(newArray.qbc6);
        addTD("#qbc6", i); i++;
        document.getElementById("qbc7").innerHTML = checkUndefined(newArray.qbc7);
        addTD("#qbc7", i); i++;
        document.getElementById("qbc8").innerHTML = checkUndefined(newArray.qbc8);
        addTD("#qbc8", i); i++;
        document.getElementById("qbc9").innerHTML = checkUndefined(newArray.qbc9);
        addTD("#qbc9", i); i++;
        document.getElementById("qbc10").innerHTML = checkUndefined(newArray.qbc10);
        addTD("#qbc10", i); i++;
        document.getElementById("qcc1").innerHTML = checkUndefined(newArray.qcc1);
        addTD("#qcc1", i); i++;
        document.getElementById("qcc2").innerHTML = checkUndefined(newArray.qcc2);
        addTD("#qcc2", i); i++;
        document.getElementById("qcc3").innerHTML = checkUndefined(newArray.qcc3);
        addTD("#qcc3", i); i++;
        document.getElementById("qcc4").innerHTML = checkUndefined(newArray.qcc4);
        addTD("#qcc4", i); i++;
        document.getElementById("qdc1").innerHTML = checkUndefined(newArray.qdc1);
        addTD("#qdc1", i); i++;
        document.getElementById("qdc2").innerHTML = checkUndefined(newArray.qdc2);
        addTD("#qdc2", i); i++;
        document.getElementById("qec1").innerHTML = checkUndefined(newArray.qec1);
        addTD("#qec1", i); i++;
        document.getElementById("qec2").innerHTML = checkUndefined(newArray.qec2);
        addTD("#qec2", i); i++;
        document.getElementById("qec3").innerHTML = checkUndefined(newArray.qec3);
        addTD("#qec3", i); i++;
        document.getElementById("qec4").innerHTML = checkUndefined(newArray.qec4);
        addTD("#qec4", i); i++;
        document.getElementById("qec5").innerHTML = checkUndefined(newArray.qec5);
        addTD("#qec5", i); i++;
        document.getElementById("qec6").innerHTML = checkUndefined(newArray.qec6);
        addTD("#qec6", i); i++;
        document.getElementById("qec7").innerHTML = checkUndefined(newArray.qec7);
        addTD("#qec7", i); i++;
        document.getElementById("qec8").innerHTML = checkUndefined(newArray.qec8);
        addTD("#qec8", i); i++;
        document.getElementById("qec9").innerHTML = checkUndefined(newArray.qec9);
        addTD("#qec9", i); i++;
        document.getElementById("qec10").innerHTML = checkUndefined(newArray.qec10);
        addTD("#qec10", i); i++;
        document.getElementById("qec11").innerHTML = checkUndefined(newArray.qec11);
        addTD("#qec11", i); i++;
        document.getElementById("qec12").innerHTML = checkUndefined(newArray.qec12);
        addTD("#qec12", i); i++;
        document.getElementById("qec13").innerHTML = checkUndefined(newArray.qec13);
        addTD("#qec13", i); i++;
        document.getElementById("qfc1").innerHTML = checkUndefined(newArray.qfc1);
        addTD("#qfc1", i); i++;
        document.getElementById("qfc2").innerHTML = checkUndefined(newArray.qfc2);
        addTD("#qfc2", i); i++;
        document.getElementById("qfc3").innerHTML = checkUndefined(newArray.qfc3);
        addTD("#qfc3", i); i++;
        document.getElementById("qfc4").innerHTML = checkUndefined(newArray.qfc4);
        addTD("#qfc4", i); i++;
        document.getElementById("qfc5").innerHTML = checkUndefined(newArray.qfc5);
        addTD("#qfc5", i); i++;
        document.getElementById("qfc6").innerHTML = checkUndefined(newArray.qfc6);
        addTD("#qfc6", i); i++;
        document.getElementById("qfc7").innerHTML = checkUndefined(newArray.qfc7);
        addTD("#qfc7", i); i++;
        document.getElementById("qfc8").innerHTML = checkUndefined(newArray.qfc8);
        addTD("#qfc8", i); i++;
        document.getElementById("qfc9").innerHTML = checkUndefined(newArray.qfc9);
        addTD("#qfc9", i); i++;
        document.getElementById("qgc1").innerHTML = checkUndefined(newArray.qgc1);
        addTD("#qgc1", i); i++;
        document.getElementById("qgc2").innerHTML = checkUndefined(newArray.qgc2);
        addTD("#qgc2", i); i++;
        document.getElementById("qgc3").innerHTML = checkUndefined(newArray.qgc3);
        addTD("#qgc3", i); i++;
        document.getElementById("qgc4").innerHTML = checkUndefined(newArray.qgc4);
        addTD("#qgc4", i); i++;
        document.getElementById("qgc5").innerHTML = checkUndefined(newArray.qgc5);
        addTD("#qgc5", i); i++;
        document.getElementById("qgc6").innerHTML = checkUndefined(newArray.qgc6);
        addTD("#qgc6", i); i++;
        document.getElementById("qgc7").innerHTML = checkUndefined(newArray.qgc7);
        addTD("#qgc7", i); i++;
        document.getElementById("qgc8").innerHTML = checkUndefined(newArray.qgc8);
        addTD("#qgc8", i); i++;
        document.getElementById("qgc9").innerHTML = checkUndefined(newArray.qgc9);
        addTD("#qgc9", i); i++;
        document.getElementById("qgc10").innerHTML = checkUndefined(newArray.qgc10);
        addTD("#qgc10", i); i++;
        document.getElementById("qgc11").innerHTML = checkUndefined(newArray.qgc11);
        addTD("#qgc11", i); i++;
        document.getElementById("qgc12").innerHTML = checkUndefined(newArray.qgc12);
        addTD("#qgc12", i); i++;
        document.getElementById("qgc13").innerHTML = checkUndefined(newArray.qgc13);
        addTD("#qgc13", i); i++;
        document.getElementById("qhic1").innerHTML = checkUndefined(newArray.qhic1);
        addTD("#qhic1", i); i++;
        document.getElementById("qhic2").innerHTML = checkUndefined(newArray.qghi2);
        addTD("#qhic2", i); i++;
        document.getElementById("qhic3").innerHTML = checkUndefined(newArray.qhic3);
        addTD("#qhic3", i); i++;
        document.getElementById("qhic4").innerHTML = checkUndefined(newArray.qhic4);
        addTD("#qhic4", i); i++;
        document.getElementById("qhic5").innerHTML = checkUndefined(newArray.qhic5);
        addTD("#qhic5", i); i++;
        document.getElementById("qhic6").innerHTML = checkUndefined(newArray.qhic6);
        addTD("#qhic6", i); i++;
        document.getElementById("qhic7").innerHTML = checkUndefined(newArray.qhic7);
        addTD("#qhic7", i); i++;
        document.getElementById("qhic8").innerHTML = checkUndefined(newArray.qhic8);
        addTD("#qhic8", i); i++;
        document.getElementById("qhic9").innerHTML = checkUndefined(newArray.qhic9);
        addTD("#qhic9", i); i++;
        document.getElementById("qhic10").innerHTML = checkUndefined(newArray.qhic10);
        addTD("#qhic10", i); i++;
        document.getElementById("qhic11").innerHTML = checkUndefined(newArray.qhic11);
        addTD("#qhic11", i); i++;
        document.getElementById("qhic12").innerHTML = checkUndefined(newArray.qhic12);
        addTD("#qhic12", i); i++;
        document.getElementById("qhic13").innerHTML = checkUndefined(newArray.qhic13);
        addTD("#qhic13", i); i++;
        document.getElementById("qhiic1").innerHTML = checkUndefined(newArray.qhiic1);
        addTD("#qhiic1", i); i++;
        document.getElementById("qhiic2").innerHTML = checkUndefined(newArray.qhiic2);
        addTD("#qhiic2", i); i++;
        document.getElementById("qhiic3").innerHTML = checkUndefined(newArray.qhiic3);
        addTD("#qhiic3", i); i++;
        document.getElementById("qhiic4").innerHTML = checkUndefined(newArray.qhiic4);
        addTD("#qhiic4", i); i++;
        document.getElementById("qhiic5").innerHTML = checkUndefined(newArray.qhiic5);
        addTD("#qhiic5", i); i++;
        document.getElementById("qhiic6").innerHTML = checkUndefined(newArray.qhiic6);
        addTD("#qhiic6", i); i++;
        document.getElementById("qhiic7").innerHTML = checkUndefined(newArray.qhiic7);
        addTD("#qhiic7", i); i++;
        document.getElementById("qhiic8").innerHTML = checkUndefined(newArray.qhiic8);
        addTD("#qhiic8", i); i++;
        document.getElementById("qhiic9").innerHTML = checkUndefined(newArray.qhiic9);
        addTD("#qhiic9", i); i++;
        document.getElementById("qhiic10").innerHTML = checkUndefined(newArray.qhiic10);
        addTD("#qhiic10", i); i++;
        document.getElementById("qhiic11").innerHTML = checkUndefined(newArray.qhiic11);
        addTD("#qhiic11", i); i++;
        document.getElementById("qhiic12").innerHTML = checkUndefined(newArray.qhiic12);
        addTD("#qhiic12", i); i++;
        document.getElementById("qhiic13").innerHTML = checkUndefined(newArray.qhiic13);
        addTD("#qhiic13", i); i++;
        document.getElementById("qhiiic1").innerHTML = checkUndefined(newArray.qhiiic1);
        addTD("#qhiiic1", i); i++;
        document.getElementById("qhiiic2").innerHTML = checkUndefined(newArray.qhiiic2);
        addTD("#qhiiic2", i); i++;
        document.getElementById("qhiiic3").innerHTML = checkUndefined(newArray.qhiiic3);
        addTD("#qhiiic3", i); i++;
        document.getElementById("qhiiic4").innerHTML = checkUndefined(newArray.qhiiic4);
        addTD("#qhiiic4", i); i++;
        document.getElementById("qhiiic5").innerHTML = checkUndefined(newArray.qhiiic5);
        addTD("#qhiiic5", i); i++;
        document.getElementById("qhiiic6").innerHTML = checkUndefined(newArray.qhiiic6);
        addTD("#qhiiic6", i); i++;
        document.getElementById("qhiiic7").innerHTML = checkUndefined(newArray.qhiiic7);
        addTD("#qhiiic7", i); i++;
        document.getElementById("qhiiic8").innerHTML = checkUndefined(newArray.qhiiic8);
        addTD("#qhiiic8", i); i++;
        document.getElementById("qhiiic9").innerHTML = checkUndefined(newArray.qhiiic9);
        addTD("#qhiiic9", i); i++;
        document.getElementById("qhiiic10").innerHTML = checkUndefined(newArray.qhiiic10);
        addTD("#qhiiic10", i); i++;
        document.getElementById("qhiiic11").innerHTML = checkUndefined(newArray.qhiiic11);
        addTD("#qhiiic11", i); i++;
        document.getElementById("qhiiic12").innerHTML = checkUndefined(newArray.qhiiic12);
        addTD("#qhiiic12", i); i++;
        document.getElementById("qhiiic13").innerHTML = checkUndefined(newArray.qhiiic13);
        addTD("#qhiiic13", i); i++;
        document.getElementById("qic1").innerHTML = checkUndefined(newArray.qic1);
        addTD("#qic1", i); i++;
        document.getElementById("qic2").innerHTML = checkUndefined(newArray.qic2);
        addTD("#qic2", i); i++;
        document.getElementById("qic3").innerHTML = checkUndefined(newArray.qic3);
        addTD("#qic3", i); i++;
        document.getElementById("qic4").innerHTML = checkUndefined(newArray.qic4);
        addTD("#qic4", i); i++;

        document.getElementById("q1c1").innerHTML = checkUndefined(newArray.q1c1);
        addTD("#q1c1", i); i++;
        document.getElementById("q1c2").innerHTML = checkUndefined(newArray.q1c2);
        addTD("#q1c2", i); i++;
        document.getElementById("q1c3").innerHTML = checkUndefined(newArray.q1c3);
        addTD("#q1c3", i); i++;
        document.getElementById("q1c4").innerHTML = checkUndefined(newArray.q1c4);
        addTD("#q1c4", i); i++;
        document.getElementById("q1c5").innerHTML = checkUndefined(newArray.q1c5);
        addTD("#q1c5", i); i++;
        document.getElementById("q1c6").innerHTML = checkUndefined(newArray.q1c6);
        addTD("#q1c6", i); i++;
        document.getElementById("q1c7").innerHTML = checkUndefined(newArray.q1c7);
        addTD("#q1c7", i); i++;
        document.getElementById("q2Happy").innerHTML = checkUndefined(newArray.q2Happy);
        addTD("#q2Happy", i); i++;
        document.getElementById("q2Laughing").innerHTML = checkUndefined(newArray.q2Laughing);
        addTD("#q2Laughing", i); i++;
        document.getElementById("q2Sad").innerHTML = checkUndefined(newArray.q2Sad);
        addTD("#q2Sad", i); i++;
        document.getElementById("q2Angry").innerHTML = checkUndefined(newArray.q2Angry);
        addTD("#q2Angry", i); i++;
        document.getElementById("q2Irritated").innerHTML = checkUndefined(newArray.q2Irritated);
        addTD("#q2Irritated", i); i++;
        document.getElementById("q2Disgusted").innerHTML = checkUndefined(newArray.q2Disgusted);
        addTD("#q2Disgusted", i); i++;
        document.getElementById("q2Fearful").innerHTML = checkUndefined(newArray.q2Fearful);
        addTD("#q2Fearful", i); i++;
        document.getElementById("q2Surprised").innerHTML = checkUndefined(newArray.q2Surprised);
        addTD("#q2Surprised", i); i++;
        document.getElementById("q2Bored").innerHTML = checkUndefined(newArray.q2Bored);
        addTD("#q2Bored", i); i++;
        document.getElementById("q2Confused").innerHTML = checkUndefined(newArray.q2Confused);
        addTD("#q2Confused", i); i++;
        document.getElementById("q2Touched").innerHTML = checkUndefined(newArray.q2Touched);
        addTD("#q2Touched", i); i++;
        document.getElementById("q2NoReaction").innerHTML = checkUndefined(newArray.q2NoReaction);
        addTD("#q2NoReaction", i); i++;
        document.getElementById("q3c1").innerHTML = checkUndefined(newArray.q3c1);
        addTD("#q3c1", i); i++;
        document.getElementById("q3c2").innerHTML = checkUndefined(newArray.q3c2);
        addTD("#q3c2", i); i++;
        document.getElementById("q3c3").innerHTML = checkUndefined(newArray.q3c3);
        addTD("#q3c3", i); i++;
        document.getElementById("q3c4").innerHTML = checkUndefined(newArray.q3c4);
        addTD("#q3c4", i); i++;
        document.getElementById("q3c5").innerHTML = checkUndefined(newArray.q3c5);
        addTD("#q3c5", i); i++;
        document.getElementById("q3c6").innerHTML = checkUndefined(newArray.q3c6);
        addTD("#q3c6", i); i++;
        document.getElementById("q3c7").innerHTML = checkUndefined(newArray.q3c7);
        addTD("#q3c7", i); i++;
        document.getElementById("q5c1").innerHTML = checkUndefined(newArray.q5c1);
        addTD("#q5c1", i); i++;
        document.getElementById("q5c2").innerHTML = checkUndefined(newArray.q5c2);
        addTD("#q5c2", i); i++;
        document.getElementById("q5c3").innerHTML = checkUndefined(newArray.q5c3);
        addTD("#q5c3", i); i++;
        document.getElementById("q5c4").innerHTML = checkUndefined(newArray.q5c4);
        addTD("#q5c4", i); i++;
        document.getElementById("q5c5").innerHTML = checkUndefined(newArray.q5c5);
        addTD("#q5c5", i); i++;
        document.getElementById("q6c1").innerHTML = checkUndefined(newArray.q6c1);
        addTD("#q6c1", i); i++;
        document.getElementById("q6c2").innerHTML = checkUndefined(newArray.q6c2);
        addTD("#q6c2", i); i++;
        document.getElementById("q6c3").innerHTML = checkUndefined(newArray.q6c3);
        addTD("#q6c3", i); i++;
        document.getElementById("q6c4").innerHTML = checkUndefined(newArray.q6c4);
        addTD("#q6c4", i); i++;
        document.getElementById("q6c5").innerHTML = checkUndefined(newArray.q6c5);
        addTD("#q6c5", i); i++;
        document.getElementById("q6c6").innerHTML = checkUndefined(newArray.q6c6);
        addTD("#q6c6", i); i++;
        document.getElementById("q6c7").innerHTML = checkUndefined(newArray.q6c7);
        addTD("#q6c7", i); i++;
        document.getElementById("q6c8").innerHTML = checkUndefined(newArray.q6c8);
        addTD("#q6c8", i); i++;
        document.getElementById("q6c9").innerHTML = checkUndefined(newArray.q6c9);
        addTD("#q6c9", i); i++;
        document.getElementById("q6c10").innerHTML = checkUndefined(newArray.q6c10);
        addTD("#q6c10", i); i++;
        document.getElementById("q7c1").innerHTML = checkUndefined(newArray.q7c1);
        addTD("#q7c1", i); i++;
        document.getElementById("q7c2").innerHTML = checkUndefined(newArray.q7c2);
        addTD("#q7c2", i); i++;
        document.getElementById("q7c3").innerHTML = checkUndefined(newArray.q7c3);
        addTD("#q7c3", i); i++;
        document.getElementById("q7c4").innerHTML = checkUndefined(newArray.q7c4);
        addTD("#q7c4", i); i++;
        document.getElementById("q7c5").innerHTML = checkUndefined(newArray.q7c5);
        addTD("#q7c5", i); i++;
        document.getElementById("q8c1").innerHTML = checkUndefined(newArray.q8c1);
        addTD("#q8c1", i); i++;
        document.getElementById("q8c2").innerHTML = checkUndefined(newArray.q8c2);
        addTD("#q8c2", i); i++;
        document.getElementById("q8c3").innerHTML = checkUndefined(newArray.q8c3);
        addTD("#q8c3", i); i++;
        document.getElementById("q8c4").innerHTML = checkUndefined(newArray.q8c4);
        addTD("#q8c4", i); i++;
        document.getElementById("q8c5").innerHTML = checkUndefined(newArray.q8c5);
        addTD("#q8c5", i); i++;
        document.getElementById("q8c6").innerHTML = checkUndefined(newArray.q8c6);
        addTD("#q8c6", i); i++;
        document.getElementById("q9c1").innerHTML = checkUndefined(newArray.q9c1);
        addTD("#q9c1", i); i++;
        document.getElementById("q9c2").innerHTML = checkUndefined(newArray.q9c2);
        addTD("#q9c2", i); i++;
        document.getElementById("q9c3").innerHTML = checkUndefined(newArray.q9c3);
        addTD("#q9c3", i); i++;
        document.getElementById("q9c4").innerHTML = checkUndefined(newArray.q9c4);
        addTD("#q9c4", i); i++;
        document.getElementById("q9c5").innerHTML = checkUndefined(newArray.q9c5);
        addTD("#q9c5", i); i++;
        document.getElementById("q9c6").innerHTML = checkUndefined(newArray.q9c6);
        addTD("#q9c6", i); i++;
        document.getElementById("q11ac1").innerHTML = checkUndefined(newArray.q11ac1);
        addTD("#q11ac1", i); i++;
        document.getElementById("q11ac2").innerHTML = checkUndefined(newArray.q11ac2);
        addTD("#q11ac2", i); i++;
        document.getElementById("q11ac3").innerHTML = checkUndefined(newArray.q11ac3);
        addTD("#q11ac3", i); i++;
        document.getElementById("q11ac4").innerHTML = checkUndefined(newArray.q11ac4);
        addTD("#q11ac4", i); i++;
        document.getElementById("q11ac5").innerHTML = checkUndefined(newArray.q11ac5);
        addTD("#q11ac5", i); i++;
        document.getElementById("q11ac6").innerHTML = checkUndefined(newArray.q11ac6);
        addTD("#q11ac6", i); i++;
        document.getElementById("q11bc1").innerHTML = checkUndefined(newArray.q11bc1);
        addTD("#q11bc1", i); i++;
        document.getElementById("q11bc2").innerHTML = checkUndefined(newArray.q11bc2);
        addTD("#q11bc2", i); i++;
        document.getElementById("q11bc3").innerHTML = checkUndefined(newArray.q11bc3);
        addTD("#q11bc3", i); i++;
        document.getElementById("q11bc4").innerHTML = checkUndefined(newArray.q11bc4);
        addTD("#q11bc4", i); i++;
        document.getElementById("q11bc5").innerHTML = checkUndefined(newArray.q11bc5);
        addTD("#q11bc5", i); i++;
        document.getElementById("q11bc6").innerHTML = checkUndefined(newArray.q11bc6);
        addTD("#q11bc6", i); i++;
        document.getElementById("q12c1").innerHTML = checkUndefined(newArray.q12c1);
        addTD("#q12c1", i); i++;
        document.getElementById("q12c2").innerHTML = checkUndefined(newArray.q12c2);
        addTD("#q12c2", i); i++;
        document.getElementById("q12c3").innerHTML = checkUndefined(newArray.q12c3);
        addTD("#q12c3", i); i++;
        document.getElementById("q12c4").innerHTML = checkUndefined(newArray.q12c4);
        addTD("#q12c4", i); i++;
        document.getElementById("q13c1").innerHTML = checkUndefined(newArray.q13c1);
        addTD("#q13c1", i); i++;
        document.getElementById("q13c2").innerHTML = checkUndefined(newArray.q13c2);
        addTD("#q13c2", i); i++;
        document.getElementById("q13c3").innerHTML = checkUndefined(newArray.q13c3);
        addTD("#q13c3", i); i++;
        document.getElementById("q13c4").innerHTML = checkUndefined(newArray.q13c4);
        addTD("#q13c4", i); i++;
        document.getElementById("q14c1").innerHTML = checkUndefined(newArray.q14c1);
        addTD("#q14c1", i); i++;
        document.getElementById("q14c2").innerHTML = checkUndefined(newArray.q14c2);
        addTD("#q14c2", i); i++;
        document.getElementById("q14c3").innerHTML = checkUndefined(newArray.q14c3);
        addTD("#q14c3", i); i++;
        document.getElementById("q14c4").innerHTML = checkUndefined(newArray.q14c4);
        addTD("#q14c4", i); i++;

        console.log(i);

        // $('#bla').after('<div id="space"></div>');
    });
    
}

function checkUndefined(val){
    var v = val;
    if(val!=undefined)
        return val;
    else return 0;
}

function addTD(id, val){
    var total = 178;
    var qtd = insertTD(val);
    $(id).before(qtd);
    qtd = insertTD(total-val);
    $(id).after(qtd);
}

function insertTD(num){
    var td = "";
    var j = num;
    for(i=0; i<j; i++){
        td += "<td>0</td>";
    }
    return td;
}

function download(strData, strFileName, strMimeType) {
    var D = document,
        A = arguments,
        a = D.createElement("a"),
        d = A[0],
        n = A[1],
        t = A[2] || "text/plain";

    //build download link:
    a.href = "data:" + strMimeType + "charset=utf-8," + escape(strData);


    if (window.MSBlobBuilder) { // IE10
        var bb = new MSBlobBuilder();
        bb.append(strData);
        return navigator.msSaveBlob(bb, strFileName);
    } /* end if(window.MSBlobBuilder) */



    if ('download' in a) { //FF20, CH19
        a.setAttribute("download", n);
        a.innerHTML = "downloading...";
        D.body.appendChild(a);
        setTimeout(function() {
            var e = D.createEvent("MouseEvents");
            e.initMouseEvent("click", true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
            a.dispatchEvent(e);
            D.body.removeChild(a);
        }, 66);
        return true;
    }; /* end if('download' in a) */



    //do iframe dataURL download: (older W3)
    var f = D.createElement("iframe");
    D.body.appendChild(f);
    f.src = "data:" + (A[2] ? A[2] : "application/octet-stream") + (window.btoa ? ";base64" : "") + "," + (window.btoa ? window.btoa : escape)(strData);
    setTimeout(function() {
        D.body.removeChild(f);
    }, 333);
    return true;
}