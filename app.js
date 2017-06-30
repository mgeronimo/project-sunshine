var questionCount = 1;
var commCount = 0;
var unlockBackground = false;
var product = $('#product')[0].dataset.name;
window.onload = function() {
    console.log(product);
    demo.showSwal('language');
    loadEmotions();
    randomizeScenes();
    return;
    var ref = firebase.database().ref().child("allerta1" + "/interviews");
    var newArray = [];
    ref.once("value").then(function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            //console.log(childSnapshot.val().respondentName);
        });
    });

}

function showQghi() {
    if (!$('#qe3c2').is(":checked")) {
        demo.showSwal('ailmentAlert');
        return;
    }
    $('.qghiSection').show();
    $('.qghiGate').hide();
    unlockBackground = true;
    $('.btn-next').prop('disabled', false);
}

function showQfghi() {
    //if (!$('#qec3').is(":checked") && !$('#qec12').is(":checked") && !$('#qec13').is(":checked")) {
    //   demo.showSwal('ailmentAlert');
    //   return;
    //}
    $('.qfghiSection').show();
    $('.qfghiGate').hide();
}

function ageRestrict() {
    var age = $('#respondent_age').val();
    if (age < 18 || age > 55) {
        demo.showSwal('ageAlert');
    }
}

function submitInc() {
    //Store interviewer and respondent information
    var interviewerName = $('#interviewer_name').val();
    var interviewerId = $('#interviewer_id').val();
    var date = $('#interview_date').val();
    var center_location = $('#center_location').val();
    var questionnaire_no = $('#questionnaire_no').val();
    var respondentName = $('#respondent_name').val();
    var address = $('#respondent_address').val();
    var homeTel = $('#respondent_hometel').val();
    var officeTel = $('#respondent_officetel').val();
    var eadd = $('#respondent_email').val();
    var mobile = $('#respondent_mobile').val();

    var age = $('#respondent_age').val();
    var qa = ($('input[name=qaRadio]:checked').length > 0) ? $('input[name=qaRadio]:checked')[0].dataset.name : 0;
    var qb = ($('input[name=qbRadio]:checked').length > 0) ? $('input[name=qbRadio]:checked')[0].dataset.name : 0;
    var QEAnswers = [];
    for (var i = 1; i <= 14; i++) {
        if ($('#qec' + i).is(":checked")) {
            //updateCount('qec' + i);
            console.log('qec' + i);
            QEAnswers.push('qec' + i);
        }
    }
    var QE2Answers = [];
    for (var i = 1; i <= 10; i++) {
        if ($('#qe2c' + i).is(":checked")) {
            //updateCount('qe2c' + i);
            console.log('qe2c' + i);
            QE2Answers.push('qe2c' + i);
        }
    }
    var QE3Answers = [];
    for (var i = 1; i <= 6; i++) {
        if ($('#qe3c' + i).is(":checked")) {
            //updateCount('qe3c' + i);
            console.log('qe3c' + i);
            QE3Answers.push('qe3c' + i);
        }
    }
    var QFAnswers = [];
    for (var i = 1; i <= 9; i++) {
        if ($('#qfc' + i).is(":checked")) {
            //updateCount('qfc' + i);
            console.log('qfc' + i);
            QFAnswers.push('qfc' + i);
        }
    }
    var rawAnswer = {
        'interviewerName': interviewerName,
        'interviewerId': interviewerId,
        'date': date,
        'location': center_location,
        'questionnaire_no': questionnaire_no,
        'respondentName': respondentName,
        'address': address,
        'homeTel': homeTel,
        'officeTel': officeTel,
        'eadd': eadd,
        'mobile': mobile,
        'qa': qa,
        'qb': qb,
        'qe': QEAnswers,
        'qe2': QE2Answers,
        'qe3': QE3Answers,
        'qf': QFAnswers
    };
    console.log(rawAnswer);
    var info = firebase.database().ref(product + '/failedInterviews');
    var newInterview = info.push();
    newInterview.set(rawAnswer).then(function() {
        demo.showSwal('save-success');
    });
}

