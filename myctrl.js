app.controller("myctrl",function($scope)
{
 $scope.name = [];
 // $scope.greet="";
 // $scope.over="";
 // $scope.empty="";
 $scope.totalvalue= 0;
 $scope.displaynumeric=function()
 {
   var totalnamevalue=calculatornumericstring($scope.name);
   $scope.totalvalue=totalnamevalue;
 return  $scope.totalvalue;
 };
 $scope.check=function()
 {
   $scope.cake="hi";
   return $scope.cake;
 }
$scope.changer=function()
{
  $scope.greet="Enjoy!";
  $scope.over="Too much!";
   $scope.empty="Please enter data first";
}
 function calculatornumericstring(string)
 {
   var totalstringvalue=$scope.name.length;
   // for(var i=0;i<string.length;i++)
   // {
   //   totalstringvalue+=string.charCodeAt(i);
   // }
   return totalstringvalue;
 }

}) ;
