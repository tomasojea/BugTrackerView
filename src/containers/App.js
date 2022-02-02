import SideBar from "../components/SideBar"
import Issue from "../components/Issue.js"
import User from "../components/User.js"
import Form from "../components/Form.js"
import GraphGrid from "../components/GraphGrid"
import IssuesData from "../components/IssuesData.js"
import ProjectTable from "../components/ProjectTable.js"
import FormPeople from "../components/FormPeople"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"



function App() {
          
    return (
        <Router>    
            <div className="App" style={{display: "flex"}}>
                <SideBar/>
               
                <Switch> 
                    <Route exact path="/" component={GraphGrid}/>
                       
                    <Route exact  path="/issues" component={IssuesData}/>
                     
                    <Route exact  path="/projects" component={ProjectTable}/>
                        
                    <Route exact path="/projects/issues"  component={Issue}/>
                    
                    <Route exact path="/users"  component={User}/>
                    
                    <Route  path="/charts" component={GraphGrid}/>
                            
                    <Route  path="/createuser" component={FormPeople}/>
                </Switch> 
            </div>
        </Router> 
  );
}
  


export default App;
    
    