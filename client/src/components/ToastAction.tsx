import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { IconButton, Snackbar, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';

interface ToastActionProps {
    handleClose(): void;
}

export default function ToastAction({ handleClose }: ToastActionProps) {


    return (
        <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
        >
            <CloseIcon fontSize="small" />
        </IconButton>
    )
}
