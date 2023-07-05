// @ts-nocheck
import { Box, ImageList, Typography, ImageListItem } from '@mui/material';
import {List, CreateButton, WithListContext} from 'react-admin'

const Empty = () => (
    <Box textAlign="center" m={1}>
        <Typography variant="h4" paragraph>
            No images
        </Typography>
        <Typography variant="body1">
            Create one or import from a file
        </Typography>
        <CreateButton />
    </Box>
);

export const ImagesList = (props) => (
    <List {...props} sx={{width: '100%'}}>
        <WithListContext
            render={({ data }) => (
                <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
                {data?.map((item) => (
                    <ImageListItem key={item.contentUrl}>
                        <img
                            src={`${import.meta.env.VITE_API_URL}${item.contentUrl}?w=164&h=164&fit=crop&auto=format`}
                            srcSet={`${import.meta.env.VITE_API_URL}${item.contentUrl}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.contentUrl}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
                </ImageList>
            )}
        />
    </List>
)