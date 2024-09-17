// form ယူထား (subit ကိုဖမ်း)
var formEl = $('#skills-form');
// user input ကိုသိန်းထား
var nameInputEl = $('#skill-name');
// user input date ကို သိမ််းဖို့
var dateInputEl = $('#datepicker');
// နေရာ အလွတ်
var skillsListEl = $('#skills-list');

var printSkills = function(name, date) {
  // li element ကိုတည်ဆေက်လိုက်တယ်  document.createElement ('li)
  var listEl = $('<li>');
  // name + on + date
  var listDetail = name.concat(' on ', date);
// add class ,list
  listEl.addClass('list-group-item').text(listDetail);
  listEl.appendTo(skillsListEl);
};

var handleFormSubmit = function(event) {
  // reload ကိုတား
  event.preventDefault();

  // user အမည်
  var nameInput = nameInputEl.val();
  // user date
  var dateInput = dateInputEl.val();


  // user က တန်ဖိုးရော  date မပါ
  if (!nameInput || !dateInput) {
    console.log('You need to fill out the form!');
    return;
  }

  printSkills(nameInput, dateInput);

  // resets form
  nameInputEl.val('');
  dateInputEl.val('');
};
// addEventListener  ==> jquery .on
formEl.on('submit', handleFormSubmit);

// Autocomplete widget
// (function (()))
$(function() {
  var skillNames = [
    'Bootstrap',
    'C',
    'C++',
    'CSS',
    'Express.js',
    'Git',
    'HTML',
    'Java',
    'JavaScript',
    'jQuery',
    'JSON',
    'MySQL',
    'Node.js',
    'NoSQL',
    'PHP',
    'Python',
    'React',
    'Ruby'
  ];
  $('#skill-name').autocomplete({
    source: skillNames
  });
});

// Datepicker widget
$(function() {
  $('#datepicker').datepicker({
    changeMonth: true,
    changeYear: true
  });
});

// Sortable interaction
$(function() {
  $('#skills-list').sortable({
    placeholder: 'ui-state-highlight'
  });
  $('#skills-list').disableSelection();
});
