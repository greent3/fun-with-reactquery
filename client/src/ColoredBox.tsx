import { useState } from 'react'
import { useQuery, useMutation } from 'react-query'
import { Box, Button, TextField, Typography } from '@mui/material'
import axios from 'axios';

interface ColoredBoxProps {
  id: number
}

function ColoredBox({ id }: ColoredBoxProps) {
  const [textValue, setTextValue] = useState("")

  const { isLoading, error, data } = useQuery(["repoData", id], async () => {
    const { data } = await axios.get(`http://localhost:8080/boxColor/${id}`)
    return data
  })

  const mutateColor = useMutation((newColor: string) => {
    return axios.patch(`http://localhost:8080/boxColor/${id}`, { color: newColor })
  })

  if (isLoading) return <Typography>{'Loading...'}</Typography>

  if (error) return <Typography>{'An error has occurred: ' + error}</Typography>

  const updateValue = (e: any) => {
    setTextValue(e.target.value)
  }

  const handleSubmit = () => {
    mutateColor.mutate(textValue)
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', m: 10 }}>
      <Box sx={{ width: 200, height: 200, backgroundColor: data.color, mb: 2 }}></Box>
      <Typography sx={{ mb: 1 }}>Update color for box {id}</Typography>
      <form onSubmit={handleSubmit}>
        <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
          <TextField size='small' placeholder="ex: #0003F8" value={textValue} onChange={updateValue} sx={{ mb: 1 }}> </TextField>
          <Button variant="outlined" type="submit" sx={{color:'#000000', borderColor:'#000000', backgroundColor:data.color}}>Update color</Button>
        </Box>
      </form>
    </Box>
  )
}

export default ColoredBox