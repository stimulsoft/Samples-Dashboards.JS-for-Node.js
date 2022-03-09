<script setup lang="ts">
import { onMounted } from "vue";
import { Stimulsoft } from "stimulsoft-dashboards-js/Scripts/stimulsoft.blockly.editor";
import 'stimulsoft-dashboards-js/Css/stimulsoft.viewer.office2013.whiteblue.css';

onMounted(() => {
  console.log('Loading Viewer view');
    
  console.log('Creating the dashboard viewer with default options');
  var viewer = new Stimulsoft.Viewer.StiViewer(undefined, 'StiViewer', false);

  console.log('Creating a new dashboard instance');
    
  var report = Stimulsoft.Report.StiReport.createNewDashboard();

  console.log('Load dashboard from url');
  report.loadFile('/dashboard/DashboardChristmas.mrt');

  console.log('Assigning dashboard to the viewer, the dashboard will be built automatically after rendering the viewer');
  viewer.report = report;

  console.log('Rendering the viewer to selected element');
  viewer.renderHtml('viewer');

  console.log('Loading completed successfully!');
});
</script>

<template>
  <div id="app">
    <div>
      <h2>Stimulsoft Dashboards.JS Viewer</h2>
      <div id="viewer"></div>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
