// const COLOR_TEAL = #34D1D1;
// const COLOR_DK_PURPLE = #2F2235;
// const COLOR_LT_PURPLE = #3F3244;
// const COLOR_OFF_WHITE = #F2F2F2;
// const COLOR_LT_GRAY = #D1D2D3;
// const COLOR_DK_GRAY = #666666;
// const COLOR_BLK = #000000;


$('.tab').on('click', function() {
  // Update tabs
  let allTabElements = $(this).closest('.accordian-container').children('.tab');

  allTabElements.removeClass('active-tab');
  allTabElements.addClass('inactive-tab');
  $(this).removeClass('inactive-tab');
  $(this).addClass('active-tab');
  let classesArr = $(this).attr('class').split(' ');
  let numClass = classesArr.filter(classStr => classStr.includes('elem'))
  let boxClass = 'box' + numClass[0].charAt(0);

  // Update boxes
  let allBoxElements = $(this).closest('.accordian-container').children('.box');

  allBoxElements.removeClass('active-box');
  allBoxElements.addClass('inactive-box');
  $(this).closest('.accordian-container').find(`.${boxClass}`).removeClass('inactive-box');
  $(this).closest('.accordian-container').find(`.${boxClass}`).addClass('active-box');
})

$('.header-bar-container').on('click', function() {
  $(this).children('.hide-item').toggleClass('inactive-item');
});

// View Code button
$('#header-bar-btn').on('click', function() {
  viewCode();
});

const viewCode = () => {
  console.log('view code');
    var source = "<html>";
    source += document.getElementsByTagName('html')[0].innerHTML;
    source += "</html>";
    source = source.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    source = "<pre>"+source+"</pre>";
    sourceWindow = window.open('','Source of page','height=800,width=800,scrollbars=1,resizable=1');
    sourceWindow.document.write(source);
    sourceWindow.document.close();
    if(window.focus) sourceWindow.focus();
}

// https://stackoverflow.com/questions/41945094/add-option-to-view-source-of-current-html-page
// https://css-tricks.com/make-a-view-source-button/
