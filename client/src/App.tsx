import { Box, Typography } from '@mui/material'
import ColoredBox from './components/ColoredBox'
import CopyableText from './components/CopyableText';


function App() {

  var colorList = [
    '#ff7f50', '#87cefa', '#da70d6', '#32cd32', '#6495ed',
    '#ff69b4', '#ba55d3', '#cd5c5c', '#ffa500', '#40e0d0'
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
        <CopyableText key={i} text={String(color)} />
      )}
    </Box>
  )
}

export default App
