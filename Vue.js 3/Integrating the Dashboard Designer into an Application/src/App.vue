<script setup lang="ts">
import { onMounted } from "vue";
import { Stimulsoft } from "stimulsoft-dashboards-js/Scripts/stimulsoft.blockly.editor";
import 'stimulsoft-dashboards-js/Css/stimulsoft.designer.office2013.whiteblue.css';
import 'stimulsoft-dashboards-js/Css/stimulsoft.viewer.office2013.whiteblue.css';

onMounted(() => {
  console.log('Loading Designer view');

  console.log('Set full screen mode for the designer');
  var options = new Stimulsoft.Designer.StiDesignerOptions();
  options.appearance.fullScreenMode = false;

  console.log('Create the dashboard designer with specified options');
  var designer = new Stimulsoft.Designer.StiDesigner(options, 'StiDesigner', false);

  console.log('Create a new dashboard instance');
  var report = Stimulsoft.Report.StiReport.createNewDashboard();

  console.log('Load dashboard from url');
  report.loadFile('dashboard/DashboardChristmas.mrt');

  console.log('Edit dashboard template in the designer');
  designer.report = report;

  console.log('Rendering the designer to selected element');
  designer.renderHtml('designer');

  console.log('Loading completed successfully!');
});
</script>

<template>
  <div id="app">
    <div>
      <h2>Stimulsoft Dashboards.JS Designer</h2>
      <div id="designer"></div>
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
