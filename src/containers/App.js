import SideBar from "../components/SideBar"
import Issue from "../components/Issue.js"
import FormProject from "../components/FormProject.js"
import GraphGrid from "../components/GraphGrid"
import TableData from "../components/TableData.js"
import ProjectTable from "../components/ProjectTable.js"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"



function App() {
          
    return (
        <Router>    
            <div className="App" style={{display: "flex"}}>
                <SideBar/>
               
                <Switch> 
                    <Route exact path="/" component={GraphGrid}/>
                       
                    <Route exact  path="/issues" component={TableData}/>
                     
                    <Route exact  path="/projects" component={ProjectTable}/>
                        
                    <Route exact path="/projects/issues"  component={Issue}/>
                    
                    <Route  path="/charts" component={GraphGrid}/>
                            
                    <Route  path="/form" component={FormProject}/>
                </Switch> 
            </div>
        </Router> 
  );
}
  


export default App;
    
    