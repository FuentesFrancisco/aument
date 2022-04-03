import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import moment from 'moment';


export default function MultiActionAreaCard({action, miniature, post, push, ...props }) {
    let isCreate = action === 'create';
    if (!isCreate && !post) window.location.href = '/'
    return (<div >
        <Card style={miniature ? { width: '100%' } : { width: '70%', margin: 'auto' }}>
            <CardActionArea >
                <CardMedia
                    component="img"
                    style={miniature ? { height: '150px' } : { height: '300px' }}
                    image={post?.image || "https://avalos.sv/wp-content/uploads/default-featured-image.png"}
                    alt={post?.image}
                />
                <CardContent>
                    <div style={{ display: 'flex' }}>
                        <Box
                            style={{ width: 'min-content' }}
                            sx={{
                                borderRadius: '5px',
                                backgroundColor: 'primary.dark',
                                '&:hover': {
                                    backgroundColor: 'primary.main',
                                    opacity: [0.9, 0.8, 0.7],
                                },
                            }}
                        >
                            <Typography
                                style={{ color: 'white', padding: '2px', paddingLeft: "10px", paddingRight: "10px" }}>
                                {post?.tag || 'Tag'}
                            </Typography>
                        </Box>
                        <Typography style={{ marginLeft: '20px', color: 'grey', fontSize: '15px', paddingTop: '2px' }}>
                            {moment(post?.date || new Date().toString()).format('MMMM D, YYYY')}
                        </Typography>
                    </div>
                    <Typography gutterBottom style={miniature ? { 'fontSize': '30px' } : { 'fontSize': '60px' }} component="div">
                        {post?.title || 'TITLE'}
                    </Typography>
                    {!miniature && <div dangerouslySetInnerHTML={{ __html: post?.text?.replaceAll('<p>', '<p style="margin-bottom: 0px !important">') || 'Text desription' }} />}
                </CardContent>
            </CardActionArea>
        </Card>                
    </div >
    );
}
