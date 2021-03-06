
$('.tab').on('click', function() {
  // Update tabs
  let activeStatus = $(this).hasClass('active-tab-mbl');
  let allTabElements = $(this).closest('.accordian-container').children('.tab');

  allTabElements.removeClass('active-tab active-tab-mbl');
  allTabElements.addClass('inactive-tab inactive-tab-mbl');

  if (!activeStatus) {
    $(this).removeClass('inactive-tab-mbl');
    $(this).addClass('active-tab-mbl');
   }

  $(this).removeClass('inactive-tab');
  $(this).addClass('active-tab');

  let classesArr = $(this).attr('class').split(' ');
  let numClass = classesArr.filter(classStr => classStr.includes('elem'))
  let boxClass = 'box' + numClass[0].charAt(0);

  // Update boxes
  let allBoxElements = $(this).closest('.accordian-container').children('.box');
  let targetBoxElement =   $(this).closest('.accordian-container').find(`.${boxClass}`);

  allBoxElements.removeClass('active-box active-box-mbl');
  allBoxElements.addClass('inactive-box inactive-box-mbl');

  if (!activeStatus) {
    targetBoxElement.removeClass('inactive-box-mbl');
    targetBoxElement.addClass('active-box-mbl');
  }

  targetBoxElement.removeClass('inactive-box');
  targetBoxElement.addClass('active-box');
})


$('.header-bar-container').on('click', function() {
  $(this).children('.hide-item').toggleClass('inactive-item');
});


// View Code button
$('#accordian-tabs-btn, #flexible-cards-btn, #header-bar-btn').on('click', function() {
  let sectionId = $(this).parent('section').attr('id');
  viewCode(sectionId);
});

const viewCode = (id) => {
    let source = `    <section id='${id}'>`;
    source += document.getElementById(id).innerHTML;
    source += '</section>';
    source = source.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    source = '<pre>'+source+'</pre>';
    sourceWindow = window.open('','Source of page','height=800,width=800,scrollbars=1,resizable=1');
    sourceWindow.document.write(source);
    sourceWindow.document.close();
    if(window.focus) sourceWindow.focus();
}

// https://stackoverflow.com/questions/41945094/add-option-to-view-source-of-current-html-page
// https://css-tricks.com/make-a-view-source-button/
