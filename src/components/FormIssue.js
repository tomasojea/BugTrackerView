import {useEffect, useState} from "react"

function FormIssue(){
    const [send, setSend] = useState();
    
    const inputParams = [{name: "created_on", 
                          label:"Created On", 
                          defaultValue:"", 
                          type:"date",
                          value:""
                        },{name: "modified_on", 
                          label:"Modified On", 
                          defaultValue:"", 
                          type:"date",
                          value:""
                        },{name: "person_email", 
                          label:"E-mail", 
                          defaultValue:"", 
                          type:"text",
                          value:"Insert email"
                        },{name: "person_name", 
                          label:"Name", 
                          defaultValue:"", 
                          type:"text",
                          value:"Insert fullname"
                        }
                        ,{name: "username", 
                          label:"Username", 
                          defaultValue:"", 
                          type:"text",
                          value:"Insert username"
                       }]
    
    return(
            
            
    )
    
}

export default FormIssue;