function submit() {
    console.log("submit");
    $('.wizard-card').find('.btn-finish').prop('disabled', true);


    //Store interviewer and respondent information
    var interviewerName = $('#interviewer_name').val();
    var interviewerId = $('#interviewer_id').val();
    var date = $('#interview_date').val();
    var center_location = $('#center_location').val();
    var questionnaire_no = $('#questionnaire_no').val();
    var respondentName = $('#respondent_name').val();
    var address = $('#respondent_address').val();
    var homeTel = $('#respondent_hometel').val();
    var officeTel = $('#respondent_officetel').val();
    var eadd = $('#respondent_email').val();
    var mobile = $('#respondent_mobile').val();




    var rawAnswer = {
        'interviewerName': interviewerName,
        'interviewerId': interviewerId,
        'date': date,
        'location': center_location,
        'questionnaire_no': questionnaire_no,
        'respondentName': respondentName,
        'address': address,
        'homeTel': homeTel,
        'officeTel': officeTel,
        'eadd': eadd,
        'mobile': mobile
    };



    //QA
    var selection = $('input[name=qaRadio]:checked');
    if (selection.length > 0) {
        console.log(selection[0].dataset.name);
        updateCount(selection[0].dataset.name);
        rawAnswer.qa = selection[0].dataset.name;
    }

    //QB
    selection = $('input[name=qbRadio]:checked');
    if (selection.length > 0) {
        console.log(selection[0].dataset.name);
        updateCount(selection[0].dataset.name);
        rawAnswer.qb = selection[0].dataset.name;
    }

    //QC
    var respondent_age = $('#respondent_age').val();
    console.log(respondent_age);
    if (respondent_age >= 18 && respondent_age <= 25) {
        updateCount('qcc1');
        rawAnswer.qc = 'qcc1';
    }
    if (respondent_age >= 26 && respondent_age <= 35) {
        updateCount('qcc2');
        rawAnswer.qc = 'qcc2';
    }
    if (respondent_age >= 36 && respondent_age <= 45) {
        updateCount('qcc3');
        rawAnswer.qc = 'qcc3';
    }
    if (respondent_age >= 46 && respondent_age <= 55) {
        updateCount('qcc4');
        rawAnswer.qc = 'qcc4';
    }
    //Add age to ageSet
    var ageRef = firebase.database().ref(product + '/ageSet');
    var newAge = ageRef.push();
    newAge.set({
        'count': Number(respondent_age)
    }).then(function() {
        console.log("Added age to ageSet");
        //Get mode from ageSet
        ageRef.once("value").then(function(snapshot) {
            var ageArray = [];
            snapshot.forEach(function(childSnapshot) {
                ageArray.push(Number(childSnapshot.val().count));
            });
            //Set ageMode;
            var modeRef = firebase.database().ref(product + '/results/ageMode');
            modeRef.child('count').set(Number(getMode(ageArray)));

            //Set ageMean
            var meanRef = firebase.database().ref(product + '/results/ageMean');
            meanRef.child('count').set(Number(getMean(ageArray)));
        });
    });

    //QD
    selection = $('input[name=sexRadioChoice]:checked');
    console.log(selection[0].dataset.name);
    updateCount(selection[0].dataset.name);
    rawAnswer.qd = selection[0].dataset.name;

    //QE
    var QEAnswers = [];
    for (var i = 1; i <= 14; i++) {
        if ($('#qec' + i).is(":checked")) {
            updateCount('qec' + i);
            console.log('qec' + i);
            QEAnswers.push('qec' + i);
        }
    }
    rawAnswer.qe = QEAnswers;

    //QE2
    var QE2Answers = [];
    for (var i = 1; i <= 10; i++) {
        if ($('#qe2c' + i).is(":checked")) {
            updateCount('qe2c' + i);
            console.log('qe2c' + i);
            QE2Answers.push('qe2c' + i);
        }
    }
    rawAnswer.qe2 = QE2Answers;

    //QE3
    var QE3Answers = [];
    for (var i = 1; i <= 6; i++) {
        if ($('#qe3c' + i).is(":checked")) {
            updateCount('qe3c' + i);
            console.log('qe3c' + i);
            QE3Answers.push('qe3c' + i);
        }
    }
    rawAnswer.qe3 = QE3Answers;

    //QF
    var QFAnswers = [];
    for (var i = 1; i <= 9; i++) {
        if ($('#qfc' + i).is(":checked")) {
            updateCount('qfc' + i);
            console.log('qfc' + i);
            QFAnswers.push('qfc' + i);
        }
    }
    rawAnswer.qf = QFAnswers;
    rawAnswer.qfOthers = $('#qfc10').val();

    //QG
    var QGAnswers = [];
    for (var i = 1; i <= 14; i++) {
        if ($('#qgc' + i).is(":checked")) {
            updateCount('qgc' + i);
            console.log('qgc' + i);
            QGAnswers.push('qgc' + i);
        }
    }
    rawAnswer.qg = QGAnswers;

    //QHi
    var QHiAnswers = [];
    for (var i = 1; i <= 14; i++) {
        if ($('#qhic' + i).is(":checked")) {
            updateCount('qhic' + i);
            console.log('qhic' + i);
            QHiAnswers.push('qhic' + i);
        }
    }
    rawAnswer.qhi = QHiAnswers;

    //QHii
    var QHiiAnswers = [];
    for (var i = 1; i <= 14; i++) {
        if ($('#qhiic' + i).is(":checked")) {
            updateCount('qhiic' + i);
            console.log('qhiic' + i);
            QHiiAnswers.push('qhiic' + i);
        }
    }
    rawAnswer.qhii = QHiiAnswers;

    //QHiii
    var QHiiiAnswers = [];
    for (var i = 1; i <= 14; i++) {
        if ($('#qhiiic' + i).is(":checked")) {
            updateCount('qhiiic' + i);
            console.log('qhiiic' + i);
            QHiiiAnswers.push('qhiiic' + i);
        }
    }
    rawAnswer.qhiii = QHiiiAnswers;

    //qghOthers
    rawAnswer.qghOthers = $('#qghOthers').val();

    //QI
    selection = $('input[name=qiRadio]:checked');
    console.log(selection[0].dataset.name);
    updateCount(selection[0].dataset.name);
    rawAnswer.qi = selection[0].dataset.name;

    //Q1
    $('a[name=q1Radio]').each(function(index) {
        if ($(this).hasClass('btn-warning')) {
            var indexCount = index + 1;
            updateCount('q1c' + indexCount);
            console.log('q1c' + indexCount);
            rawAnswer.q1 = 'q1c' + indexCount;

            //Add response to q1Set
            var q1Ref = firebase.database().ref(product + '/q1Set/set');
            q1Ref.once("value").then(function(snapshot) {
                var currQ1Set = snapshot.val();
                currQ1Set.push(indexCount);
                q1Ref.set(currQ1Set);
                //console.log(currQ1Set);

                //Set Q1 Mean
                var q1MeanRef = firebase.database().ref(product + '/results/q1Mean');
                q1MeanRef.child('count').set(Number(getMean(currQ1Set)));


                //Set Q1 Std Dev
                var q1StdRef = firebase.database().ref(product + '/results/q1Std');
                q1StdRef.child('count').set(Number(getStdDev(currQ1Set)));


            }).catch(function(error) {
                console.log("No array of Q1 answers yet. Push first answer.");
                q1Ref.set([indexCount]);
            });
        }
    });

    //Q2
    $('img[name=q2Radio]').each(function(index) {
        if ($(this).hasClass('green-bg')) {
            console.log($(this)[0].dataset.name);
            updateCount($(this)[0].dataset.name);
            rawAnswer.q2 = $(this)[0].dataset.name;
        }
    });


    //Q3
    $('a[name=q3Radio]').each(function(index) {
        if ($(this).hasClass('btn-warning')) {
            var indexCount = index + 1;
            updateCount('q3c' + indexCount);
            console.log('q3c' + indexCount);
            rawAnswer.q3 = 'q3c' + indexCount;

            //Add response to q3Set
            var q3Ref = firebase.database().ref(product + '/q3Set/set');
            q3Ref.once("value").then(function(snapshot) {
                var currQ3Set = snapshot.val();
                currQ3Set.push(indexCount);
                q3Ref.set(currQ3Set);
                //console.log(currQ3Set);

                //Set Q3 Mean
                var q3MeanRef = firebase.database().ref(product + '/results/q3Mean');
                q3MeanRef.child('count').set(Number(getMean(currQ3Set)));


                //Set Q3 Std Dev
                var q3StdRef = firebase.database().ref(product + '/results/q3Std');
                q3StdRef.child('count').set(Number(getStdDev(currQ3Set)));


            }).catch(function(error) {
                console.log("No array of Q3 answers yet. Push first answer.");
                q3Ref.set([indexCount]);
            });
        }
    });

    //Q3b
    selection = $('input[name=q3bRadio]:checked');
    if (selection.length > 0) {
        console.log(selection[0].dataset.name);
        updateCount(selection[0].dataset.name);
        rawAnswer.q3b = selection[0].dataset.name;
    }
    rawAnswer.q3bOthers = $('#q3bc7').val();


    //Q5
    selection = $('input[name=q5Radio]:checked');
    console.log(selection[0].dataset.name);
    updateCount(selection[0].dataset.name);
    rawAnswer.q5 = selection[0].dataset.name;

    //Q6
    var Q6Answers = [];
    $('img[name=q6Radio]').each(function(index) {
        if ($(this).hasClass('green-bg')) {
            console.log($(this)[0].dataset.name);
            updateCount($(this)[0].dataset.name);
            Q6Answers.push($(this)[0].dataset.name);
        }
    });
    rawAnswer.q6 = Q6Answers;

    //Q7
    //Assign placement counts to selected images
    var Q7Answers = [];
    $('.q7Radio').each(function(index) {
        var indexCount = index + 1;
        var q7Ref = firebase.database().ref(product + '/q7Set/' + $(this)[0].dataset.name + '/' + indexCount);
        Q7Answers.push($(this)[0].dataset.name);

        q7Ref.once("value").then(function(snapshot) {
            q7Ref.child('count').set(snapshot.val().count + 1);
        }).catch(function(error) {
            console.log("No entry on this yet. Created one with 1 count.");
            q7Ref.child('count').set(1);
        });
    });
    rawAnswer.q7 = Q7Answers;


    //Set first position
    var q7Rank = firebase.database().ref(product + '/q7Set/');
    var q7Array = [];
    var maxCount;

    //Look for highest value
    q7Rank.once("value").then(function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            var currVal = null;
            if ('1' in childSnapshot.val()) {
                currVal = childSnapshot.val()[1].count;
            }
            //console.log(childSnapshot.key);
            //console.log(currVal);
            if (currVal != null) {
                q7Array.push(currVal);
            }
        });

        //console.log(q7Array);
        maxCount = Math.max.apply(Math, q7Array);
        //console.log(maxCount);


        //Match highest value
        q7Rank.once("value").then(function(snapshot) {
            snapshot.forEach(function(childSnapshot) {
                var currVal = null;
                if ('1' in childSnapshot.val()) {
                    currVal = childSnapshot.val()[1].count;
                }
                //console.log(childSnapshot.key);
                //console.log(currVal);
                if (currVal == maxCount) {
                    updatePosition('q7c1', childSnapshot.key);
                    rawAnswer.q7c1 = childSnapshot.key;
                }
            });

        });
    });
    var q7Array2 = [];
    var maxCount2;

    //Set second position

    //Look for highest value
    q7Rank.once("value").then(function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            var currVal = null;
            if ('2' in childSnapshot.val()) {
                currVal = childSnapshot.val()[2].count;
            }
            //console.log(childSnapshot.key);
            //console.log(currVal);
            if (currVal != null) {
                q7Array2.push(currVal);
            }
        });

        //console.log(q7Array2);
        maxCount2 = Math.max.apply(Math, q7Array2);
        //console.log(maxCount2);


        //Match highest value
        q7Rank.once("value").then(function(snapshot) {
            snapshot.forEach(function(childSnapshot) {
                var currVal = null;
                if ('2' in childSnapshot.val()) {
                    currVal = childSnapshot.val()[2].count;
                }
                //console.log(childSnapshot.key);
                //console.log(currVal);
                if (currVal == maxCount2) {
                    updatePosition('q7c2', childSnapshot.key);
                    rawAnswer.q7c2 = childSnapshot.key;
                }
            });

        });
    });


    var q7Array3 = [];
    var maxCount3;

    //Set third position

    //Look for highest value
    q7Rank.once("value").then(function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            var currVal = null;
            if ('3' in childSnapshot.val()) {
                currVal = childSnapshot.val()[3].count;
            }
            //console.log(childSnapshot.key);
            //console.log(currVal);
            if (currVal != null) {
                q7Array3.push(currVal);
            }
        });

        //console.log(q7Array3);
        maxCount3 = Math.max.apply(Math, q7Array3);
        //console.log(maxCount3);


        //Match highest value
        q7Rank.once("value").then(function(snapshot) {
            snapshot.forEach(function(childSnapshot) {
                var currVal = null;
                if ('3' in childSnapshot.val()) {
                    currVal = childSnapshot.val()[3].count;
                }
                //console.log(childSnapshot.key);
                //console.log(currVal);
                if (currVal == maxCount3) {
                    updatePosition('q7c3', childSnapshot.key);
                    rawAnswer.q7c3 = childSnapshot.key;
                }
            });

        });
    });


    var q7Array4 = [];
    var maxCount4;

    //Set fourth position

    //Look for highest value
    q7Rank.once("value").then(function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            var currVal = null;
            if ('4' in childSnapshot.val()) {
                currVal = childSnapshot.val()[4].count;
            }
            //console.log(childSnapshot.key);
            //console.log(currVal);
            if (currVal != null) {
                q7Array4.push(currVal);
            }
        });

        //console.log(q7Array4);
        maxCount4 = Math.max.apply(Math, q7Array4);


        //Match highest value
        q7Rank.once("value").then(function(snapshot) {
            snapshot.forEach(function(childSnapshot) {
                var currVal = null;
                if ('4' in childSnapshot.val()) {
                    currVal = childSnapshot.val()[4].count;
                }
                //console.log(childSnapshot.key);
                //console.log('currVal is ' + currVal);
                if (currVal == maxCount4) {
                    updatePosition('q7c4', childSnapshot.key);
                    rawAnswer.q7c4 = childSnapshot.key;
                }
            });

        });
    });



    var q7Array5 = [];
    var maxCount5;

    //Set fifth position

    //Look for highest value
    q7Rank.once("value").then(function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            var currVal = null;
            if ('5' in childSnapshot.val()) {
                currVal = childSnapshot.val()[5].count;
            }
            //console.log(childSnapshot.key);
            //console.log(currVal);
            if (currVal != null) {
                q7Array5.push(currVal);
            }
        });

        //console.log(q7Array5);
        maxCount5 = Math.max.apply(Math, q7Array5);


        //Match highest value
        q7Rank.once("value").then(function(snapshot) {
            snapshot.forEach(function(childSnapshot) {
                var currVal = null;
                if ('5' in childSnapshot.val()) {
                    currVal = childSnapshot.val()[5].count;
                }
                //console.log(childSnapshot.key);
                //console.log('currVal is ' + currVal);
                if (currVal == maxCount5) {
                    updatePosition('q7c5', childSnapshot.key);
                    rawAnswer.q7c5 = childSnapshot.key;
                }
            });

        });
    });

    //Q8
    selection = $('input[name=q8Radio]:checked');
    console.log(selection[0].dataset.name);
    updateCount(selection[0].dataset.name);
    rawAnswer.q8 = selection[0].dataset.name;

    //Q9
    selection = $('input[name=q9Radio]:checked');
    console.log(selection[0].dataset.name);
    updateCount(selection[0].dataset.name);
    rawAnswer.q9 = selection[0].dataset.name;

    //Q11
    selection = $('input[name=mostStronglyRadio]:checked');
    if (selection.length > 0) {
        updateCount(selection[0].dataset.name);
        console.log(selection[0].dataset.name);
        rawAnswer.q11 = selection[0].dataset.name;
    }

    //Q11 None of the above
    selection = $('input[name=mostStronglyCheckbox]:checked');
    if (selection.length > 0) {
        console.log(selection[0].dataset.name);
        updateCount(selection[0].dataset.name);
        rawAnswer.q11 = selection[0].dataset.name;
    }

    //Q11b
    var Q11bAnswers = [];
    selection = $('input[name=notReallyCheck]:checked');
    for (var i = 0; i < selection.length; i++) {
        console.log(selection[i].dataset.name);
        updateCount(selection[i].dataset.name);
        Q11bAnswers.push(selection[i].dataset.name);
    }
    rawAnswer.q11b = Q11bAnswers;

    //Q12
    selection = $('input[name=q12Radio]:checked');
    console.log(selection[0].dataset.name);
    updateCount(selection[0].dataset.name);
    rawAnswer.q12 = selection[0].dataset.name;

    //Q13
    selection = $('input[name=q13Radio]:checked');
    console.log(selection[0].dataset.name);
    updateCount(selection[0].dataset.name);
    rawAnswer.q13 = selection[0].dataset.name;

    //Q14
    selection = $('input[name=q14Radio]:checked');
    console.log(selection[0].dataset.name);
    rawAnswer.q14 = selection[0].dataset.name;
    var finalRef = firebase.database().ref(product + '/results/' + selection[0].dataset.name);
    finalRef.once("value").then(function(snapshot) {
        finalRef.child('count').set(snapshot.val().count + 1);
        console.log(selection[0].dataset.name + " has been saved");
    }).catch(function(error) {
        finalRef.child('count').set(1);
        console.log("No entry on this " + rawAnswer.q14 + " yet. Created one with 1 count.");
    });

    if (product == 'tuseran') {
        //Q15
        $('a[name=q15Radio]').each(function(index) {
            if ($(this).hasClass('btn-warning')) {
                var indexCount = index + 1;
                updateCount('q15c' + indexCount);
                console.log('q15c' + indexCount);
                rawAnswer.q15 = 'q15c' + indexCount;
            }
        });

        //Q16
        selection = $('input[name=q16Radio]:checked');
        console.log(selection[0].dataset.name);
        updateCount(selection[0].dataset.name);
        rawAnswer.q16 = selection[0].dataset.name;

        //Q17
        selection = $('input[name=q17Radio]:checked');
        if (selection.length > 0) {
            updateCount(selection[0].dataset.name);
            console.log(selection[0].dataset.name);
            rawAnswer.q17 = selection[0].dataset.name;
        }
        rawAnswer.q17Others = $('#q17Others').val();

    }

    //Record the time
    rawAnswer.time = $('#time').html();

    var info = firebase.database().ref(product + '/interviews');
    var newInterview = info.push();
    newInterview.set(rawAnswer).then(function() {
        demo.showSwal('save-success');
    });


}

