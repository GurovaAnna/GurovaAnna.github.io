$(function() {
var api = 'http://content.guardianapis.com/search?api-key=test',
    selfContent;
// template
function appendNewsHeader(data) {
      var newsTempl = $("#news_header").html();
      newsTempl = _.template(newsTempl);

      $('.news_result').append(newsTempl({data: data.response}));

       if (parseInt($('.news_page_number').val(),10)===1) {
        $('.js_prev_btn').attr('disabled','disabled');
      }

      if (parseInt($('.news_page_number').val(),10)===data.response.pages) {
        $('.js_next_btn').attr('disabled','disabled');
      }


 }

 function appendNewsContent(data) {
      var newsTempl = $("#news_content").html();
       newsTempl = _.template(newsTempl);
       //console.log(data);
       selfContent.next().append(newsTempl({data: data.response.results[0]}));
       selfContent.next().slideToggle();
  }

  function showErrorMessage() {
      var errorTmpl = $("#error").html();
      errorTmpl = _.template(errorTmpl);
      $('.news_result').append(errorTmpl());

  }
 //
 //event
$('.js_refresh_btn').on('click', function() {
  getNewsHeader();
});


$(document).on('click', '.news_item_header', function () {
  selfContent = $(this);
  selfContent.toggleClass('active');
  var dataId = selfContent.attr('data-id');
  getNewsContent(dataId);
});

$(document).on('click', '.js_prev_btn', getPrevPage);
$(document).on('click', '.js_next_btn', getNextPage);
$(document).on('keyup', '.news_page_number', getThisPage);

//
//request
function getNewsHeader(page) {
  $('.news_result').empty();

  if (!page) {
        $.ajax({
            type: 'GET',
            url: api,
            contentType: "application/json; charset=utf-8",
            success: appendNewsHeader,
            error: showErrorMessage
    });
  }
  else {
    $.ajax({
            type: 'GET',
            url: api+'&page=' + page,
            contentType: "application/json; charset=utf-8",
            success: appendNewsHeader,
            error: showErrorMessage
    });

 }
}



 function getNewsContent(dataId){
  if (selfContent.next().html().trim()==="") {
 $.ajax({
             type: 'GET',
             url: api + '&show-blocks=body&ids=' + dataId,
             contentType: "application/json; charset=utf-8",
             success: appendNewsContent

  });
} else{
    selfContent.next().slideToggle();
}
}

//
//pagination
function getNextPage() {

   getNewsHeader(parseInt($('.news_page_number').val(), 10) + 1);
 }
 function getPrevPage() {

   getNewsHeader(parseInt($('.news_page_number').val(), 10) - 1);
 }
 function getThisPage(e) {

   var newsPageNumber = $(this).val();
   newsPageNumber = newsPageNumber.replace(/[^0-9]/g, '');
   $(this).val(newsPageNumber);

  if(e.keyCode == 13){
        e.preventDefault();
        getNewsHeader(parseInt($('.news_page_number').val(),10));
    }

 }

 getNewsHeader();
});
