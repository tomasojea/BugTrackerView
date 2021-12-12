import { Drawer } from '@material-ui/core'
import Paper from '@material-ui/core/Paper';
import {Link} from "react-router-dom"
import { makeStyles } from '@material-ui/core'
import { List, ListItem, ListItemIcon, ListItemButton, ListItemText} from '@mui/material';
import AccountBalanceWalletTwoToneIcon from '@mui/icons-material/AccountBalanceWalletTwoTone';
import AssignmentLateTwoToneIcon from '@mui/icons-material/AssignmentLateTwoTone';

const useStyles = makeStyles({
    page:{
        background: "#f9f9f9",
        width: "100%"
    },
    drawer: {
        width: "250px"
    },
    drawerPaper: {
        width: "250px"
    }
});

 function SideBar() {
    
    const classes = useStyles();
    const menuItems = [
        {
            text:"projects",
            icon: <AccountBalanceWalletTwoToneIcon />,
            
        },
        {
            text:"Issues",
            icon: <AssignmentLateTwoToneIcon />,
        },
        {
            text:"Charts",
            icon: <AssignmentLateTwoToneIcon />,
        }
    ];
    
    return (
    <div>
        
        <Drawer 
            className={classes.drawer}
            anchor="left" 
            variant="permanent"
            classes={{paper: classes.drawerPaper}}
            >
            <List>
                {menuItems.map((item) => (
                <ListItem>
                    <ListItemIcon>
                        {item.icon}
                    </ListItemIcon>
                    <ListItemText>
                        <Link  to={"/" + item.text} style={{ textDecoration: 'none' }}>{item.text}</Link>
                    </ListItemText>
                </ListItem>
                
                ))
            }
            </List>
            
        </Drawer>
    </div>
        
    );
}
  

 
export default SideBar;

