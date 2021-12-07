import SideBar from "../components/SideBar"
import GraphGrid from "../components/GraphGrid"
import TableData from "../components/TableData.js"



function App() {
    
      
    return (
        <div className="App" style={{display: "flex"}}>
        
            <SideBar />
            <GraphGrid />
            <TableData/>
        
        </div>
  );
}
  


export default App;
