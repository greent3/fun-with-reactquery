import { Box, Typography } from '@mui/material'
import ColoredBox from './components/ColoredBox'
import CopyableText from './components/CopyableText';


function App() {

  var colorList = [
    { name: 'red-orange', value: '#ff7f50' },
    { name: 'sky-blue', value: '#87cefa' },
    { name: 'lavender', value: '#da70d6' },
    { name: 'lime-green', value: '#32cd32' },
    { name: 'dark-blue', value: '#6495ed' },
    { name: 'hot-pink', value: '#ff69b4' },
    { name: 'purple', value: '#ba55d3' },
    { name: 'maroon', value: '#cd5c5c' },
    { name: 'orange', value: '#ffa500' },
    { name: 'turquoise', value: '#40e0d0' }
  ];

  return (
    <Box sx={{ display: 'flex', height: '95vh', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
        <ColoredBox id={0} />
        <ColoredBox id={1} />
        <ColoredBox id={2} />
      </Box>
      <Typography variant={'h2'}>Example Hex Codes:</Typography>

      {colorList.map((color, i) =>
        <CopyableText key={i} name={color.name} value={color.value} />
      )}
    </Box>
  )
}

export default App
