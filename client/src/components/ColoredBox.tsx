import { useState } from 'react'
import { Box, TextField, Typography } from '@mui/material'
import { useGetBoxColor } from '../hooks/api/useGetBoxColor';
import { useUpdateColor } from '../hooks/api/useUpdateColor';
import { LoadingButton } from '@mui/lab';

interface ColoredBoxProps {
  id: number
}

function ColoredBox({ id }: ColoredBoxProps) {
  const [textValue, setTextValue] = useState("")

  const { isLoading: getColorIsLoading, error, data } = useGetBoxColor(id)

  const { mutateAsync, isLoading: updateColorIsLoading } = useUpdateColor()

  if (getColorIsLoading) return <Typography>{'Loading...'}</Typography>

  if (error) return <Typography>{'An error has occurred: ' + error}</Typography>

  const updateValue = (e: any) => {
    setTextValue(e.target.value)
  }

  const handleSubmit = () => {
    mutateAsync({ id, newColor: textValue })
    setTextValue("")
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', m: 10 }}>
      <Box sx={{ width: 200, height: 200, backgroundColor: data.color, mb: 2 }}></Box>
      <Typography sx={{ mb: 1 }}>Box # {id}</Typography>
      <form onSubmit={(e) => {
        e.preventDefault()
        handleSubmit()
      }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <TextField size='small' placeholder="ex: #0003F8" value={textValue} onChange={updateValue} sx={{ mb: 1 }}> </TextField>
          <LoadingButton
            loading={updateColorIsLoading}
            variant="outlined"
            type="submit"
            sx={{ color: '#000000', borderColor: '#000000', backgroundColor: data.color }}>
            Update color
          </LoadingButton>
        </Box>
      </form>
    </Box >
  )
}

export default ColoredBox