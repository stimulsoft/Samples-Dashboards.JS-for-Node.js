import React from 'react';
import { Stimulsoft } from 'stimulsoft-dashboards-js/Scripts/stimulsoft.viewer'
import './App.css';

class App extends React.Component {
    private viewer = new Stimulsoft.Viewer.StiViewer(undefined, 'StiViewer', false);
    private report = Stimulsoft.Report.StiReport.createNewDashboard();

    render() {
        return (
            <div id="viewer" className="App">
            </div>
        );
    }

    async componentDidMount() {
        console.log('Loading Viewer view');

        const response = await fetch('dashboard/DashboardChristmas.mrt');
        const data = await response.json();
        console.log('Load dashboard from url');
        this.report.loadDocument(data);
        this.viewer.report = this.report;

        console.log('Rendering the viewer to selected element');
        this.viewer.renderHtml('viewer');
    }

}

export default App;
