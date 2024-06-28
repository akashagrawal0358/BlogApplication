
import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(http://mrtaba.ir/image/bg2.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px top -100px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;


const Contact = () => {
    return (
        <Box>
            <Banner />
            <Wrapper>
                <Typography variant="h3">Get in touch!!</Typography>    
                <Text variant="h5">
                    To connect with me, Send an email on 
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="mailto:akash26077@gmail.com" target="_blank" color="inherit">
                            <Email />
                        </Link>.
                    </Box>
                </Text>
            </Wrapper>
        </Box>
    );
}

export default Contact;