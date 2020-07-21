const URL="https://covid19.mathdro.id/api";
const URL1="https://covid19.mathdro.id/api/countries/india";
const URL2="http://covid19-india-adhikansh.herokuapp.com/states";
app.controller("myctrl",function($scope,$http)
{
 $scope.titl="Stay Home Stay Safe";
 console.log("App loaded");
 $http.get(URL).then(function(response)
 {
   console.log("success");
   console.log(response.data);
   $scope.all_data=response.data;
 },function(error)
{
  console.log(error);
})
// c-data
$scope.c_data=function()
{

  let country=$scope.c;
  // $scope.chef=country;


  $http.get(`${URL}/countries/${country}`).then(function(response)
{
  $scope.chef=country;
   console.log("success");
  console.log(response.data);
  $scope.cdata=response.data;

},function(error)
{
  console.log("erro");
  console.log(error);
})
}


});
