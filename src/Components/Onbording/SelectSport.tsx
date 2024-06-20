import Box from '@mui/material/Box';
import { Card, CardMedia, Grid, Modal, useMediaQuery } from '@mui/material';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import PicForOnbording1 from '../../assets/PicForOnbording1.png';
import PicForOnbording2 from '../../assets/PicForOnbording2.png';
import PicForOnbording3 from '../../assets/PicForOnbording3.png';
import PicForOnbording4 from '../../assets/PicForOnbording4.png';
import PicForOnbording5 from '../../assets/PicForOnbording5.png';
import PicForOnbording6 from '../../assets/PicForOnbording6.png';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../app/store.ts';
import { switchModal } from '../../store/userSlice.ts';

const itemData = [
  {
    img: PicForOnbording1,
    title: 'pic1',
  },
  {
    img: PicForOnbording2,
    title: 'pic2',
  },
  {
    img: PicForOnbording3,
    title: 'pic3',
  },
  {
    img: PicForOnbording4,
    title: 'pic4',
  },
  {
    img: PicForOnbording5,
    title: 'pic5',
  },
  {
    img: PicForOnbording6,
    title: 'pic6',
  },
];
interface Props {
  open: boolean;
  hideModal: () => void;
}

const SelectSport: React.FC<Props> = ({ open, hideModal }) => {
  const dispatch = useDispatch<AppDispatch>();
  const isSmallScreen = useMediaQuery('(max-width:1000px)');
  const isMd = useMediaQuery('(max-width:500px)');

  const style = {
    position: 'absolute',
    top: isSmallScreen ? '60%' : isMd ? '100%' : '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '100%',
    minHeight: isSmallScreen ? 500 : 614,
    bgcolor: '#FFFFFF',
    borderRadius: '24px',
    boxShadow: 24,
    paddingTop: '40px',
    paddingRight: '24px',
    paddingBottom: '36px',
    paddingLeft: '24px',
  };

  return (
    <Modal
      open={open}
      onClose={hideModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Grid container spacing={2} sx={{ width: isMd ? '350px' : '100%' }}>
          <Grid item xs={12} display="flex" justifyContent="space-between" alignItems="center">
            <Typography
              sx={{
                fontWeight: '600',
                fontSize: '20px',
              }}
            >
              <Typography
                display="inline-block"
                sx={{
                  fontWeight: '600',
                  fontSize: '20px',
                  color: '#9395B8',
                  mr: '12px',
                  mb: '24px',
                }}
              >
                1/4
              </Typography>
              Выберите вид спорта
            </Typography>
            <Button
              onClick={hideModal}
              sx={{
                color: '#9395B8',
                position: 'absolute',
                top: 10,
                right: -5,
              }}
            >
              <CloseIcon />
            </Button>
          </Grid>
          <Grid item xs={12}>
            <hr />
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              {itemData.map((item) => (
                <Grid item xs={6} md={4} lg={4} key={item.img}>
                  <Card
                    sx={{
                      borderRadius: '14px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      height: '100%',
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={`${item.img}`}
                      alt={item.title}
                      sx={{
                        borderRadius: '14px',
                        width: '100%',
                        maxHeight: '200px',
                      }}
                    />
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            mt={1}
            display="flex"
            flexDirection={isMd ? 'column-reverse' : 'row'}
            justifyContent="space-between"
          >
            <Button
              onClick={() => dispatch(switchModal('selectAthlete'))}
              sx={{
                fontSize: '12px',
                fontWeight: '648',
                textAlign: 'center',
                color: '#06082C',
                background: '#F1F3F7',
                borderRadius: '10px',
                padding: '10px 24px',
                width: isMd ? '300px' : '126px',
                mt: '14px',
              }}
            >
              Пропустить
            </Button>
            <Button
              onClick={() => dispatch(switchModal('selectAthlete'))}
              sx={{
                fontSize: '12px',
                fontWeight: '648',
                color: '#fff',
                background: '#06082C',
                borderRadius: '10px',
                padding: '10px 24px',
                width: isMd ? '300px' : '126px',
                mt: '20px',
              }}
            >
              Продолжить
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};

export default SelectSport;
