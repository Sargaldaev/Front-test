import Box from '@mui/material/Box';
import MyProfileItem from './MyProfileItem.tsx';
import SelectAthleteItem from './SelectAthleteItem.tsx';
import interestingPeople1 from '..//..//assets/avatarForSelectAthlete1.svg';
import interestingPeople2 from '..//..//assets/interestingPeople2.svg';
import interestingPeople3 from '..//..//assets/interestingPeople3.svg';
import interestingPeople4 from '..//..//assets/interestingPeople4.svg';
import interestingPeople5 from '..//..//assets/interestingPeople.svg';
import userPlusIcon from '..//..//assets/userPlus.svg';
import subtract from '..//..//assets/Subtract.svg';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
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
const MyProfile = () => {
  const isSmallScreen = useMediaQuery('(max-width:900px)');
  const isLg = useMediaQuery('(max-width:500px)');
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={8}>
        <Box
          sx={{
            background: '#fff',
            borderRadius: '20px',
            p: 2,
          }}
        >
          <MyProfileItem />
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
          <Typography
            sx={{
              fontWeight: '600',
              fontSize: '20px',
              ml: 1,
              mb: 2,
            }}
          >
            Интересные подписки
          </Typography>
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

export default MyProfile;
