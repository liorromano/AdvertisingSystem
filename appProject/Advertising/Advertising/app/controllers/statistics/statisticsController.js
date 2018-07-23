/**
 * Statistics controller.
 * show the statistics in 2 graphs: pie chart,bar chart.
 */
statistics.controller('statisticsController', function($scope, $http) {


    $http.get('query').success(function (data, status) {
        $scope.statistic = data;

        var myConfig = {

            "graphset": [
                {
                    "type": "mixed",
                    "scale-x": {
                        "color": "red",

                        "values": [$scope.statistic[0]._id, $scope.statistic[1]._id, $scope.statistic[2]._id],
                        "guide": {
                            "line-width": "1px",
                            "line-style": "solid"
                        },
                        "label": {
                            "text": "",
                            "font-size": "20px"
                        },
                        "item": {
                            "font-size": "10px",
                            "visible": true
                        }
                    },
                    "scale-y": {
                        "values": "0:10:1",
                        "line-width": "1px",
                        "line-style": "solid",
                        "tick": {
                            "visible": true,
                            "placement": "outer",
                            "size": "12px"
                        },
                        "item": {
                            "font-size": "10px",
                            "visible": true
                        },
                        "guide": {
                            "line-width": "1px",
                            "line-style": "solid"
                        }
                    },
                    "plot": {
                        "alpha": 1,
                        "hover-state": {
                            "visible": false
                        }
                    },
                    "series": [
                        {
                            "type": "bar",
                            "values": [$scope.statistic[0].count, $scope.statistic[1].count, $scope.statistic[2].count],
                            "text": "Safari",
                            "background-color": "#ff4d4d"
                        }
                    ]
                }
            ]
        };

        zingchart.render({
            id: 'myChart',
            data: myConfig,
            height: "100%",
            width: "100%"
        });

        var myJson = {
            type: "pie",
            backgroundColor: "#ffffff",
            plot: {
                borderColor: "#2B313B",
                borderWidth: 1,
                // slice: 90,
                valueBox: {
                    placement: 'out',
                    text: '%t\n%npv%',
                    fontFamily: "Open Sans"
                },
                tooltip: {
                    fontSize: '18',
                    fontFamily: "Open Sans",
                    padding: "5 10",
                    text: "%npv%"
                },
                animation: {
                    effect: 2,
                    method: 5,
                    speed: 500,
                    sequence: 1
                }
            },
            plotarea: {
                margin: "20 0 0 0"
            },
            series: [{
                values: [$scope.statistic[0].count],
                text: $scope.statistic[0]._id,
                backgroundColor: '#50ADF5',
            }, {
                values: [$scope.statistic[1].count],
                text: $scope.statistic[1]._id,
                backgroundColor: '#FF7965'
            }, {
                values: [$scope.statistic[2].count],
                text: $scope.statistic[2]._id,
                backgroundColor: '#FFCB45'
            }]
        };

        zingchart.render({
            id: 'myJson',
            data: myJson,
            height: 500,
            width: 725
        });
    })






});




