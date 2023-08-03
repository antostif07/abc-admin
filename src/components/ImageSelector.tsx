// @ts-nocheck
import {useState, useEffect} from 'react'
import { ImageList, ImageListItem, Typography} from '@mui/material'

export const ImageSelector = ({handleClick}) => {
    const [images, setImages] = useState([])

    useEffect(() => {
        const dataFetch = async () => {
          const data = await (
            await fetch(`${import.meta.env.VITE_API_URL}/images`)
          ).json()
    
          setImages(data['hydra:member'])
        }
    
        dataFetch()
      }, [])

    return (
        <ImageList sx={{ width: 400, height: 200 }} cols={3} rowHeight={64}>
        {
          images ? (
            images.length < 1 ? (
              <Typography>No Images</Typography>
            ) : (
              images.map((item) => (
                <ImageListItem key={item.img}>
                  <img
                    onClick={() => handleClick(item)}
                    src={`${import.meta.env.VITE_API_URL}${item.contentUrl}?w=164&h=164&fit=crop&auto=format`}
                    srcSet={`${import.meta.env.VITE_API_URL}${item.contentUrl}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                  />
                </ImageListItem>
              ))
            )
          ) : (
            <Typography>Error Occured</Typography>
          )
        }
      </ImageList>
    );
}