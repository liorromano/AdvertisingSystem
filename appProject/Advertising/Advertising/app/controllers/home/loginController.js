/**
 *Login controller
 * verify admin log in - if the admin logged in he can manage the page
 */

home.controller('loginController', function ($scope, $routeParams, $http,$window) {


    $scope.user=
    {
        "username": "",
        "pass": ""
    };



    /**
     * sign in function - verifies if the user and password are correct.
     */
    $scope.signIn = function() {
        $http.post('verifyUser', $scope.user).
            success(function(data, status) {

                if((data!=null) && ($scope.user.username.toString() == "Admin")) {
                    $window.location.href = '/list';
                }
                else if(data!=null) {
                    localStorage.setItem("username",$scope.user.username.toString())
                    $window.location.href = '/#/reco';
                }
                else {
                    $window.alert("Incorrect password or username.");
                }


            })
    };

});
