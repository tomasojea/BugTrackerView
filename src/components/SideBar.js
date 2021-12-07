import { Drawer } from '@material-ui/core'
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
            text:"Projects",
            icon: <AccountBalanceWalletTwoToneIcon />,
            
        },
        {
            text:"Issues",
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
                    <ListItemText primary={item.text}/>
                </ListItem>
                ))
            }
            </List>
            
        </Drawer>
    </div>
        
    );
}
  

 
export default SideBar;

