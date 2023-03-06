import { useState } from 'react'
import { Box, Typography } from '@mui/material'
import { useGetBoxColor } from '../hooks/api/useGetBoxColor';


interface ColorDescProps {
    id: number
}

function ColorDescription({ id }: ColorDescProps) {
    const [textValue, setTextValue] = useState("")

    const { isLoading: getColorIsLoading, error, data } = useGetBoxColor(id)

    if (getColorIsLoading) return <Typography>{'Loading...'}</Typography>

    if (error) return <Typography>{'An error has occurred: ' + error}</Typography>


    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', m: 10 }}>
            <Typography>{data.color}</Typography>
        </Box >
    )
}

export default ColorDescription