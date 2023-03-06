import { useState } from 'react'
import { Box, TextField, Snackbar, Typography } from '@mui/material'
import { useGetBoxColor } from '../hooks/api/useGetBoxColor';
import { useUpdateColor } from '../hooks/api/useUpdateColor';
import { LoadingButton } from '@mui/lab';
import ToastAction from './ToastAction'

interface ColoredBoxProps {
  id: number
}

function ColoredBox({ id }: ColoredBoxProps) {
  const [textValue, setTextValue] = useState<string>("")
  const [toastOpen, setToastOpen] = useState(false)

  const { isLoading: getColorIsLoading, error, data } = useGetBoxColor(id)

  const { mutateAsync, isLoading: updateColorIsLoading } = useUpdateColor(id)

  if (getColorIsLoading) return <Typography>{'Loading...'}</Typography>

  if (error) return <Typography>{'An error has occurred: ' + error}</Typography>

  const updateValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextValue(e.target.value)
  }

  const handleClose = () => {
    setToastOpen(false)
  }
  const hexEx = new RegExp('^#[a-zA-Z0-9]{6}')
  const numEx = new RegExp('[a-zA-Z0-9]{6}')

  const formatInput = (unformattedValue: string | number): string => {
    let stringVal = String(unformattedValue)
    if (numEx.test(stringVal)) {
      return `#${stringVal}`
    }
    return stringVal
  }

  const validateHex = (color: string): boolean => {
    if (hexEx.test(color)) {
      return true
    }
    return false
  }

  const handleSubmit = () => {
    const newVal = formatInput(textValue)
    if (validateHex(newVal)) {
      mutateAsync({ id, newColor: newVal })
    }
    else {
      setToastOpen(true)
    }
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
          <TextField size='small' placeholder="ex:#0003F8 or 0003F8" value={textValue} onChange={updateValue} sx={{ mb: 1 }}> </TextField>
          <LoadingButton
            loading={updateColorIsLoading}
            variant="outlined"
            type="submit"
            sx={{ color: '#000000', borderColor: '#000000', backgroundColor: data.color }}>
            Update color
          </LoadingButton>
        </Box>
      </form>
      <Snackbar
        open={toastOpen}
        autoHideDuration={1000}
        onClose={handleClose}
        message="Please use a number or hex value!"
        action={<ToastAction handleClose={handleClose} />}
      />
    </Box >
  )
}

export default ColoredBox