function updatePosition(code, winner) {
    var ref = firebase.database().ref(product + '/results/' + code);
    ref.once("value").then(function(snapshot) {
        ref.child('count').set(winner);
    });
}

function getMean(array) {
    var sum = 0,
        i;
    for (i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return array.length ? sum / array.length : 0;
}


function getMode(ary) {
    var counter = {};
    var mode;
    var max = 0;
    for (var i in ary) {
        if (!(ary[i] in counter))
            counter[ary[i]] = 0;
        counter[ary[i]]++;

        if (counter[ary[i]] == max)
            mode = ary[i];
        else if (counter[ary[i]] > max) {
            max = counter[ary[i]];
            mode = [ary[i]];
        }
    }
    return mode[0];
}

function getStdDev(numbersArr) {
    //Get Mean
    var meanVal = getMean(numbersArr);

    //Get Std. Dev.
    var SDprep = 0;
    for (var key in numbersArr)
        SDprep += Math.pow((parseFloat(numbersArr[key]) - meanVal), 2);
    var SDresult = Math.sqrt(SDprep / numbersArr.length);
    return SDresult;

}

function updateCount(code) {
    var ref = firebase.database().ref(product + '/results/' + code);
    ref.once("value").then(function(snapshot) {
        ref.child('count').set(snapshot.val().count + 1);
        console.log(code + " has been saved");
    }).catch(function(error) {
        console.log("No entry on this " + code + " yet. Created one with 1 count.");
        ref.child('count').set(1);
    });
}

function showQ2() {
    $('.q2Section').css('display', '');
}

function hideQ2() {
    $('.q2Section').css('display', 'none');
}

function showQ3b() {
    $('.q3bSection').css('display', '');
}

function hideQ3b() {
    $('.q3bSection').css('display', 'none');
}

function pad2(number) {
    return (number < 10 ? '0' : '') + number
}


function randomizeScenes() {
    var sceneArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    sceneArray = shuffle(sceneArray);
    for (var i = 0; i < sceneArray.length; i++) {
        $('#comm-img' + sceneArray[i]).attr('src', 'assets/tuseran/tuseran' + (i + 1) + '.png');
        $('#comm-img' + sceneArray[i]).attr('data-name', 'q6c' + (i + 1));
    }
}


function loadEmotions() {
    var emotionArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    emotionArray = shuffle(emotionArray);

    $('#female' + emotionArray[0]).attr('src', 'assets/img/emotion-female-cropped/happy-female.jpg');
    $('#female' + emotionArray[0]).attr('data-name', 'q2Happy');
    $('#female' + emotionArray[1]).attr('src', 'assets/img/emotion-female-cropped/laughing-female.jpg');
    $('#female' + emotionArray[1]).attr('data-name', 'q2Laughing');
    $('#female' + emotionArray[2]).attr('src', 'assets/img/emotion-female-cropped/sad-female.jpg');
    $('#female' + emotionArray[2]).attr('data-name', 'q2Sad');
    $('#female' + emotionArray[3]).attr('src', 'assets/img/emotion-female-cropped/angry-female.jpg');
    $('#female' + emotionArray[3]).attr('data-name', 'q2Angry');
    $('#female' + emotionArray[4]).attr('src', 'assets/img/emotion-female-cropped/irritated-female.jpg');
    $('#female' + emotionArray[4]).attr('data-name', 'q2Irritated');
    $('#female' + emotionArray[5]).attr('src', 'assets/img/emotion-female-cropped/disgusted-female.jpg');
    $('#female' + emotionArray[5]).attr('data-name', 'q2Disgusted');
    $('#female' + emotionArray[6]).attr('src', 'assets/img/emotion-female-cropped/fearful-female.jpg');
    $('#female' + emotionArray[6]).attr('data-name', 'q2Fearful');
    $('#female' + emotionArray[7]).attr('src', 'assets/img/emotion-female-cropped/surprised-female.jpg');
    $('#female' + emotionArray[7]).attr('data-name', 'q2Surprised');
    $('#female' + emotionArray[8]).attr('src', 'assets/img/emotion-female-cropped/bored-female.jpg');
    $('#female' + emotionArray[8]).attr('data-name', 'q2Bored');
    $('#female' + emotionArray[9]).attr('src', 'assets/img/emotion-female-cropped/confused-female.jpg');
    $('#female' + emotionArray[9]).attr('data-name', 'q2Confused');
    $('#female' + emotionArray[10]).attr('src', 'assets/img/emotion-female-cropped/touched-female.jpg');
    $('#female' + emotionArray[10]).attr('data-name', 'q2Touched');
    $('#female' + emotionArray[11]).attr('src', 'assets/img/emotion-female-cropped/blank-female.jpg');
    $('#female' + emotionArray[11]).attr('data-name', 'q2Blank');

    $('#male' + emotionArray[0]).attr('src', 'assets/img/emotion-male-cropped/happy-male.jpg');
    $('#male' + emotionArray[0]).attr('data-name', 'q2Happy');
    $('#male' + emotionArray[1]).attr('src', 'assets/img/emotion-male-cropped/laughing-male.jpg');
    $('#male' + emotionArray[1]).attr('data-name', 'q2Laughing');
    $('#male' + emotionArray[2]).attr('src', 'assets/img/emotion-male-cropped/sad-male.jpg');
    $('#male' + emotionArray[2]).attr('data-name', 'q2Sad');
    $('#male' + emotionArray[3]).attr('src', 'assets/img/emotion-male-cropped/angry-male.jpg');
    $('#male' + emotionArray[3]).attr('data-name', 'q2Angry');
    $('#male' + emotionArray[4]).attr('src', 'assets/img/emotion-male-cropped/irritated-male.jpg');
    $('#male' + emotionArray[4]).attr('data-name', 'q2Irritated');
    $('#male' + emotionArray[5]).attr('src', 'assets/img/emotion-male-cropped/disgusted-male.jpg');
    $('#male' + emotionArray[5]).attr('data-name', 'q2Disgusted');
    $('#male' + emotionArray[6]).attr('src', 'assets/img/emotion-male-cropped/fearful-male.jpg');
    $('#male' + emotionArray[6]).attr('data-name', 'q2Fearful');
    $('#male' + emotionArray[7]).attr('src', 'assets/img/emotion-male-cropped/surprised-male.jpg');
    $('#male' + emotionArray[7]).attr('data-name', 'q2Surprised');
    $('#male' + emotionArray[8]).attr('src', 'assets/img/emotion-male-cropped/bored-male.jpg');
    $('#male' + emotionArray[8]).attr('data-name', 'q2Bored');
    $('#male' + emotionArray[9]).attr('src', 'assets/img/emotion-male-cropped/confused-male.jpg');
    $('#male' + emotionArray[9]).attr('data-name', 'q2Confused');
    $('#male' + emotionArray[10]).attr('src', 'assets/img/emotion-male-cropped/touched-male.jpg');
    $('#male' + emotionArray[10]).attr('data-name', 'q2Touched');
    $('#male' + emotionArray[11]).attr('src', 'assets/img/emotion-male-cropped/blank-male.jpg');
    $('#male' + emotionArray[11]).attr('data-name', 'q2Blank');



}

function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

$('.comm-img').on('click', function() {
    if ($(this).hasClass('green-bg')) {
        $('#arrangeGal').children('#' + $(this)[0].id).remove();
        $(this).removeClass('green-bg');
        commCount--;
        return;
    }
    if (commCount == 5) return;
    $('#arrangeGal').append($(this).clone().addClass('comm-arrange q7Radio'));
    var el = document.getElementById('arrangeGal');
    var sortable = Sortable.create(el);
    $(this).addClass('green-bg');
    commCount++;
    if (commCount == 5) {
        //Show last section
        $('.last-section').css('display', '');
    }
});

$('.emotion-img').on('click', function() {
    $('.emotion-img').each(function(index) {
        $(this).removeClass('green-bg');
    });
    $(this).addClass('green-bg');
});

$('.likert-button').on('click', function() {
    $(this).parent().children().each(function(index) {
        if (!$(this).is("div")) {
            $(this).removeClass('btn-warning');
            $(this).addClass('btn-info');
        }

    });
    $(this).removeClass('btn-info');
    $(this).addClass('btn-warning');
});

function disableCatChoice(e) {
    if (e.target.checked) {
        $('.qe-cat').prop('checked', false);
        $('.qe-cat').prop('disabled', true);
    } else {
        $('.qe-cat').prop('disabled', false);
    }
}

$('input:checkbox').on('change', function() {
    if ($(this)[0].name === 'mostStronglyCheckbox') {
        if ($(this).is(":checked")) {
            $('.mainMessage').prop('checked', false);
            $('.mainMessage').prop('disabled', true);
            $('.otherMessage').prop('checked', false);
            $('.otherMessage').prop('disabled', true);
        } else {
            $('.mainMessage').prop('disabled', false);
            $('.otherMessage').prop('disabled', false);
        }

    }

    if ($(this)[0].name === 'awareCheckbox') {

        var boxCount = (!isNaN($(this)[0].id.slice(-2))) ? $(this)[0].id.slice(-2) : $(this)[0].id.slice(-1);
        if ($('#qgc' + boxCount).is(":checked")) {
            $('#qhic' + boxCount).prop('disabled', false);
        } else {
            $('#qhic' + boxCount).prop('disabled', true);
            $('#qhic' + boxCount).prop('checked', false);
            $('#qhiic' + boxCount).prop('disabled', true);
            $('#qhiic' + boxCount).prop('checked', false);
            $('#qhiiic' + boxCount).prop('disabled', true);
            $('#qhiiic' + boxCount).prop('checked', false);
        }
    }
    if ($(this)[0].name === 'everTriedCheckbox') {
        var boxCount = (!isNaN($(this)[0].id.slice(-2))) ? $(this)[0].id.slice(-2) : $(this)[0].id.slice(-1);
        if ($('#qhic' + boxCount).is(":checked")) {
            $('#qhiic' + boxCount).prop('disabled', false);
        } else {
            $('#qhiic' + boxCount).prop('disabled', true);
            $('#qhiic' + boxCount).prop('checked', false);
            $('#qhiiic' + boxCount).prop('disabled', true);
            $('#qhiiic' + boxCount).prop('checked', false);
        }
    }
    if ($(this)[0].name === 'pastTwoCheckbox') {
        var boxCount = (!isNaN($(this)[0].id.slice(-2))) ? $(this)[0].id.slice(-2) : $(this)[0].id.slice(-1);
        if ($('#qhiic' + boxCount).is(":checked")) {
            $('#qhiiic' + boxCount).prop('disabled', false);
        } else {
            $('#qhiiic' + boxCount).prop('disabled', true);
            $('#qhiiic' + boxCount).prop('checked', false);
        }
    }
});

var timeinterval;

function startTime() {
    $('#time').css('display', '');
    $('.start-clock').css('display', 'none');
    $('.form').css('display', '');
    var start = new Date().getTime();
    timeinterval = setInterval(function() {
        var time = new Date().getTime() - start;
        var elapsed = Math.floor(time / 100) / 10;
        var tempTime = moment.duration(elapsed, 'seconds');
        var current = pad2(tempTime.minutes()) + ":" + pad2(tempTime.seconds());
        $('#time').html(current);
    }, 1000);
}

$('.sample-likert').on('click', function() {
    $('.main-section').css('display', '');
});


$('input:radio').on('change', function() {
    console.log($(this)[0].dataset.info);
    var choice = $(this)[0].dataset.info;
    var endAnimation = false;

    if ($(this)[0].name === 'mostStronglyRadio') {
        var boxCount = $(this)[0].id.slice(-1);
        $('.otherMessage').prop('disabled', false);
        $('#otherMessage' + boxCount).prop('disabled', true);
    }

    if ($(this)[0].name === 'sexRadioChoice') {
        if ($(this)[0].id === 'qdc1') {
            $('#male-emotion').css('display', '');
            $('#female-emotion').css('display', 'none');
        } else {
            $('#female-emotion').css('display', '');
            $('#male-emotion').css('display', 'none');
        }
    }

    if (choice == "qaTerminate" || choice == "qbTerminate") {
        clearInterval(timeinterval);
        demo.showSwal('terminate');
        return;
    }

    if (choice == "qaContinue") {
        $('.qb').css('display', '');
    }

    if (choice == "qbContinue") {
        $('.qcde').css('display', '');
    }

});

function addRow() {
    $('#qghTable tr:last').after('<tr> <td><input placeholder="brand"></td> <td><input type="checkbox" class="checkbox-lite" name="awareCheckbox"</td> <td><input type="checkbox" class="checkbox-lite" name="everTriedCheckbox"</td> <td><input type="checkbox" class="checkbox-lite" name="pastTwoCheckbox"</td> <td><input type="radio" class="radio-lite" name="usedMostRadio"</td> </tr>');

}

var english = true;

//Localization
function languageCheck() {
    console.log("asd");
    english = false;
    $('#introText').html(introText);

    $('#qaText').html(qaText);
    $('#qac1Text').html(qac1);
    $('#qac2Text').html(qac2);
    $('#qac3Text').html(qac3);

    $('#qbText').html(qbText);
    $('#qbc1Text').html(qbc1);
    $('#qbc2Text').html(qbc2);
    $('#qbc3Text').html(qbc3);
    $('#qbc4Text').html(qbc4);
    $('#qbc5Text').html(qbc5);
    $('#qbc6Text').html(qbc6);
    $('#qbc7Text').html(qbc7);
    $('#qbc8Text').html(qbc8);
    $('#qbc9Text').html(qbc9);
    $('#qbc10Text').html(qbc10);

    $('#qcText').html(qcText);

    $('#qdText').html(qdText);
    $('#qdc1Text').html(qdc1);
    $('#qdc2Text').html(qdc2);

    $('#qeText').html(qeText);

    $('#qe2Text').html(qe2Text);
    $('#qe2c1Text').html(qe2c1Text);
    $('#qe2c2Text').html(qe2c2Text);
    $('#qe2c3Text').html(qe2c3Text);
    $('#qe2c4Text').html(qe2c4Text);
    $('#qe2c5Text').html(qe2c5Text);
    $('#qe2c6Text').html(qe2c6Text);
    $('#qe2c7Text').html(qe2c7Text);
    $('#qe2c8Text').html(qe2c8Text);
    $('#qe2c9Text').html(qe2c9Text);

    $('#qe3Text').html(qe3Text);
    $('#qe3c1Text').html(qe3c1Text);
    $('#qe3c2Text').html(qe3c2Text);
    $('#qe3c3Text').html(qe3c3Text);
    $('#qe3c4Text').html(qe3c4Text);
    $('#qe3c5Text').html(qe3c5Text);

    $('#qfText').html(qfText);

    $('#qgText').html(qgText);
    $('#qhiText').html(qhiText);
    $('#qhiiText').html(qhiiText);
    $('#qhiiiText').html(qhiiiText);

    $('#comm-break-text').html(comm_break_text);
    $('#watch-again-text').html(watch_again_text);
    $('#watch-second-text').html(watch_second_text);
    $('#watch-last-text').html(watch_last_text);

    $('#q1aInfo').html(q1aInfo);
    $('#q1Info').html(q1Info);


    $('#q1aText').html(q1aText);
    $('#q1Text').html(q1Text);

    $('#q2Text').html(q2Text);

    $('#foranybrand').html(foranybrand);
    $('#definitebrand').html(definitebrand);

    $('#notInterested').html(notInterested);
    $('#notInterested2').html(notInterested2);
    $('#extremelyInterested').html(extremelyInterested);
    $('#extremelyInterested2').html(extremelyInterested2);

    $('#q3Text').html(q3Text);

    $('#q3bText').html(q3bText);

    $('#q5Text').html(q5Text);
    $('#q5c1Text').html(q5c1);
    $('#q5c2Text').html(q5c2);
    $('#q5c3Text').html(q5c3);
    $('#q5c4Text').html(q5c4);
    $('#q5c5Text').html(q5c5);

    $('#q6Text').html(q6Text);

    $('#q7Text').html(q7Text);

    $('#q8Text').html(q8Text);
    $('#q8c1Text').html(q8c1);
    $('#q8c2Text').html(q8c2);
    $('#q8c3Text').html(q8c3);
    $('#q8c4Text').html(q8c4);
    $('#q8c5Text').html(q8c5);
    $('#q8c6Text').html(q8c6);

    $('#q9Text').html(q9Text);
    $('#q9c1Text').html(q9c1);
    $('#q9c2Text').html(q9c2);
    $('#q9c3Text').html(q9c3);
    $('#q9c4Text').html(q9c4);
    $('#q9c5Text').html(q9c5);
    $('#q9c6Text').html(q9c6);

    $('#q10Text').html(q10Text);

    $('#q11aText').html(q11aText);
    $('#q11bText').html(q11bText);
    $('#q11c1Text').html(q11c1Text);
    $('#q11c2Text').html(q11c2Text);
    $('#q11c3Text').html(q11c3Text);
    $('#q11c4Text').html(q11c4Text);
    $('#q11c5Text').html(q11c5Text);
    $('#q11c6Text').html(q11c6Text);
    $('#q11c99Text').html(q11c99);

    $('#q12Text').html(q12Text);
    $('#q12c1Text').html(q12c1);
    $('#q12c2Text').html(q12c2);
    $('#q12c3Text').html(q12c3);
    $('#q12c4Text').html(q12c4);

    $('#q13Text').html(q13Text);
    $('#q13c1Text').html(q13c1);
    $('#q13c2Text').html(q13c2);
    $('#q13c3Text').html(q13c3);
    $('#q13c4Text').html(q13c4);

    $('#q14Text').html(q14Text);
    $('#q14c1Text').html(q14c1);
    $('#q14c2Text').html(q14c2);
    $('#q14c3Text').html(q14c3);
    $('#q14c4Text').html(q14c4);

    $('#q15Text').html(q15Text);
    $('#extremelyDifferent').html(extremelyDifferent);
    $('#extremelySimilar').html(extremelySimilar);

    $('#q16Text').html(q16Text);
    $('#q16c1Text').html(q16c1);
    $('#q16c2Text').html(q16c2);
    $('#q16c3Text').html(q16c3);

    $('#q17Text').html(q17Text);

}
var introText = "Magandang umaga/hapon/gabi. Ako po ay si _________ na taga-MVORSI at gumagawa lang po kami ng survey dito sa inyong lugar. Maari ba naming kayong maabala sandali upang sagutin ang aming mga katanungan? Aabutin lamang po ito ng 10-15 minuto. Paki-tandaan lamang po na walang tama o maling sagot. Gusto lamang po naming makuha ang inyong opinyon.";

var qaText = "QA. Alin sa mga pangungusap na ito ang pinaka-naglalarawan ng inyong partisipasyon sa pagdedesisyon kung anong brand ng produkto/serbisyo para sa inyong kalusugan ang bibilhin/gagamitin ninyo na panlunas sa inyong mga karamdaman?";

var qac1 = "<b>Ako ang pangunahing nagdedesisyon </b> kung anong brand ng produkto o serbisyong panlunas para sa aking mga karamdaman ang bibilhin o gagamitin ko.";

var qac2 = "<b>Kahit na iba ang pangunahing nagde-desisyon, may malaki akong impluwensya </b> sa kung anong brand ng produkto o serbisyong panlunas para sa aking mga karamdaman ang bibilhin o gagamitin ko.";

var qac3 = "<b>Hindi ako ang pangunahing nagde-desisyon at wala rin akong malaking impluwensya </b> sa kung anong brand ng produkto o serbisyong panlunas para sa aking mga karamdaman ang bibilhin o gagamitin ko.";

var qbText = "QB. Kayo po ba o kahit sinong miyembro ng inyong pamilya, kamag-anak o malapit na kaibigan ay nagtatrabaho sa alinman sa mga kumpanyang ito?";

var qbc1 = "Advertising agencies o mga kumpanyang gumagawa ng mga patalastas gaya ng McCann Erickson, Publicis, atbp.";

var qbc2 = "Mga kumpanyang nagsasagawa ng market research o mga survey gaya namin, Nielsen, PSRC, atbp.";

var qbc3 = "Public Relations agencies o mga kumpanyang gumagawa ng mga PR campaign gaya ng Minority Media, Ardent Communications, atbp."

var qbc4 = "Nasa medical na propesyon (Doktor, Nurse, Med tech, Med rep, Pharmacist, atbp.)";

var qbc5 = "DOH/BFAD o iba pang ahensya ng gobyerno na namamahala sa mga gamot";

var qbc6 = "Media (TV, Newspaper, Radio, etc.)";

var qbc7 = "Tindahan gaya ng supermarkets, groceries, market stalls, sari-sari stores.";

var qbc8 = "Drugstores/Pharmacies tulad ng Mercury Drug, Generika, Dealer/nagbebenta ng Herbal Medicines."

var qbc9 = "Kumpanya na gumagawa, nagdidistribute o nagbebenta ng gamot gaya ng Unilab, Pfizer, GSK, Astra Zeneca, atbp.";

var qbc10 = "Wala sa pagpipilian.";

var qcText = "QC. Eksaktong Edad";

var qdText = "QD. Kasarian";

var qdc1 = "Lalaki";

var qdc2 = "Babae";

var qeText = "QE1. Alin po sa mga karamdaman o kondisyong ito ang naranasan ninyo nitong nakaraang 2 buwan?";
var qe2Text = "QE2. Alin po sa mga sumusunod ang nararanasan ninyo sa tuwing kayo ay may ubo/ubo't sipon?";

var qe2c1Text = "Allergic colds o pabalik-balik na sipon";
var qe2c2Text = "Allergic cough o pabalik-balik na ubo";
var qe2c3Text = "Hika";
var qe2c4Text = "Lagnat";
var qe2c5Text = "Pananakit ng lalamunan";
var qe2c6Text = "Pangangati ng lalamunan";
var qe2c7Text = "Sakit ng ulo";
var qe2c8Text = "Trangkaso";
var qe2c9Text = "Sipon";

var qec99 = "Wala sa pagpipilian.";

var qe3Text = "QE3. Alin po sa mga sumusunod ang naranasan na ninyo noong nagkaroon kayo ng ubo/ubo’t sipon kailanman?";

var qe3c1Text = "Hirap sa paghinga";
var qe3c2Text = "Hirap magpahinga/matulog lalo na sa gabi";
var qe3c3Text = "Pangangati";
var qe3c4Text = "Panghihina";
var qe3c5Text = "Hirap lumunok";

var qfText = "QF. Ano ang mga PANLUNAS na karaniwan ninyong iniinom, ginagamit, o ginagawa para sa gamot sa Ubo/Ubo't sipon?";

var qfc1 = "Pagkonsulta sa doctor";

var qfc2 = "Pag-inom ng maraing juice";

var qfc3 = "Pag-inom ng maraming tubig";

var qfc4 = "Pagkain ng masusustansyang pagkain";

var qfc5 = "Pagkuha ng sapat na tulog/pahinga";

var qfc6 = "Regular na paglilinis";

var qfc7 = "Pag-inom ng Vitamin C";

var qfc8 = "Pag-inom ng mga gamot";

var qfc99 = "Walang ginagawa";

var qghText = "QG-QH. Alam ba ninyo ang mga brand na ito? Alin sa mga brands ng (INSERT FOR YOUR CATEGORY) ang nasubukan na ninyo kahit na kailan kahit na minsan? Ano pa? Mayroon pa ba? Anong mga brands ng (INSERT FOR YOUR CATEGORY) ang inyong iniinom/ ginagamit nitong nakalipas na 2 buwan? Aling brand ng (INSERT FOR YOUR CATEGORY) ang pinakamadalas ninyong inumin/ gamitin?";

var qgText = "QG. Alam ba ninyo ang mga brand na ito?";

var qhiText = "QHi. Alin sa mga brands ng gamot sa Ubo/Ubo't sipon ang nasubukan ninyo nitong nakalipas na 12 buwan? Ano pa? Mayroon pa ba?"

var qhiiText = "QHii. Anong mga brands ng gamot sa Ubo/Ubo't sipon ang inyong ininom/ ginamit nitong inyong huling pagdanas ng allergy?"

var qhiiiText = "QHiii. Aling brand ng gamot sa Ubo/Ubo't sipon ang pinakamadalas ninyong inumin/ gamitin?"

var comm_break_text = "Panoorin lamang po ninyo ang commercial break na ito.";

var watch_again_text = "Panoorin lamang po ninyong muli ang unang ad.";

var watch_second_text = "Panoorin naman po ninyong muli ang ikalawang ad.";

var watch_last_text = "Ngayon naman, panoorin lamang po ninyo ang isa pang ad.";

var notInterested = "Di Interesado";
var notInterested2 = "Di Interesado";

var extremelyInterested = "Talagang talagang Interesado";
var extremelyInterested2 = "Talagang talagang Interesado";

var q1aInfo = "May mga katanungan kami sa napanuod ninyong ad.";

var q1aText = "Q1a. Habang pinapanood mo ang patalastas o commercial, sa scale na 1-7, paano mo ilalarawan ng iyong reaksyon?Ang ibig sabihin po ng 1 ay “Di ka interesado” at ang 7 ay “Talagang interesado” ka. Maari ka ring pumili ng numero sa pagitan ng 1 at 7.";

var q1Info = "Halimbawa lamang po iyan ng mga katanungan sa survey na ito. Simulan po natin ang aktwal na survey.";

var q1Text = "Q1. Habang pinapanood mo ang patalastas o commercial, sa scale na 1-7, paano mo ilalarawan ng iyong reaksyon?Ang ibig sabihin po ng 1 ay “Di ka interesado” at ang 7 ay “Talagang interesado” ka. Maari ka ring pumili ng numero sa pagitan ng 1 at 7.";

var q1c1 = "Di Interesado";

var q1c2 = "Talagang talagang Interesado";

var q2Text = "Q2. Alin sa mga emosyon na ito ang pinakanaglalarawan ng iyong naramdaman habang pinapanood ang patalastas o commercial?";

var q2Happy = "Masaya";

var q2Laughing = "Natatawa";

var q2Sad = "Malungkot";

var q2Angry = "Galit";

var q2Irritated = "Nairita/Nainis";

var q2Disgusted = "Nandidiri";

var q2Fearful = "Natakot";

var q2Surprised = "Nagulat";

var q2Bored = "Nainip";

var q2Confused = "Nalito";

var q2Touched = "Naantig";

var foranybrand = "Mapagkakamalan ko itong commercial ng kahit anong brand";

var definitebrand = "Talagang maaalala kong para sa Tuseran ang commercial na ito";

var q3Text = "Q3. Base sa mga bagay na nakita/narinig mo mula sa patalastas o commercial...";

var q3bText = "Q3b. Paano mo nasabi na ito ay talagang para sa TUSERAN?";

var q3c1 = "Siguradong maaalala ko na ito ay para sa TUSERAN";

var q3c2 = "Siguradong maaalala ko na ito ay para sa TUSERAN";

var q3c3 = "Hindi ito mahusay sa pag-papaalala na ito ay para sa TUSERAN";

var q3c4 = "Ito ay maaaring para sa kahit anong brand ng gamot para sa Allergic Rhinitis/Allergic Colds/Allergic Cough.";

var q3c5 = "Ito ay maaring para sa kahit ano.";

var q4Text = "Q4. Kung ikukumpara mo ang patalastas o commercial na ito sa ibang patalastas o commercial na nakita mo, masasabi mo ba na…";

var q4h1 = "Kung ikukumpara sa ibang patalastas o commercial ng TUSERAN...";

var q4h2 = "Kung ikukumpara sa patalastas o commercial ng IBANG BRAND ng (CATEGORY)…";

var q4h3 = "Kung ikukumpara sa patalastas o commercial ng IBANG PRODUKTO…";

var q4c1 = "…ang patalastas o commercial na ito ay tulad ng ibang patalastas o commercial ng (BRAND)";

var q4c2 = "…ang patalastas o commercial na ito ay naiiba sa ibang patalastas o commercial ng (BRAND)";

var q5Text = "Q5. Paano maapektuhan ng patalastas o commercial ang paggamit mo sa TUSERAN sa susunod na magkaroon ka ng allergy?";

var q5c1 = "Talagang bibili";

var q5c2 = "Malamang na bibili";

var q5c3 = "Hindi alam kung bibili o hindi";

var q5c4 = "Malamang na hindi bibili";

var q5c5 = "Talagang hindi bibili";

var q6Text = "Q6. Pakitignan ang mga larawan na ito. Pumili ng 5 larawan na pinaka-naaalala mo mula sa patalastas o commercial na iyong pinanood.";

var q7Text = "Q7. Pakihilera ang 5 larawan na pinili mo, base sa pagkakasunod sunod nito sa kwento ng patalastas o commercial na napanood mo.";

var q8Text = "Q8. Paano ninyo ilalarawan ang mga taong sa tingin ninyo ay magugustuhan ang patalastas o commercial na ito?";

var q8c1 = "Aktibo, mahilig sa adventure";

var q8c2 = "Mapagkumbaba, simple";

var q8c3 = "Masigla, masayahin";

var q8c4 = "Palakaibigan, madaling makisama";

var q8c5 = "Maimpluwensya, determinado";

var q8c6 = "Matalino, palaisip";

var q9Text = "Q9. Paano ninyo ilalarawan ang pakiramdam na iniiwan ng patalastas o commercial na ito sa mga manonood?";

var q9c1 = "Inaaruga, kinakalinga";

var q9c2 = "Magaan ang pakiramdam, walang pag-aalala";

var q9c3 = "Masaya, maligaya";

var q9c4 = "May kumpyansa sa sarili, mahalaga";

var q9c5 = "Nagpapasigla, nagpapasabik";

var q9c6 = "Mahinahon, mahusay";

var q10Text = "Q10. Anu-anong impresyon o mensahe ang binigay sayo ng patalastas o commercial o commercial tungkol sa TUSERAN? Ano pa? Meron pa ba? <b> (Instruction to Interviewer: Gamitin ang papel.)</b>";

var q11aText = "Q11a. Alin sa mga mensahe na ito ang pinakamalakas na sinasabi ng patalastas o commercial sa iyo tungkol sa TUSERAN?";

var q11bText = "Q11b. Ano pa sa mga mensahe na ito ang sinasabi ng patalastas o commercial sa iyo tungkol sa TUSERAN?";

var q11c1 = "Ito ay nagbibigay ginhawa sa allergy at hindi nakaaantok";

var q11c2 = "Ito ay nagbibigay ng mabilis o agarang ginhawa sa allergy";

var q11c3 = "Ito ay mas epektibo kumpara sa ibang allergy brands";

var q11c4 = "Ito ay epektibo para sa lahat ng mga karaniwang allergies";

var q11c5 = "Nagbibigay ng tumatagal na ginhawa sa allergy";

var q11c6 = "Nakaaantok ang ibang allergy brands";

var q11c99 = "Hindi ko nakuha ang kahit alin sa mga mensaheng ito mula sa ad";

var q11c1Text = "Ito ay nagbibigay ginhawa mula sa ubo't sipon para sa mas masarap na pagtulog.";
var q11c2Text = "Ito ay bagong produkto para sa panggabing ubo.";
var q11c3Text = "Ito ay produktong gawa ng manufacturer ng Tuseran Forte.";
var q11c4Text = "Ang ubo't sipon sa gabi ay nakakasira ng mahimbing na tulog.";
var q11c5Text = "Ito ay bagong produkto para sa panggabing sipon.";
var q11c6Text = "Ito ay 3-in-1 solusyon para sa ubo, sipon at nasirang tulog dahil sa ubo't sipon.";

var q12Text = "Q12. Pagdating sa mga mensahe mula sa ad, sa tingin mo ba, ito ay…";

var q12c1 = "Talagang makahulugan sayo";

var q12c2 = "Medyo makahulugan sayo";

var q12c3 = "Hindi gaanong makahulugan sayo";

var q12c4 = "Talagang hindi makahulugan sayo";

var q13Text = "Q13. Gaano kapani-paniwala ang mga mensahe tungkol sa TUSERAN na ginawa sa patalastas o commercial?";

var q13c1 = "Talagang kapani-paniwala";

var q13c2 = "Medyo kapani-paniwala";

var q13c3 = "Medyo hindi kapani-paniwala";

var q13c4 = "Talagang hindi kapani-paniwala";

var q14Text = "Q14. Sa iyong palagay, ang patalastas o commercial ba na ito ay…";

var q14c1 = "Naglalaman ng maraming bagong impormasyon tungkol sa TUSERAN";

var q14c2 = "Naglalaman ng ilang bagong impormasyon tungkol sa TUSERAN";

var q14c3 = "Wala gaanong nilalaman na bagong impormasyon tungkol sa TUSERAN";

var q14c4 = "Walang kahit anong bagong impormasyon tungkol sa TUSERAN";

var q15Text = "Q15. Paano mo ikukumpara ang TV commercial na ito sa nakita mo kanina? Gamitin natin ang iskalang 1-7 kung saan ang ibig sabihin ng 1 ay 'talagang magkaiba ang dalawang ito' samantalang ang 7 ay 'talagang magkatulad ang dalawang TV commercial na ito.'";

var extremelyDifferent = "Talagang magkaiba";

var extremelySimilar = "Talagang magkatulad";

var q16Text = "Q16. Pagkatapos makita ang huling 2 TV commercial na ipinakita namin, masasabi ba ninyo na ang dalawang ito ay...?";

var q16c1 = "Para sa <b>dalawang magkaibang brand</b> ng gamot sa ubo";
var q16c2 = "Para sa <b>parehong brand ng gamot sa ubo ngunit magkaibang</b> variant/produkto";
var q16c3 = "Para sa <b>parehong brand ng gamot sa ubo at magkaparehong</b> variant/produkto";

var q17Text = "Q17. Kung aalalahanin lamang ang pinakahuling TV commercial na ipinakita namin sa inyo, alin pong brand ang iniendorso dito? <b>(INSTRUCTION TO INTERVIEWER: Huwag ipakita sa respondent ang mga sagot) </b>";
