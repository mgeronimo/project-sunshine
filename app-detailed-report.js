window.onload = function() {
    var ref = firebase.database().ref().child("allerta1/interviews");
    ref.once("value").then(function(snapshot) {
    	var ccount=0;
    	var reportsTable = "";
        snapshot.forEach(function(childSnapshot) {
            reportsTable += "<tr>";
            reportsTable += "<td>" + checkUndefined(childSnapshot.val().questionnaire_no) + "</td>";
            reportsTable += "<td>" + checkUndefined(childSnapshot.val().interviewerId) + "</td>";
            reportsTable += "<td>" + checkUndefined(childSnapshot.val().interviewerName) + "</td>";
            reportsTable += "<td>" + checkUndefined(childSnapshot.val().respondentName) + "</td>";
            reportsTable += "<td>" + checkUndefined(childSnapshot.val().address) + "</td>";
            reportsTable += "<td>" + checkUndefined(childSnapshot.val().eadd) + "</td>";
            reportsTable += "<td>" + checkUndefined(childSnapshot.val().mobile) + "</td>";
            reportsTable += "<td>" + checkUndefined(childSnapshot.val().homeTel) + "</td>";
            reportsTable += "<td>" + checkUndefined(childSnapshot.val().officeTel) + "</td>";
            reportsTable += "<td>" + checkUndefined(childSnapshot.val().date) + "</td>";
            reportsTable += "<td>" + checkUndefined(childSnapshot.val().time) + "</td>";

            reportsTable += "<td>" + checkUndefined(childSnapshot.val().qa).toString().replace('qa','')  + "</td>";
            reportsTable += "<td>" + checkUndefined(childSnapshot.val().qb).toString().replace('qb','')  + "</td>";
            reportsTable += "<td>" + checkUndefined(childSnapshot.val().qc).toString().replace('qc','')  + "</td>";
            reportsTable += "<td>" + checkUndefined(childSnapshot.val().qd).toString().replace('qd','')  + "</td>";
            reportsTable += "<td>" + replaceQ(checkUndefined(childSnapshot.val().qe), 'qe') + "</td>";
            reportsTable += "<td>" + checkUndefined(childSnapshot.val().qf).toString().replace('qf','')  + "</td>";
            reportsTable += "<td>" + replaceQ(checkUndefined(childSnapshot.val().qg), 'qg') + "</td>";
            reportsTable += "<td>" + replaceQ(checkUndefined(childSnapshot.val().qhi), 'qhi')  + "</td>";
            reportsTable += "<td>" + replaceQ(checkUndefined(childSnapshot.val().qhii), 'qhii')  + "</td>";
            reportsTable += "<td>" + replaceQ(checkUndefined(childSnapshot.val().qhiii), 'qhiii')  + "</td>";
            reportsTable += "<td>" + checkUndefined(childSnapshot.val().qi).toString().replace('qi','')  + "</td>";

            reportsTable += "<td>" + checkUndefined(childSnapshot.val().q1).toString().replace('q1','')  + "</td>";
            reportsTable += "<td>" + checkUndefined(childSnapshot.val().q2).toString().replace('q2','') + "</td>";
            reportsTable += "<td>" + checkUndefined(childSnapshot.val().q3).toString().replace('q3','')  + "</td>";
            reportsTable += "<td>" + checkUndefined(childSnapshot.val().q3b).toString().replace('q3b','')  + "</td>";
            reportsTable += "<td>" + checkUndefined(childSnapshot.val().q3bOthers) + "</td>";
            reportsTable += "<td>" + checkUndefined(childSnapshot.val().q5).toString().replace('q5','')  + "</td>";
            reportsTable += "<td>" + replaceQ(checkUndefined(childSnapshot.val().q6), 'q6')  + "</td>";
            reportsTable += "<td>" + replaceQ(checkUndefined(childSnapshot.val().q6), 'q6')  + "</td>";
            reportsTable += "<td>" + checkUndefined(childSnapshot.val().q8).toString().replace('q8','')  + "</td>";
            reportsTable += "<td>" + checkUndefined(childSnapshot.val().q9).toString().replace('q9','')  + "</td>";
            reportsTable += "<td>" + checkUndefined(childSnapshot.val().q10).toString().replace('q10','')  + "</td>";
            reportsTable += "<td>" + checkUndefined(childSnapshot.val().q11).toString().replace('q11a','')  + "</td>";
            reportsTable += "<td>" + replaceQ(checkUndefined(childSnapshot.val().q11b), 'q11b')  + "</td>";
            reportsTable += "<td>" + checkUndefined(childSnapshot.val().q12).toString().replace('q12','')  + "</td>";
            reportsTable += "<td>" + checkUndefined(childSnapshot.val().q13).toString().replace('q13','')  + "</td>";
            reportsTable += "<td>" + checkUndefined(childSnapshot.val().q14).toString().replace('q14','')  + "</td>";

            reportsTable += "</tr>";
            ccount++;
        }); 
        document.getElementById('ccount').innerHTML = ccount;
        document.getElementById('table_body').innerHTML = reportsTable;
    });
    
}

function replaceQ(strAnswers, chars){
    var i=0;
    for(i=0; i<strAnswers.length; i++){
    	strAnswers[i] = strAnswers[i].toString().replace(chars,'');
    }
    return strAnswers;
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