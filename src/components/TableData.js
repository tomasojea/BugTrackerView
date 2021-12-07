import { DataGrid } from '@mui/x-data-grid';



function TableData(){
    
    async function apiGet() {
        const response = await fetch('http://localhost:8081/issues');
        const data1 = await response.json();
        setData(data1._embedded.issues);
  }
      
  
      useEffect(() => {
        console.log("executed only once!");
        apiGet();
        console.log("data only once!");
        console.log(data);

  }, [""]);
    
    return(
            <>
                <DataGrid
                    rows={Object.keys(data)}
                    columns={Object.values(data)}
                    pageSize={5}
                    checkboxSelection
                    disableSelectionOnClick
                />
            </>
    
    )
}

export default TableData;
