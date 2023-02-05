import React from 'react';
import { Box } from '@mui/system';
import {Footer} from '..'

const p1 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus facilisis aliquam ipsum, nec vulputate libero euismod in. In ac massa scelerisque, consectetur est ac, dapibus orci. In sem risus, pharetra eget libero vitae, commodo malesuada nibh. Donec rhoncus velit quis lorem ornare, ut pellentesque arcu feugiat. Vestibulum quis urna sem. Ut felis enim, cursus euismod tempor nec, vehicula ac magna. Nunc in tincidunt libero, id rutrum nunc. Maecenas massa metus, faucibus id augue egestas, auctor imperdiet enim. Proin elit elit, tempus at justo nec, eleifend ornare augue. Fusce rutrum nunc nisl, at ultricies turpis interdum et. Aliquam ut ipsum nibh.`
const p2 = `Ut lacinia nisi eu ex tempor, non pharetra mauris mollis. Proin maximus lectus sit amet libero maximus, congue gravida enim tempus. Nam non tempor massa. Nunc ornare, arcu eget lacinia vestibulum, est lectus consectetur erat, nec blandit ligula leo ac massa. Nunc convallis nibh est, ut pellentesque nisi vulputate quis. Fusce congue, metus ut accumsan egestas, purus enim feugiat ante, eget condimentum augue libero a eros. Sed pellentesque odio in elit accumsan sagittis. Etiam quis iaculis odio. Suspendisse magna augue, maximus et dapibus eu, aliquam eget dui.`
const p3 = `Pellentesque nec feugiat turpis. Ut vel orci feugiat, blandit est et, fringilla arcu. Fusce erat tellus, sollicitudin eu magna non, ultricies vulputate dui. Fusce eu justo nec nulla efficitur cursus. Integer ligula mi, finibus et pulvinar a, efficitur a lectus. Duis commodo vel metus a lacinia. Mauris vel mollis leo. Nullam condimentum augue purus, quis pulvinar arcu porta quis. Mauris pellentesque sapien urna, sagittis ultricies lorem pulvinar vel. Vestibulum sed aliquet orci. Suspendisse vel nisl at justo tempus placerat quis a lacus. Curabitur viverra vestibulum odio nec lacinia. Ut vitae pellentesque turpis, ut malesuada metus. Aenean finibus nibh id ex tempus, in finibus tellus commodo. Fusce mollis nibh in sollicitudin porta.`




const Subjunctive = () => {
  return (
    <Box padding = {4}>
        <h2 className='heading '>The Subjunctive</h2>
        <p>{p1}</p>
        <p>{p2}</p>
        <p>{p3}</p>

        <Footer />
    </Box>
  )
}

export default Subjunctive