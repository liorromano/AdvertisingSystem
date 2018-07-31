/**
 * Message edit controller
 * Ths admin can edit the messages in db from here
 */

home.controller('largeMessageController', function ($scope, $routeParams, $http) {
    $scope.message=
    {
        "id":0,
        "name": "",
        "text": [""],
        "picture": [""],
        "link": "",
        "duration": "",
        "time": {"startDate":"","endDate":"","hoursByDay":[{"day":"","startHour":"","endHour":""}]},
        "screens": [{}],
        "tag": [{}]
    };
    /**
     * the screen id
     */
    var id=parseInt($routeParams.id);

    var originalScreens=[];

    var milToSec = function() {
        $scope.message.duration=$scope.message.duration/1000;
    };

    var init=function() {

        if(id>=0)
        {
            $http.post('findMessage', id).
            success(function(data, status) {
                $scope.message=data;
                milToSec();
                originalScreens=new Array($scope.message.screens.length);
                for(var i=0;i<originalScreens.length;i++) {
                    originalScreens[i] = $scope.message.screens[i].id;
                }
            });

        }

    };



    init();

});
