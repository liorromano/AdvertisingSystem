/**
 * Messages list controller
 * get all messages from the db and present them.
 */
home.controller('messagesController',function ($scope, $http){

    $scope.history=
        {
            "id":0,
            "name": "",
            "tags": [{}]
        };

    $scope.messages;
    $scope.userHistory;

    var originalTags=[];
    var id = 0;

    $scope.ViewEnum = {
        Card: 0,
        List: 1
    };

    $scope.username2 = localStorage.getItem("username");

    var init=function() {
        $http.get('getAllMessages').success(function(data) {
            console.log(data);
            $scope.messages= data;
        });

        $http.post('findUserHistory', $scope.username2).
        success(function(data, status) {
            $scope.userHistory=data;
            console.log($scope.userHistory + "find user");
            originalTags.push(150);
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


    $scope.update=function(tag) {
        var history = $scope.history;
        history.name = $scope.username2;
        originalTags.push(tag);
        $scope.history.tags = originalTags;
        $http.put('/updateHistory', history).success(function(response) {
        });

    };
    /**
     * add a new message to the data base/
     * @param message
     */
    $scope.add=function(tag){
        var history = $scope.history;
        history.name = $scope.username2;
        history.tags = tag;
        $http.post('addHistory', history).success(function(data, status) {
        });
    };


    $scope.submit = function(tag) {
            if(originalTags.length != 0)
            {
               $scope.update(tag);

            }
            else
            {
                $scope.add(tag);

            }

    };


});