define(
  'ctrl',
['model', 'view'],

function (model, view) {
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

);
