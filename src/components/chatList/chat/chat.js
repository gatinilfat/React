import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

export function Chat({ name, selected, handleListItemClick }) {
    return (        
            <ListItem 
              disablePadding
              selected={selected}
              button={true}
              onClick={handleListItemClick}>
                <ListItemButton>
                    <ListItemText primary={name} />
                </ListItemButton>
            </ListItem>       
    )
}