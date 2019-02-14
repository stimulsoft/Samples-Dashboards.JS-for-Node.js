'use strict';

/**
 * @ngdoc function
 * @name angularDemoApp.controller:ViewerCtrl
 * @description
 * # ViewerCtrl
 * Controller of the angularDemoApp
 */
angular.module('angularDemoApp')
  .controller('ViewerCtrl', ['$scope', '$window',
    function ($scope, $window) {

      $scope.init = function () {
        console.log('Loading Viewer view');

        console.log('Creating the dashboard viewer with default options');
        var viewer = new $window.Stimulsoft.Viewer.StiViewer(null, 'StiViewer', false);

        console.log('Creating a new dashboard instance');
        var report = $window.Stimulsoft.Report.StiReport.createNewDashboard();

        console.log('Load dashboard from url');
        report.loadFile('/dashboard/DashboardChristmas.mrt');

        console.log('Assigning dashboard to the viewer, the dashboard will be built automatically after rendering the viewer');
        viewer.report = report;

        console.log('Rendering the viewer to selected element');
        viewer.renderHtml('viewer');

        console.log('Loading completed successfully!');
      };
    }]);