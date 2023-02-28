import { IconButton, Snackbar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useState } from 'react'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CloseIcon from '@mui/icons-material/Close';


function CopyableText({ name, value }: { name: string, value: string }) {
    const [toastOpen, setToastOpen] = useState(false)

    function copyToClipboard(text: string) {
        navigator.clipboard.writeText(value);
        setToastOpen(true);
    }

    function handleClose(event: any) {
        setToastOpen(false)
    }

    const action = (
        <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
        >
            <CloseIcon fontSize="small" />
        </IconButton>
    );

    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <Typography sx={{ color: '#757575', fontWeight: 600, mr: 2 }}>{name}</Typography>
            <Typography sx={{ color: '#757575', fontWeight: 600 }}>{value}</Typography>
            <IconButton onClick={() => copyToClipboard(value)}>
                <ContentCopyIcon />
            </IconButton>
            <Snackbar
                open={toastOpen}
                autoHideDuration={1000}
                onClose={handleClose}
                message="Copied to clipboard!"
                action={action}
            />
        </Box >
    )
}

export default CopyableText

