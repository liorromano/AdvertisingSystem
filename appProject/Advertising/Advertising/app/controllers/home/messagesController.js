/**
 * Messages list controller
 * get all messages from the db and present them.
 */
home.controller('messagesController',function ($scope, $http){


    $scope.messages;
    $scope.ViewEnum = {
        Card: 0,
        List: 1
    };



    var init=function() {
        $http.get('getAllMessages').success(function(data) {
            console.log(data);
            $scope.messages= data;
        });
    };



    init();



    $scope.changeView = function (view) {
        switch (view) {
            case $scope.ViewEnum.Card:
                $scope.listViewEnabled = false;
                break;
            case $scope.ViewEnum.List:
                $scope.listViewEnabled = true;
                break;
        }
    };




});