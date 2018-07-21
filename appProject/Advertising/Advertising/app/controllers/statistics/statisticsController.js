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

                        "values": [ $scope.statistic[0]._id, $scope.statistic[1]._id, $scope.statistic[2]._id],
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
                            "values": [ $scope.statistic[0].count, $scope.statistic[1].count,$scope.statistic[2].count],
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
            globals: {
                shadow: false,
                fontFamily: "Verdana",
                fontWeight: "100"
            },
            type: "pie",
            backgroundColor: "#fff",

            legend: {
                layout: "x5",
                position: "50%",
                borderColor: "transparent",
                marker: {
                    borderRadius: 10,
                    borderColor: "transparent"
                }
            },
            tooltip: {
                text: "%v requests"
            },
            plot: {
                refAngle: "-90",
                borderWidth: "0px",
                valueBox: {
                    placement: "in",
                    text: "%npv %",
                    fontSize: "15px",
                    textAlpha: 1,
                }
            },
            series: [{
                text: $scope.statistic[0]._id,
                values: [$scope.statistic[0].count],
                backgroundColor: "#ff9999",
            }, {
                text: $scope.statistic[1]._id,
                values: [$scope.statistic[1].count],
                backgroundColor: "#ff66ff"

            }, {
                text: $scope.statistic[2]._id,
                values: [$scope.statistic[2].count],
                backgroundColor: "#99ccff",
            }]
        };

        zingchart.render({
            id: 'myJson',
            data: myJson,
            height: "100%",
            width: "100%"
        });
    })
});

