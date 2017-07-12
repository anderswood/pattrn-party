// const COLOR_TEAL = #34D1D1;
// const COLOR_DK_PURPLE = #2F2235;
// const COLOR_LT_PURPLE = #3F3244;
// const COLOR_OFF_WHITE = #F2F2F2;
// const COLOR_LT_GRAY = #D1D2D3;
// const COLOR_DK_GRAY = #666666;
// const COLOR_BLK = #000000;


$('.tab').on('click', function() {
  // Update tabs
  $(this).closest('.acc-tab-container').children().removeClass('active-tab');
  $(this).addClass('active-tab');
  let classesArr = $(this).attr('class').split(' ');
  let numClass = classesArr.filter(classStr => classStr.includes('elem'))

  // Update boxes
  let allBoxElements = $(this).closest('.accordian-container').find('.acc-content-container').children('.box');

  allBoxElements.removeClass('active-box');
  allBoxElements.addClass('inactive-box');
  $(this).closest('.accordian-container').find(`.${numClass}`).removeClass('inactive-box');
  $(this).closest('.accordian-container').find(`.${numClass}`).addClass('active-box');

})
