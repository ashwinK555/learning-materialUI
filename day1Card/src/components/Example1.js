import React from 'react'
import { Card,CardActions,CardContent,Button,CardMedia,Typography, CardHeader } from '@mui/material'

const Example1 = () => {
  return (
    <div>

    <div>
        <Card  sx={{
      maxWidth:200,
       padding:0
    }}>
  <CardMedia
 
  component="img"
  image='https://media.istockphoto.com/id/546777390/photo/sneaky-sly-scheming-young-woman-plotting-something.jpg?s=1024x1024&w=is&k=20&c=c6OooFPqmsNTBxy-h-KKRkhYDWDCEg5tJ51sr5brfjY='
 alt='photo Loading...'
 />
<CardContent 
sx={{
    padding:1
}}>
  <Typography variant='body'>This is a card content</Typography>
  <Typography variant='body' >some body content lies here, djhfjafh dfjhjd jdfua jdhfu sjdgfud jdfg</Typography>
</CardContent>
  <CardActions>
    <Button variant="contained" color="error">Watch</Button>
  </CardActions>
    </Card>
    </div>
  

    </div>
  )
}

export default Example1
