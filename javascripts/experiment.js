const jsPsych = initJsPsych();

var timeline = [];

var maintask = {
    type: jsPsychHTMLButtonResponse,
    stimulus: 'images/black box.jpg',
    choices: ['draw', 'red', ''],
} 