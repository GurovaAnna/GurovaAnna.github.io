//model
function Model(data) {
  var self = this;

  self.data = data;

  self.addItem = function (item) {
      if (item.length === 0) {
        return;
      }
      self.data.push(item);
      return self.data;
  };
  self.editItem = function (itemBefore, itemAfter) {
      var index = self.data.indexOf(itemBefore);
      if (index === -1) {
        return;
      }
        self.data[index] = itemAfter;
        return self.data;
  };
  self.removeItem = function (item) {
    var index = self.data.indexOf(item);
    if (index === -1) {
      return;
    }
    self.data.splice(index, 1);
    return self.data;
  };
}

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

function Ctrl(model, view) {
  var self = this;
  var thisItem;
  view.elements.btnAdd.on('click', addItem);
  view.elements.btnDel.on('click', removeItem);
  view.elements.btnSave.on('click', editItem);
  view.elements.itemCont.on('click', '.list__item', selectItem);



  function addItem() {
    var newItem = view.elements.input.val();
    model.addItem(newItem);
    view.compileList(model.data);
    view.elements.input.val('');
  }
  function selectItem() {
    thisItem = $(this).attr('data-value');
    view.elements.input.val(thisItem);
  }
  function editItem() {
    if (!view.elements.input.val()) {
      return;
    }
    var editedItem = view.elements.input.val();
    model.editItem(thisItem, editedItem);
    view.compileList(model.data);
    view.elements.input.val('');
  }
  function removeItem() {
    var itemToDel = view.elements.input.val();
    model.removeItem(itemToDel);
    view.compileList(model.data);
    view.elements.input.val('');
  }

}
$(function () {
  var data = ['Coffee', 'Meeting', 'Lunch', 'Coding'];
  var model = new Model(data);
  var view = new View(model);
  var ctrl = new Ctrl(model, view);
});
