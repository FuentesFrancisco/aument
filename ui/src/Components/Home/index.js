import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ShowPost from '../showPost/index.js';
import {Link} from 'react-router-dom';

const Home = ({...props}) => {
    if (!props.posts) return <></>
    return <><ImageList variant={'standard'} cols={3}>
        {props.posts.map((item) => (
            <Link to={'/view'} style={{ textDecoration: 'none' }} onClick={() => props.postData(item)}>
            <ImageListItem key={item._id}>
                <ShowPost post={item} convertedText={item.text} miniature={true} {...props} />
            </ImageListItem>
            </Link>
        ))}
    </ImageList>
        </>
}

export default Home

