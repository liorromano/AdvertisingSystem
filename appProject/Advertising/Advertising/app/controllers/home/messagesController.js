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

    var answer;
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
            answer = data;
            $scope.userHistory=data;
            console.log($scope.userHistory + " find user");
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
        //$scope.updateTags();
        var answer = 0;
        for(var i=0;i<$scope.userHistory.tags.length;i++) {
            if($scope.userHistory.tags[i].id == tag)
            {
                answer = 1;
            }
        }
        if (answer == 0)
        {
            $scope.userHistory.tags.push({id:tag});
            $http.put('/updateHistory', $scope.userHistory).success(function(response) {
            });
        }


    };
    /*$scope.updateTags = function() {
        for(var i=0;i<originalTags.length;i++) {
            for (var j = 0; j < $scope.userHistory.tags.length; j++) {
                if (originalTags[i] == $scope.userHistory.tags[j]) {
                    originalTags[i] = "";
                    j=$scope.userHistory.tags.length;
                }
            }

        }

        for(var i=0;i<originalTags.length;i++)
        {
            if(originalTags[i]=="") {
                originalTags.splice(i, 1)
                i--;
            }
        }

        $scope.userHistory.updateScreens=[];

        for(var i=0;i<originalTags.length;i++){
            $scope.userHistory.updateScreens.push({id:originalTags[i]});
        }


    }*/

    /*$scope.update=function(tag) {
        var history = $scope.history;
        history.name = $scope.username2;
        originalTags.push(tag);
        $scope.history.tags = originalTags;
        $http.put('/updateHistory', history).success(function(response) {
        });

    };*/
    /**
     * add a new message to the data base/
     * @param message
     */
    $scope.add=function(tag){
        var history = $scope.history;
        history.name = $scope.username2;
        history.tags=[]
        history.tags.push({id:tag})
        $http.post('addHistory', history).success(function(data, status) {
        });
    };


    $scope.submit = function(tag) {
            if($scope.userHistory.tags == undefined)
            {
                console.log("add");
                $scope.add(tag);

            }
            else
            {
                console.log("update");
                $scope.update(tag);


            }

    };


});