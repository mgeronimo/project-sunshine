function offlineCheck() {
    //Validate answers on last page
    var $validator = $('.wizard-card form').validate({
        rules: {
            q5Radio: {
                required: true
            },
            q8Radio: {
                required: true
            },
            q9Radio: {
                required: true
            },
            q12Radio: {
                required: true
            },
            q13Radio: {
                required: true
            },
            q14Radio: {
                required: true
            }
        },

        errorPlacement: function(error, element) {
            $(element).parent('div').addClass('has-error');
        }
    });
    var $valid = $('.wizard-card form').valid();

    if (!$valid || commCount != 5) {
        $validator.focusInvalid();
	console.log($validator);
        demo.showSwal('incomplete');
        return;
    }

    var online = navigator.onLine;
    if (!online) {
        demo.showSwal('offlinePrompt');
    } else {
        submit();
    }
}

function resetForm() {
    unlockBackground = false;
    //Unlock finish button again
    $('.wizard-card').find('.btn-finish').prop('disabled', false);
    //Show gate buttons
    $('.qfghiGate').show();
    $('.qghiGate').show();


    //Reset time
    $('#time').css('display', 'none');
    $('.start-clock').css('display', '');
    clearInterval(timeinterval);
    $('#time').html('00:00');
    $('.form').css('display', 'none');

    //Move back to the first tab
    $('.wizard-card').bootstrapWizard('previous');
    $('.wizard-card').bootstrapWizard('previous');

    //Clear inputs on interviewer information tab
    $('#interviewer_name').val("");
    $('#interviewer_id').val("");
    $('#interview_date').val("");
    $('#respondent_name').val("");
    $('#respondent_address').val("");
    $('#respondent_hometel').val("");
    $('#respondent_officetel').val("");
    $('#respondent_email').val("");
    $('#respondent_mobile').val("");
    $('#respondent_age').val("");
    $('#center_location').val("");
    $('#questionnaire_no').val("");

    //Clear inputs on respondent demographics tab

    //Untick all radio buttons
    $('input[type=radio]:checked').each(function(index) {
        if ($(this)[0].name != 'sexRadioChoice') {
            $(this).prop('checked', false);
        }
    });

    //Untick all checkboxes
    $('input[type=checkbox]:checked').each(function(index) {
        $(this).prop('checked', false);

    });

    //Hide everything except QA
    $('.qb').css('display', 'none');
    $('.qcde').css('display', 'none');
    $('.qfghiSection').css('display', 'none');
    $('.qghiSection').css('display', 'none');

    //Clear inputs on last tab

    //Untick likert scales
    $('.likert-button').each(function(index) {
        if (!$(this).is("div")) {
            $(this).removeClass('btn-warning');
            $(this).addClass('btn-info');
        }
    });

    //Hide main section
    $('.main-section').css('display', 'none');

    //Hide Q2 and Q3b
    hideQ2();
    hideQ3b();

    //Reset emotions
    $('.emotion-img').removeClass('green-bg');

    //Untick scene selection
    $('.comm-img').removeClass('green-bg');
    commCount = 0;

    //Remove selected scenes
    $('#arrangeGal').children().remove();

    //Hide last section
    $('.last-section').css('display', 'none');






}
