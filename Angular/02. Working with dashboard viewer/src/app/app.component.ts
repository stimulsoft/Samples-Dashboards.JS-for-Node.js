import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { Http } from '@angular/http';
import { Response } from '@angular/http';
import { Stimulsoft } from 'stimulsoft-reports-js/Scripts/stimulsoft.designer'

@Component({
  selector: 'app-root',
  template: `<div>
                  <h2>Stimulsoft Dashboards.JS Viewer</h2>
                  <div id="viewer"></div>
              </div>`,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  viewer: any = new Stimulsoft.Viewer.StiViewer(null, 'StiViewer', false);
  report: any = Stimulsoft.Report.StiReport.createNewDashboard();

  ngOnInit() {
    console.log('Loading Viewer view');

    this.http.request('dashboard/DashboardChristmas.mrt').subscribe((data: Response) => {

      console.log('Load dashboard from url');
      this.report.loadDocument(data.json());
      this.viewer.report = this.report;

      console.log('Rendering the viewer to selected element');
      this.viewer.renderHtml('viewer');
    });
  }

  constructor(private http: Http) {

  }
}
