import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SelectAthleteItem from './SelectAthleteItem.tsx';
import Button from '@mui/material/Button';
import interestingPeople1 from '../../assets/avatarForSelectAthlete1.svg';
import userPlusIcon from '../../assets/userPlus.svg';
import subtract from '../../assets/Subtract.svg';
import interestingPeople5 from '../../assets/interestingPeople.svg';
import interestingPeople3 from '../../assets/interestingPeople3.svg';
import interestingPeople2 from '../../assets/interestingPeople2.svg';
import interestingPeople4 from '../../assets/interestingPeople4.svg';
import Avatar from '@mui/material/Avatar';
import share from '../../assets/share.svg';
import { Grid, useMediaQuery } from '@mui/material';

const interestingPeople = [
  {
    avatar: interestingPeople1,
    name: 'Александр Магомедов',
    description: 'Спортсмен Призер Олимпийскиx...',
    userPlusIcon: userPlusIcon,
    subtract: subtract,
  },
  {
    avatar: interestingPeople5,
    name: 'Дмитрий Зайцев',
    description: 'Судья Заслуженный судья и сек...',
    userPlusIcon: userPlusIcon,
    subtract: subtract,
  },
  {
    avatar: interestingPeople3,
    name: 'Светлана Бессонова',
    description: 'Спортсмен Призер Олимпийскиx...',
    userPlusIcon: userPlusIcon,
    subtract: '',
  },
  {
    avatar: interestingPeople2,
    name: 'Андрей Романов',
    description: 'Спортсмен Мастер спорта СССР...',
    userPlusIcon: userPlusIcon,
    subtract: '',
  },
  {
    avatar: interestingPeople4,
    name: 'Анастасия Землякова',
    description: 'Тренер Тренер по гандболу',
    userPlusIcon: userPlusIcon,
    subtract: subtract,
  },
];
const OnbordingFailed = () => {
  const isSmallScreen = useMediaQuery('(max-width:900px)');
  const isLg = useMediaQuery('(max-width:500px)');

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={8}>
        <Box
          sx={{
            background: '#fff',
            borderRadius: '20px',
            height: { xs: 'auto', md: '361px' },
            p: { xs: 2, md: 4 },
          }}
        >
          <Box display={isLg ? 'block' : 'flex'} alignItems="center" mb={3}>
            <Avatar sx={{ width: 140, height: 140, background: '#CCCFDA', p: 4, margin: isLg ? '0 auto' : 0 }} />
            <Box ml={3} mt={isLg ? 3 : 0} display="flex" flexDirection={isLg ? 'row' : 'column'}>
              <Box display="flex" ml={isLg ? 3 : 0} mr={isLg ? 2 : 0} mb={1}>
                <Typography sx={{ color: '#06082C', fontWeight: '548', fontSize: '14px', mr: '6px' }}>0</Typography>
                <Typography sx={{ color: '#9395B8', fontSize: '14px', fontWeight: '548' }}>Подписчики</Typography>
              </Box>
              <Box display="flex">
                <Typography sx={{ color: '#06082C', fontWeight: '548', fontSize: '14px', mr: '6px' }}>0</Typography>
                <Typography sx={{ color: '#9395B8', fontSize: '14px', fontWeight: '548' }}>Подписки</Typography>
              </Box>
            </Box>
          </Box>

          <Box display="flex" mt={4} ml={2} alignItems="center">
            <Box
              sx={{
                width: { xs: '100%', md: 350 },
                ml: 4,
                p: '12px 14px',
                borderRadius: '12px',
                background: '#F8F8F9',
                color: '#9395B8',
                fontSize: '14px',
                fontWeight: '548',
              }}
            >
              Номер телефона
              <Typography sx={{ color: '#06082C', fontSize: '14px', fontWeight: '548' }}>+7 (773) 493 39 10</Typography>
            </Box>
          </Box>

          <Box mt={2} ml={6} display="flex">
            <Button
              sx={{
                color: '#fff',
                p: '10px 24px',
                fontSize: '14px',
                fontWeight: '548',
                background: '#06082C',
                borderRadius: '10px',
                mr: 2,
              }}
            >
              Редактировать
            </Button>
            <Button
              sx={{
                width: '40px',
                height: '40px',
                p: '10px',
                background: '#F1F3F7',
                borderRadius: '10px',
              }}
            >
              <img src={share} alt="icon" />
            </Button>
          </Box>
        </Box>
      </Grid>

      <Grid item xs={12} md={4}>
        <Box
          sx={{
            background: '#fff',
            p: isLg ? '0' : '24px 10px',
            borderRadius: '20px',
            width: isSmallScreen ? 400 : '100%',
          }}
        >
          <Typography sx={{ fontWeight: '600', fontSize: '20px', ml: 1, mb: 2 }}>Интересные подписки</Typography>
          {interestingPeople.map((item, index) => (
            <SelectAthleteItem
              key={index}
              avatar={item.avatar}
              name={item.name}
              description={item.description}
              userPlusIcon={item.userPlusIcon}
              subtract={item.subtract}
            />
          ))}
          <Button
            sx={{
              textAlign: 'center',
              fontWeight: '648',
              fontSize: '14px',
              p: '10px 110px',
              mt: 2,
              background: '#F1F3F7',
              color: '#06082C',
              borderRadius: '10px',
              width: '100%',
            }}
          >
            Смотреть всех
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default OnbordingFailed;
