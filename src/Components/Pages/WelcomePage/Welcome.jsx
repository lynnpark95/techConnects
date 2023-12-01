import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';

const sections = [];

const mainFeaturedPost = {
  title: (
    <div style={{ fontFamily: 'serif', color: 'blanchedalmond', fontWeight:'bolder'}}>
      Lama  Innovationz
    </div>
  ),
  description: (
    <div style={{ fontFamily: 'serif', color: 'blanchedalmond', fontWeight:'bold'}}>
      LIFE HAS NO LIMITATIONS EXCEPT THE ONES YOU MAKE. ARE YOU GAME?
    </div>
  ),
  image: 'https://www.advancedsciencenews.com/wp-content/uploads/2022/06/aging.jpg',
  imageText: 'main image description',
};

const sidebar = {
  title: 'About',
  description: 'At Lama, We like to keep our message simple, Enhance Quality of Life based on Integrity, Innovation, Insights',
};

const defaultTheme = createTheme();

export default function welcome() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Blog" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={5} sx={{ mt: 3, }}>
          <Main title={
            <div style={{ fontFamily: 'serif', fontWeight: 'bold', textAlign:'center'}}>
              Welcome to Lama Innovationz Care Management System
            </div>
          } />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer
      />
    </ThemeProvider>
  );
}
