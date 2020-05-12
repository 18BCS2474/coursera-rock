app.controller("myctrl",function($scope)
{
 $scope.name = "";
 $scope.totalvalue= 0;
 $scope.displaynumeric=function()
 {
   var totalnamevalue=calculatornumericstring($scope.name);
   $scope.totalvalue=totalnamevalue;
 };

 function calculatornumericstring(string)
 {
   var totalstringvalue=0;
   for(var i=0;i<string.length;i++)
   {
     totalstringvalue+=string.charCodeAt(i);
   }
   return totalstringvalue;
 }

}) ;
