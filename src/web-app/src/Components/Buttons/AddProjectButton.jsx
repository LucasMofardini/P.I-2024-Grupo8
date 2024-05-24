import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import { IconButton } from '@mui/material';


const AddProjectButton = ({ ...props}) => {
    return(
        <IconButton aria-label="AddIcon" sx={{ mt: 1, mb: 6 }}>
            <AddIcon style={{ fontSize: '40px' }} {...props} />
        </IconButton>
    )
}


export default AddProjectButton;