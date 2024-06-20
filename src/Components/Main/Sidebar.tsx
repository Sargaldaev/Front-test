import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import medal from '..//..//assets/medal-Icon.svg';
import video from '..//..//assets/video-Icon.svg';
import grid from '..//..//assets/grid.svg';
import result from '..//..//assets/result-Icon.svg';
import * as React from 'react';
import pic from '..//..//assets/Side-pic.png';
import { useMediaQuery } from '@mui/material';

const navItems = ['Все', 'Результаты соревнований', 'Видео', 'Достижения'];
const icons = [grid, result, video, medal];
const Sidebar = () => {
  const isSmallScreen = useMediaQuery('(max-width:900px)');

  return (
    <Box display={'flex'} flexDirection={'column'}>
      <Box
        bgcolor={'#fff'}
        sx={{
          maxWidth: 371,
          marginLeft: '20px',
          borderRadius: '20px',
          padding: '22px 11px',
        }}
      >
        <Box>
          <Typography
            sx={{
              fontWeight: '600',
              fontSize: '20px',
              mt: '8px',
            }}
          >
            Фильтр ленты
          </Typography>

          <Box display={'flex'} ml={1} flexDirection={'column'}>
            {navItems.map((item, index) => (
              <Box
                display={'flex'}
                alignItems={'center'}
                key={index}
                sx={{
                  background: index === 0 ? '#F1F3F7' : '#fff',
                  color: index === 0 ? '#06082C' : '#7B7EA5',
                  borderRadius: '10px',
                  mt: '10px',
                }}
              >
                <img
                  src={icons[index]}
                  alt="icon"
                  style={{
                    marginTop: '10px',
                  }}
                />
                <Typography
                  sx={{
                    fontWeight: '548',
                    fontSize: '14px',
                    p: '3px 14px',
                    mt: '16px',
                  }}
                >
                  {item}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      <Box mt={2} ml={2}>
        <img
          src={pic}
          alt="picture"
          style={{
            width: isSmallScreen ? '371px' : '100%',
            marginTop: '32px',
          }}
        />
      </Box>
    </Box>
  );
};

export default Sidebar;
