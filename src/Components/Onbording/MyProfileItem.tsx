import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import avatar from '..//..//assets/ProfileAvatar.svg';
import flag from '..//..//assets/FlagofRussia.svg';
import Followers from '..//..//assets/Followers.png';
import Following from '..//..//assets/following.png';
import share from '..//..//assets/share.svg';
import Typography from '@mui/material/Typography';
import { Alert, useMediaQuery } from '@mui/material';
import Button from '@mui/material/Button';

const MyProfileItem = () => {
  const isSmallScreen = useMediaQuery('(max-width:600px)');

  return (
    <>
      <Box display={'flex'} flexDirection={isSmallScreen ? 'column' : 'row'} p={'24px 20px'}>
        <Box>
          <Avatar
            sx={{
              width: isSmallScreen ? 100 : 140,
              height: isSmallScreen ? 100 : 140,
              margin: isSmallScreen ? '0 auto' : 0,
            }}
          >
            <img src={avatar} alt="avatar" />
          </Avatar>
        </Box>

        <Box ml={3}>
          <Box display={'flex'}>
            <img src={flag} alt="flagOfRussia" />
            <Typography
              sx={{
                color: '#9395B8',
                fontSize: '14px',
                fontWeight: '548',
                ml: 1,
              }}
            >
              Российская Федерация
            </Typography>
          </Box>
          <Typography
            sx={{
              color: '#06082C',
              fontSize: isSmallScreen ? '20px' : '30px',
              fontWeight: '600',
              mb: 3,
            }}
          >
            Александр Магомедов
          </Typography>

          <Box display={'flex'}>
            <Box display={'flex'}>
              <img src={Followers} alt="flagOfRussia" style={{ width: isSmallScreen ? 40 : 40, height: 30 }} />
              <Typography
                sx={{
                  color: '#9395B8',
                  fontSize: '14px',
                  fontWeight: '548',
                  ml: 1,
                }}
              >
                <Typography display={'inline-block'} sx={{ color: '#06082C', fontWeight: '548', fontSize: '14px' }}>
                  {isSmallScreen ? 71 : 2}
                </Typography>
                Подписчики
              </Typography>
            </Box>

            <Box display={'flex'}>
              <img src={Following} alt="flagOfRussia" style={{ width: isSmallScreen ? 40 : 60, height: 30 }} />
              <Typography
                sx={{
                  color: '#9395B8',
                  fontSize: '14px',
                  fontWeight: '548',
                  ml: 1,
                }}
              >
                <Typography display={'inline-block'} sx={{ color: '#06082C', fontWeight: '548', fontSize: '14px' }}>
                  {isSmallScreen ? 15 : 10}
                </Typography>
                Подписки
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      <Alert
        severity="info"
        sx={{
          background: ' #353754',
          color: '#fff',
          fontWeight: '600',
          p: '0',
          borderRadius: '8px',
          ml: isSmallScreen ? 0 : 2,
          width: isSmallScreen ? '300px' : '409px',
          fontSize: '12px',
          alignItems: 'center',
          '& .MuiAlert-icon': {
            color: '#fff',
          },
        }}
      >
        Подтвердите личность для доступа к новым функциям
      </Alert>

      <Box display={'flex'} flexDirection={isSmallScreen ? 'column' : 'row'} mt={4} ml={2} alignItems={'center'}>
        <Typography
          sx={{
            width: isSmallScreen ? '300px' : '350px',
            p: '12px 14px',
            borderRadius: '12px',
            background: '#F8F8F9',
            color: '#9395B8',
            fontSize: '14px',
            fontWeight: '548',
          }}
        >
          День рождения
          <Typography
            sx={{
              color: '#06082C',
              fontSize: '14px',
              fontWeight: '548',
            }}
          >
            12 сентября 1994
          </Typography>
        </Typography>

        <Typography
          sx={{
            width: isSmallScreen ? '300px' : '350px',
            ml: isSmallScreen ? 0 : 4,
            mt: isSmallScreen ? 2 : 0,
            p: '12px 14px',
            borderRadius: '12px',
            background: '#F8F8F9',
            color: '#9395B8',
            fontSize: '14px',
            fontWeight: '548',
          }}
        >
          Номер телефона
          <Typography
            sx={{
              color: '#06082C',
              fontSize: '14px',
              fontWeight: '548',
            }}
          >
            +7 (773) 493 39 10
          </Typography>
        </Typography>
      </Box>

      <Box mt={2} ml={2}>
        <Button
          sx={{
            color: '#fff',
            p: '10px 24px',
            fontSize: '14px',
            fontWeight: '548',
            background: '#06082C',
            borderRadius: '10px',
          }}
        >
          Редактировать
        </Button>

        <Button
          sx={{
            width: '40px',
            height: '40px',
            ml: 2,
            p: '10px 24px',
            background: '#F1F3F7',
            borderRadius: '10px',
          }}
        >
          <img src={share} alt="icon" />
        </Button>
      </Box>
    </>
  );
};

export default MyProfileItem;
