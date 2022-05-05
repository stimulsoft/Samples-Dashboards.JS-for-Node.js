import { Component } from '@angular/core';
import {Stimulsoft} from 'stimulsoft-dashboards-js/Scripts/stimulsoft.blockly.editor'

@Component({
  selector: 'app-root',
  template: `<div>
                  <h2>Stimulsoft Dashboards.JS Designer</h2>
                  <div id="designer"></div>
              </div>`
})
export class AppComponent {
  options: any;
  designer: any;

  ngOnInit() {
    console.log('Loading Designer view');

    console.log('Set full screen mode for the designer');    
    this.options = new Stimulsoft.Designer.StiDesignerOptions();
    this.options.appearance.fullScreenMode = false;

    console.log('Create the dashboard designer with specified options');
    this.designer = new Stimulsoft.Designer.StiDesigner(this.options, 'StiDesigner', false);

    console.log('Edit dashboard template in the designer');
    this.designer.report = Stimulsoft.Report.StiReport.createNewDashboard();

    // In `onBeginProcessData` event handler add custom HTTP headers
    this.designer.report.onBeginProcessData = (args: any) => {
      if (
          args.database === "JSON" && 
          args.command === "GetData" && 
          args.pathData && args.pathData.endsWith("/ProtectedDemo.json")
      ) {
          // Add custom header to pass through server protection
          args.headers.push({key: "X-Auth-Token", value: "*YOUR TOKEN*"});
      }
    };

    console.log('Load dashboard from url');
    this.designer.report.loadFile('/dashboards/DBSsimp.mrt');

    console.log('Rendering the designer to selected element');
    this.designer.renderHtml('designer');

    console.log('Loading completed successfully!');
  }

  constructor() {
  }
}
