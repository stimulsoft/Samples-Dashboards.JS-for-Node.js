import React from 'react';
import {Stimulsoft} from 'stimulsoft-dashboards-js/Scripts/stimulsoft.blockly.editor';
import './App.css';

class App extends React.Component {
    private options: any;
    private designer: any;

    render() {
        return (
            <div id="designer" className="App">
            </div>
        );
    }

    componentDidMount() {
        console.log('Loading Designer view');

        console.log('Set full screen mode for the designer');
        this.options = new Stimulsoft.Designer.StiDesignerOptions();
        this.options.appearance.fullScreenMode = false;

        console.log('Create the dashboard designer with specified options');
        this.designer = new Stimulsoft.Designer.StiDesigner(this.options, 'StiDesigner', false);

        console.log('Edit dashboard template in the designer');
        this.designer.report = Stimulsoft.Report.StiReport.createNewDashboard();

        console.log('Load dashboard from url');
        this.designer.report.loadFile('/dashboard/DashboardChristmas.mrt');

        console.log('Rendering the designer to selected element');
        this.designer.renderHtml('designer');

        console.log('Loading completed successfully!');
    }

}

export default App;
