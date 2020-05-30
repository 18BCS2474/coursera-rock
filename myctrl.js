(function () {
'use strict';
angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListService', ShoppingListService);

ToBuyController.$inject = ['ShoppingListService'];
function ToBuyController(ShoppingListService) {
  var buyctrl = this;
  var length = 4;
  var Itemstobuy = [{itemQuantity: 10, itemName: "Cookies"},{itemQuantity: 10, itemName: "Choclates"},{itemQuantity: 10, itemName: "Icecreams"},{itemQuantity: 10, itemName: "Books"},{itemQuantity: 10, itemName: "Pens"}];
  for (var i=0; i<5; i++)
  {
    buyctrl.addItem = (function () { ShoppingListService.addItem(Itemstobuy[i].itemName, Itemstobuy[i].itemQuantity); console.log(Itemstobuy[i]) })();
  }
    buyctrl.items = ShoppingListService.getItems();
    buyctrl.removeItem = function (itemIndex) {
    ShoppingListService.removeItem(itemIndex, "frombuyctrl");
    length =buyctrl.items.length;

  };
}

AlreadyBoughtController.$inject = ['ShoppingListService'];
function AlreadyBoughtController(ShoppingListService) {
  var boughtctrl = this;
  boughtctrl.moveditems = ShoppingListService.getmovedItems();
  boughtctrl.removeItem = function (itemIndex) {
  ShoppingListService.removeItem(itemIndex,"fromboughtctrl");
  length =boughtctrl.moveditems.length;
  };
}

function ShoppingListService() {
  var service = this;
  // List of shopping items
  var items = [];
  var moveditems = [];
  var i=0;
  service.addItem = function (itemName, quantity) {
    console.log("ram");
    var item = {
      name: itemName,
      quantity: quantity
    };
    items.push(item);
    console.log(items[4]);
  };

  service.removeItem = function (itemIdex,controller) {
    if(controller == "frombuyctrl" )
    {
      moveditems.push(items[itemIdex]);
      items.splice(itemIdex, 1);
      i++;
    }
    if(controller == "fromboughtctrl")
    {
      service.addItem(moveditems[itemIdex].name, moveditems[itemIdex].quantity);
      moveditems.splice(itemIdex,1);
    }
  };

  service.getItems = function () {
    return items;
  };

  service.getmovedItems = function () {
    return moveditems;
  };
}
})();
