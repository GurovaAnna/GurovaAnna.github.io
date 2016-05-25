define (
  'view',
  ['model'],
  function (model) {

  function View(model) {
    var self = this;

    function init() {
      var wrap = _.template($('#const-wrapper').html());
      $('body').append(wrap);
      self.elements = {
        input: $('.operation__value'),
        btnAdd: $('.operation__btn-add'),
        btnSave: $('.operation__btn-save'),
        btnDel: $('.operation__btn-del'),
        itemCont: $('.list')

      };
      self.compileList(model.data);
    }

      self.compileList = function (data) {
      var tmpl = $('#item-compile').html();
      tmpl = _.template(tmpl);
      self.elements.itemCont.html(tmpl({
          list: data
      }));
    };

    init();
  }
    return new View(model);
}
);
