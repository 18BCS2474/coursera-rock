(function () {
'use strict';
//Module declaration
angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      items: '<',
      onRemove: '&'
     },
    controller: FoundItemsController,
    controllerAs: 'foundItemsCtrl',
    bindToController: true,
  };

  return ddo;
}

//Controller to wrap the search textbox and button as well as the list of found items
NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var ctrl = this;

  ctrl.narrowItDown = function () {
    console.log("Search Term : ",ctrl.searchTerm);
    var promise =  MenuSearchService.getMatchedMenuItems(ctrl.searchTerm);
    promise.then(getMatchedMenuItems);
  }

 function getMatchedMenuItems(response) {
   ctrl.found = response;
 }

  ctrl.removeItem = function (itemIndex) {
    ctrl.found.splice(itemIndex, 1);
  };
}

//Service to retrieve the list of all the menu items and narraow them down with teh criteria
MenuSearchService.$inject = ['$http', 'ApiBasePath']
function MenuSearchService($http,ApiBasePath) {
  var service = this;

  service.getMatchedMenuItems = function (searchTerm) {
    var response = $http({
    method: "GET",
    url: (ApiBasePath + "/menu_items.json")
  });

  return response.then(function (result) {
    var foundItems = [];
    for (var i = 0; i < result.data.menu_items.length; i++) {
       if (result.data.menu_items[i].description.toLowerCase().indexOf(searchTerm) !== -1) {
         foundItems.push(result.data.menu_items[i]);
       }
     }
   return foundItems;
  })
  .catch(function (error) {
    console.log("Something went terribly wrong.");
  });
  }
}
//Controller used in foundItems.html
function FoundItemsController() {
  var foundItemsCtrl = this;
  foundItemsCtrl.empty = function () {
    return (foundItemsCtrl.items !== undefined) && foundItemsCtrl.items.length == 0;
  }
}
})();
