
// In this, all "post" are displayed using map 

import { useEffect, useState } from 'react';

import { Grid, Box } from '@mui/material';
import { Link, useSearchParams } from 'react-router-dom';

// import { getAllPosts } from '../../../service/api';
import { API } from '../service/api';
import Post from './Post';

const Posts = () => {

    // Stores posts   
    // array used for multiple posts
    const [posts, getPosts] = useState([]);
    
    const [searchParams] = useSearchParams();

    // Helps in showing the post according to the category selected
    const category = searchParams.get('category');

    useEffect(() => {
        const fetchData = async () => { 
            let response = await API.getAllPosts({ category : category || '' });
            if (response.isSuccess) {
                getPosts(response.data);
            }
        }
        fetchData();
    }, [category]);

    return (
        <>
            {   
                // posts state contains array of post
                posts?.length ? posts.map(post => (
                    <Grid item lg={3} sm={4} xs={12}>
                        <Link style={{textDecoration: 'none', color: 'inherit'}} to={`details/${post._id}`}>
                            {/* post data passed to Post component  */}
                            <Post post={post} />
                        </Link>
                    </Grid>
                )) : <Box style={{color: '878787', margin: '30px 80px', fontSize: 18}}>
                        No data is available for selected category
                    </Box>
            }
        </>
    )
}

export default Posts;