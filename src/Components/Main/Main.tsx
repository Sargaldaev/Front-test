import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import mainPic1 from '..//..//assets/main-pic1.png';
import mainPic2 from '..//..//assets/main-pic2.png';
import mainPic3 from '..//..//assets/main-pic3.png';
import mainPic4 from '..//..//assets/main-pic4.png';
import mainPic5 from '..//..//assets/main-pic5.png';
import mainPic6 from '..//..//assets/main-pic6.png';
import mainPicSmallScreen2 from '..//..//assets/mainPicSmallScreen2.png';
import mainPicSmallScreen from '..//..//assets/mainPicSmallScreen.png';
import eye from '..//..//assets/eye-icon.svg';
import notification from '..//..//assets/notification-icon.svg';
import Comments from './Comments/Comments.tsx';
import Sidebar from './Sidebar.tsx';
import * as React from 'react';
import { Grid, useMediaQuery } from '@mui/material';

const itemData = [
  {
    img: mainPic1,
    title: 'pic1',
  },
  {
    img: mainPic2,
    title: 'pic2',
  },
  {
    img: mainPic3,
    title: 'pic3',
  },
  {
    img: mainPic4,
    title: 'pic4',
  },
  {
    img: mainPic5,
    title: 'pic5',
  },
  {
    img: mainPic6,
    title: 'pic6',
  },
];
const Main = () => {
  const isSmallScreen = useMediaQuery('(max-width:400px)');
  return (
    <>
      {isSmallScreen ? (
        <Box>
          <img src={mainPicSmallScreen} alt="picture" />
          <Box
            sx={{
              background: '#fff',
              padding: '24px, 20px',
              borderRadius: '20px',
              mt: 3,
            }}
          >
            <img src={mainPicSmallScreen2} alt="picture" />
          </Box>
        </Box>
      ) : (
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Box
              bgcolor={'#fff'}
              padding={'25px 24px'}
              sx={{
                borderRadius: '20px',
              }}
            >
              <Box mt={'4px'} mb={'20px'}>
                <Typography
                  sx={{
                    fontSize: '12px',
                    color: '#9395B8',
                    mb: '11px',
                    mt: '10px',
                  }}
                >
                  Спортивная Борьба 12 марта, 2024 в 16:03
                </Typography>

                <Typography
                  component="h1"
                  sx={{
                    fontSize: '18px',
                    fontWeight: '600',
                  }}
                >
                  Илья Бессонов дал интервью для телеканала Россия-1
                </Typography>

                <Typography
                  sx={{
                    fontWeight: '500',
                    fontSize: '14px',
                    color: '#7B7EA5',
                  }}
                >
                  Илья Бессонов дал интервью после большого перерыва, где поделился секретом своего успеха и рассказал
                  методики своих тренировок. Спортсмен сделал заявление, что возвращается в спорт и ...
                  <Typography
                    display={'inline-block'}
                    sx={{
                      fontWeight: '548',
                      color: '#353754',
                      fontSize: '16px',
                      ml: '4px',
                    }}
                  >
                    Читать больше
                  </Typography>
                </Typography>
              </Box>

              <Box>
                <ImageList sx={{ width: '100%', height: 420, margin: 0 }} cols={3} rowHeight={164}>
                  {itemData.map((item) => (
                    <ImageListItem key={item.img} sx={{ margin: 0 }}>
                      <img
                        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                        alt={item.title}
                        loading="lazy"
                        style={{
                          borderRadius: '14px',
                          height: '200px',
                          width: '232px',
                          marginLeft: 1,
                        }}
                      />
                    </ImageListItem>
                  ))}
                </ImageList>

                <Box display={'flex'} mt={'4px'}>
                  <Box display={'flex'} mr={3}>
                    <img src={eye} alt="icon" />
                    <Typography
                      sx={{
                        color: '#7B7EA5',
                        fontWeight: 500,
                        fontSize: '14px',
                        marginLeft: 1,
                      }}
                    >
                      4.1K
                    </Typography>
                  </Box>

                  <Box display={'flex'}>
                    <img src={notification} alt="icon" style={{ marginRight: '4px' }} />
                    <Typography
                      sx={{
                        color: '#7B7EA5',
                        fontWeight: 500,
                        fontSize: '14px',
                      }}
                    >
                      4
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <hr />
              <Comments />
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Sidebar />
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default Main;
