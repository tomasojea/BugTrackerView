import SideBar from "../components/SideBar"
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
                    <Route exact path="/">
                        <GraphGrid/>
                    </Route>
                    <Route  path="/issues">
                        <TableData/>
                    </Route>
                     <Route path="/projects">
                        <ProjectTable/>
                    </Route>
                     <Route path="/charts">
                        <GraphGrid/>
                    </Route>
                </Switch> 
                          

            </div>
        </Router> 
  );
}
  


export default App;
    
    