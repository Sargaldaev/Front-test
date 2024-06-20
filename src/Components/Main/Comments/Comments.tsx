import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import avatar from '../../../assets/avatar.png';
import avatar2 from '../../../assets/avatar2.png';
import Typography from '@mui/material/Typography';

const Comments = () => {
  return (
    <>
      <Box
        display={'flex'}
        sx={{
          mt: '18px',
        }}
      >
        <Box mr={'13px'}>
          <Avatar alt="User" src={avatar} />
        </Box>

        <Box>
          <Typography
            display={'inline-block'}
            sx={{
              fontSize: '14px',
              fontWeight: '500',
              color: ' #7B7EA5',
              mb: '4px',
            }}
          >
            Вадим Давыдов
          </Typography>

          <Typography
            sx={{
              fontSize: '14px',
              fontWeight: '548',
            }}
          >
            Наконец-то! Рад, что он вернулся в спорт
          </Typography>

          <Box display={'flex'}>
            <Typography
              sx={{
                fontSize: '14px',
                fontWeight: '500',
                color: ' #7B7EA5',
                mt: 1,
              }}
            >
              15 минут назад
            </Typography>

            <Typography
              sx={{
                fontSize: '14px',
                fontWeight: '548',
                mt: 1,
                ml: '2px',
              }}
            >
              Ответить
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box display={'flex'} mt={'11px'}>
        <Box ml={4} mt={'3px'} mr={'13px'}>
          <Avatar alt="User" src={avatar2} />
        </Box>

        <Box>
          <Typography
            display={'inline-block'}
            sx={{
              fontSize: '14px',
              fontWeight: '500',
              color: ' #7B7EA5',
            }}
          >
            Артем Еременко
          </Typography>

          <Typography
            sx={{
              fontSize: '14px',
              fontWeight: '548',
              mt: '3px',
            }}
          >
            Вадим, согласен! Уже давно ждал интервью!
          </Typography>

          <Box display={'flex'}>
            <Typography
              sx={{
                fontSize: '14px',
                fontWeight: '500',
                color: ' #7B7EA5',
                mt: '7px',
              }}
            >
              30 секунд назад
            </Typography>

            <Typography
              sx={{
                fontSize: '14px',
                fontWeight: '548',
                mt: '7px',
                ml: '7px',
              }}
            >
              Ответить
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Comments;
