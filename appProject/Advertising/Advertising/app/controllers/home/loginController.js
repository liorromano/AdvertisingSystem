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
                if(data.toString()=="true") {
                    $window.location.href = '/list';
                }
                else {
                    $window.alert("Incorrect password or username.");
                }


            })
    };



});
