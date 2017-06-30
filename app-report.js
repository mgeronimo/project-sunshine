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
        

        document.getElementById("qac1").innerHTML = checkUndefined(newArray.qac1);
        document.getElementById("qac2").innerHTML = checkUndefined(newArray.qac2);
        document.getElementById("qac3").innerHTML = checkUndefined(newArray.qac3);
        document.getElementById("qbc1").innerHTML = checkUndefined(newArray.qbc1);
        document.getElementById("qbc2").innerHTML = checkUndefined(newArray.qbc2);
        document.getElementById("qbc3").innerHTML = checkUndefined(newArray.qbc3);
        document.getElementById("qbc4").innerHTML = checkUndefined(newArray.qbc4);
        document.getElementById("qbc5").innerHTML = checkUndefined(newArray.qbc5);
        document.getElementById("qbc6").innerHTML = checkUndefined(newArray.qbc6);
        document.getElementById("qbc7").innerHTML = checkUndefined(newArray.qbc7);
        document.getElementById("qbc8").innerHTML = checkUndefined(newArray.qbc8);
        document.getElementById("qbc9").innerHTML = checkUndefined(newArray.qbc9);
        document.getElementById("qbc10").innerHTML = checkUndefined(newArray.qbc10);
        document.getElementById("qcc1").innerHTML = checkUndefined(newArray.qcc1);
        document.getElementById("qcc2").innerHTML = checkUndefined(newArray.qcc2);
        document.getElementById("qcc3").innerHTML = checkUndefined(newArray.qcc3);
        document.getElementById("qcc4").innerHTML = checkUndefined(newArray.qcc4);
        document.getElementById("ageMean").innerHTML = checkUndefined(newArray.ageMean);
        document.getElementById("ageMode").innerHTML = checkUndefined(newArray.ageMode);
        document.getElementById("qdc1").innerHTML = checkUndefined(newArray.qdc1);
        document.getElementById("qdc2").innerHTML = checkUndefined(newArray.qdc2);
        document.getElementById("qec1").innerHTML = checkUndefined(newArray.qec1);
        document.getElementById("qec2").innerHTML = checkUndefined(newArray.qec2);
        document.getElementById("qec3").innerHTML = checkUndefined(newArray.qec3);
        document.getElementById("qec4").innerHTML = checkUndefined(newArray.qec4);
        document.getElementById("qec5").innerHTML = checkUndefined(newArray.qec5);
        document.getElementById("qec6").innerHTML = checkUndefined(newArray.qec6);
        document.getElementById("qec7").innerHTML = checkUndefined(newArray.qec7);
        document.getElementById("qec8").innerHTML = checkUndefined(newArray.qec8);
        document.getElementById("qec9").innerHTML = checkUndefined(newArray.qec9);
        document.getElementById("qec10").innerHTML = checkUndefined(newArray.qec10);
        document.getElementById("qec11").innerHTML = checkUndefined(newArray.qec11);
        document.getElementById("qec12").innerHTML = checkUndefined(newArray.qec12);
        document.getElementById("qec13").innerHTML = checkUndefined(newArray.qec13);
        document.getElementById("qfc1").innerHTML = checkUndefined(newArray.qfc1);
        document.getElementById("qfc2").innerHTML = checkUndefined(newArray.qfc2);
        document.getElementById("qfc3").innerHTML = checkUndefined(newArray.qfc3);
        document.getElementById("qfc4").innerHTML = checkUndefined(newArray.qfc4);
        document.getElementById("qfc5").innerHTML = checkUndefined(newArray.qfc5);
        document.getElementById("qfc6").innerHTML = checkUndefined(newArray.qfc6);
        document.getElementById("qfc7").innerHTML = checkUndefined(newArray.qfc7);
        document.getElementById("qfc8").innerHTML = checkUndefined(newArray.qfc8);
        document.getElementById("qfc9").innerHTML = checkUndefined(newArray.qfc9);
        document.getElementById("qgc1").innerHTML = checkUndefined(newArray.qgc1);
        document.getElementById("qgc2").innerHTML = checkUndefined(newArray.qgc2);
        document.getElementById("qgc3").innerHTML = checkUndefined(newArray.qgc3);
        document.getElementById("qgc4").innerHTML = checkUndefined(newArray.qgc4);
        document.getElementById("qgc5").innerHTML = checkUndefined(newArray.qgc5);
        document.getElementById("qgc6").innerHTML = checkUndefined(newArray.qgc6);
        document.getElementById("qgc7").innerHTML = checkUndefined(newArray.qgc7);
        document.getElementById("qgc8").innerHTML = checkUndefined(newArray.qgc8);
        document.getElementById("qgc9").innerHTML = checkUndefined(newArray.qgc9);
        document.getElementById("qgc10").innerHTML = checkUndefined(newArray.qgc10);
        document.getElementById("qgc11").innerHTML = checkUndefined(newArray.qgc11);
        document.getElementById("qgc12").innerHTML = checkUndefined(newArray.qgc12);
        document.getElementById("qgc13").innerHTML = checkUndefined(newArray.qgc13);
        document.getElementById("qhic1").innerHTML = checkUndefined(newArray.qhic1);
        document.getElementById("qhic2").innerHTML = checkUndefined(newArray.qghi2);
        document.getElementById("qhic3").innerHTML = checkUndefined(newArray.qhic3);
        document.getElementById("qhic4").innerHTML = checkUndefined(newArray.qhic4);
        document.getElementById("qhic5").innerHTML = checkUndefined(newArray.qhic5);
        document.getElementById("qhic6").innerHTML = checkUndefined(newArray.qhic6);
        document.getElementById("qhic7").innerHTML = checkUndefined(newArray.qhic7);
        document.getElementById("qhic8").innerHTML = checkUndefined(newArray.qhic8);
        document.getElementById("qhic9").innerHTML = checkUndefined(newArray.qhic9);
        document.getElementById("qhic10").innerHTML = checkUndefined(newArray.qhic10);
        document.getElementById("qhic11").innerHTML = checkUndefined(newArray.qhic11);
        document.getElementById("qhic12").innerHTML = checkUndefined(newArray.qhic12);
        document.getElementById("qhic13").innerHTML = checkUndefined(newArray.qhic13);
        document.getElementById("qhiic1").innerHTML = checkUndefined(newArray.qhiic1);
        document.getElementById("qhiic2").innerHTML = checkUndefined(newArray.qhiic2);
        document.getElementById("qhiic3").innerHTML = checkUndefined(newArray.qhiic3);
        document.getElementById("qhiic4").innerHTML = checkUndefined(newArray.qhiic4);
        document.getElementById("qhiic5").innerHTML = checkUndefined(newArray.qhiic5);
        document.getElementById("qhiic6").innerHTML = checkUndefined(newArray.qhiic6);
        document.getElementById("qhiic7").innerHTML = checkUndefined(newArray.qhiic7);
        document.getElementById("qhiic8").innerHTML = checkUndefined(newArray.qhiic8);
        document.getElementById("qhiic9").innerHTML = checkUndefined(newArray.qhiic9);
        document.getElementById("qhiic10").innerHTML = checkUndefined(newArray.qhiic10);
        document.getElementById("qhiic11").innerHTML = checkUndefined(newArray.qhiic11);
        document.getElementById("qhiic12").innerHTML = checkUndefined(newArray.qhiic12);
        document.getElementById("qhiic13").innerHTML = checkUndefined(newArray.qhiic13);
        document.getElementById("qhiiic1").innerHTML = checkUndefined(newArray.qhiiic1);
        document.getElementById("qhiiic2").innerHTML = checkUndefined(newArray.qhiiic2);
        document.getElementById("qhiiic3").innerHTML = checkUndefined(newArray.qhiiic3);
        document.getElementById("qhiiic4").innerHTML = checkUndefined(newArray.qhiiic4);
        document.getElementById("qhiiic5").innerHTML = checkUndefined(newArray.qhiiic5);
        document.getElementById("qhiiic6").innerHTML = checkUndefined(newArray.qhiiic6);
        document.getElementById("qhiiic7").innerHTML = checkUndefined(newArray.qhiiic7);
        document.getElementById("qhiiic8").innerHTML = checkUndefined(newArray.qhiiic8);
        document.getElementById("qhiiic9").innerHTML = checkUndefined(newArray.qhiiic9);
        document.getElementById("qhiiic10").innerHTML = checkUndefined(newArray.qhiiic10);
        document.getElementById("qhiiic11").innerHTML = checkUndefined(newArray.qhiiic11);
        document.getElementById("qhiiic12").innerHTML = checkUndefined(newArray.qhiiic12);
        document.getElementById("qhiiic13").innerHTML = checkUndefined(newArray.qhiiic13);
        document.getElementById("qic1").innerHTML = checkUndefined(newArray.qic1);
        document.getElementById("qic2").innerHTML = checkUndefined(newArray.qic2);
        document.getElementById("qic3").innerHTML = checkUndefined(newArray.qic3);
        document.getElementById("qic4").innerHTML = checkUndefined(newArray.qic4);

        document.getElementById("q1c1").innerHTML = checkUndefined(newArray.q1c1);
        document.getElementById("q1c2").innerHTML = checkUndefined(newArray.q1c2);
        document.getElementById("q1c3").innerHTML = checkUndefined(newArray.q1c3);
        document.getElementById("q1c4").innerHTML = checkUndefined(newArray.q1c4);
        document.getElementById("q1c5").innerHTML = checkUndefined(newArray.q1c5);
        document.getElementById("q1c6").innerHTML = checkUndefined(newArray.q1c6);
        document.getElementById("q1c7").innerHTML = checkUndefined(newArray.q1c7);
        document.getElementById("q2Happy").innerHTML = checkUndefined(newArray.q2Happy);
        document.getElementById("q2Laughing").innerHTML = checkUndefined(newArray.q2Laughing);
        document.getElementById("q2Sad").innerHTML = checkUndefined(newArray.q2Sad);
        document.getElementById("q2Angry").innerHTML = checkUndefined(newArray.q2Angry);
        document.getElementById("q2Irritated").innerHTML = checkUndefined(newArray.q2Irritated);
        document.getElementById("q2Disgusted").innerHTML = checkUndefined(newArray.q2Disgusted);
        document.getElementById("q2Fearful").innerHTML = checkUndefined(newArray.q2Fearful);
        document.getElementById("q2Surprised").innerHTML = checkUndefined(newArray.q2Surprised);
        document.getElementById("q2Bored").innerHTML = checkUndefined(newArray.q2Bored);
        document.getElementById("q2Confused").innerHTML = checkUndefined(newArray.q2Confused);
        document.getElementById("q2Touched").innerHTML = checkUndefined(newArray.q2Touched);
        document.getElementById("q2NoReaction").innerHTML = checkUndefined(newArray.q2NoReaction);
        document.getElementById("q3c1").innerHTML = checkUndefined(newArray.q3c1);
        document.getElementById("q3c2").innerHTML = checkUndefined(newArray.q3c2);
        document.getElementById("q3c3").innerHTML = checkUndefined(newArray.q3c3);
        document.getElementById("q3c4").innerHTML = checkUndefined(newArray.q3c4);
        document.getElementById("q3c5").innerHTML = checkUndefined(newArray.q3c5);
        document.getElementById("q3c6").innerHTML = checkUndefined(newArray.q3c6);
        document.getElementById("q3c7").innerHTML = checkUndefined(newArray.q3c7);
        document.getElementById("q5c1").innerHTML = checkUndefined(newArray.q5c1);
        document.getElementById("q5c2").innerHTML = checkUndefined(newArray.q5c2);
        document.getElementById("q5c3").innerHTML = checkUndefined(newArray.q5c3);
        document.getElementById("q5c4").innerHTML = checkUndefined(newArray.q5c4);
        document.getElementById("q5c5").innerHTML = checkUndefined(newArray.q5c5);
        document.getElementById("q6c1").innerHTML = checkUndefined(newArray.q6c1);
        document.getElementById("q6c2").innerHTML = checkUndefined(newArray.q6c2);
        document.getElementById("q6c3").innerHTML = checkUndefined(newArray.q6c3);
        document.getElementById("q6c4").innerHTML = checkUndefined(newArray.q6c4);
        document.getElementById("q6c5").innerHTML = checkUndefined(newArray.q6c5);
        document.getElementById("q6c6").innerHTML = checkUndefined(newArray.q6c6);
        document.getElementById("q6c7").innerHTML = checkUndefined(newArray.q6c7);
        document.getElementById("q6c8").innerHTML = checkUndefined(newArray.q6c8);
        document.getElementById("q6c9").innerHTML = checkUndefined(newArray.q6c9);
        document.getElementById("q6c10").innerHTML = checkUndefined(newArray.q6c10);
        document.getElementById("q7c1").innerHTML = checkUndefined(newArray.q7c1);
        document.getElementById("q7c2").innerHTML = checkUndefined(newArray.q7c2);
        document.getElementById("q7c3").innerHTML = checkUndefined(newArray.q7c3);
        document.getElementById("q7c4").innerHTML = checkUndefined(newArray.q7c4);
        document.getElementById("q7c5").innerHTML = checkUndefined(newArray.q7c5);
        document.getElementById("q8c1").innerHTML = checkUndefined(newArray.q8c1);
        document.getElementById("q8c2").innerHTML = checkUndefined(newArray.q8c2);
        document.getElementById("q8c3").innerHTML = checkUndefined(newArray.q8c3);
        document.getElementById("q8c4").innerHTML = checkUndefined(newArray.q8c4);
        document.getElementById("q8c5").innerHTML = checkUndefined(newArray.q8c5);
        document.getElementById("q8c6").innerHTML = checkUndefined(newArray.q8c6);
        document.getElementById("q9c1").innerHTML = checkUndefined(newArray.q9c1);
        document.getElementById("q9c2").innerHTML = checkUndefined(newArray.q9c2);
        document.getElementById("q9c3").innerHTML = checkUndefined(newArray.q9c3);
        document.getElementById("q9c4").innerHTML = checkUndefined(newArray.q9c4);
        document.getElementById("q9c5").innerHTML = checkUndefined(newArray.q9c5);
        document.getElementById("q9c6").innerHTML = checkUndefined(newArray.q9c6);
        document.getElementById("q11ac1").innerHTML = checkUndefined(newArray.q11ac1);
        document.getElementById("q11ac2").innerHTML = checkUndefined(newArray.q11ac2);
        document.getElementById("q11ac3").innerHTML = checkUndefined(newArray.q11ac3);
        document.getElementById("q11ac4").innerHTML = checkUndefined(newArray.q11ac4);
        document.getElementById("q11ac5").innerHTML = checkUndefined(newArray.q11ac5);
        document.getElementById("q11ac6").innerHTML = checkUndefined(newArray.q11ac6);
        document.getElementById("q11bc1").innerHTML = checkUndefined(newArray.q11bc1);
        document.getElementById("q11bc2").innerHTML = checkUndefined(newArray.q11bc2);
        document.getElementById("q11bc3").innerHTML = checkUndefined(newArray.q11bc3);
        document.getElementById("q11bc4").innerHTML = checkUndefined(newArray.q11bc4);
        document.getElementById("q11bc5").innerHTML = checkUndefined(newArray.q11bc5);
        document.getElementById("q11bc6").innerHTML = checkUndefined(newArray.q11bc6);
        document.getElementById("q12c1").innerHTML = checkUndefined(newArray.q12c1);
        document.getElementById("q12c2").innerHTML = checkUndefined(newArray.q12c2);
        document.getElementById("q12c3").innerHTML = checkUndefined(newArray.q12c3);
        document.getElementById("q12c4").innerHTML = checkUndefined(newArray.q12c4);
        document.getElementById("q13c1").innerHTML = checkUndefined(newArray.q13c1);
        document.getElementById("q13c2").innerHTML = checkUndefined(newArray.q13c2);
        document.getElementById("q13c3").innerHTML = checkUndefined(newArray.q13c3);
        document.getElementById("q13c4").innerHTML = checkUndefined(newArray.q13c4);
        document.getElementById("q14c1").innerHTML = checkUndefined(newArray.q14c1);
        document.getElementById("q14c2").innerHTML = checkUndefined(newArray.q14c2);
        document.getElementById("q14c3").innerHTML = checkUndefined(newArray.q14c3);
        document.getElementById("q14c4").innerHTML = checkUndefined(newArray.q14c4);
    });
    
}

function checkUndefined(val){
    var v = val;
    if(val!=undefined)
        return val;
    else return 0;
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