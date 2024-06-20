import Box from '@mui/material/Box';
import { Grid, InputAdornment, Modal, styled, TextField, useMediaQuery } from '@mui/material';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import search from './/..//../assets/search-Icon.svg';
import companyLogo1 from './/..//../assets/companyLogo1.svg';
import companyLogo2 from './/..//../assets/companyLogo2.svg';
import companyLogo3 from './/..//../assets/companyLogo3.svg';
import companyLogo4 from './/..//../assets/companyLogo4.svg';
import companyLogo5 from './/..//../assets/companyLogo5.svg';
import companyLogo6 from './/..//../assets/companyLogo6.svg';
import companyLogo7 from './/..//../assets/companyLogo7.svg';
import companyLogo8 from './/..//../assets/companyLogo8.svg';
import SelectAthleteItem from './SelectAthleteItem.tsx';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../app/store.ts';
import { switchModal } from '../../store/userSlice.ts';

const coachData = [
  {
    avatar: companyLogo1,
    name: 'Всероссийское физкультурно-спортивное общество «Дина...',
  },
  {
    avatar: companyLogo2,
    name: 'АНО "Столичный центр развития гандбола", МГК "ЦС...',
  },
  {
    avatar: companyLogo3,
    name: 'Общественная организация Ставропольский городской г...',
  },
  {
    avatar: companyLogo4,
    name: 'Автономная некоммерческая организация "Гандбольный кл...',
  },
  {
    avatar: companyLogo5,
    name: 'Ассоциация зимних олимпийских видов спорта (А...',
  },
  {
    avatar: companyLogo6,
    name: 'Пермская краевая общественная организация "Г...',
  },
  {
    avatar: companyLogo7,
    name: 'Автономная некоммерческая организация "Гандбольный кл...',
  },
  {
    avatar: companyLogo8,
    name: 'Гандбольный союз "Ростов-Дон"',
  },
];

const CustomTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      border: 'none',
    },
  },
});
interface Props {
  open: boolean;
  hideModal: () => void;
}

const SelectOrganization: React.FC<Props> = ({ open, hideModal }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { prevModalType } = useSelector((state: RootState) => state.user);
  const isSmallScreen = useMediaQuery('(max-width:950px)');
  const isMd = useMediaQuery('(max-width:500px)');

  const style = {
    position: 'absolute',
    top: isSmallScreen ? '65%' : isMd ? '100%' : '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '100%',
    minHeight: 600,
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
        <Grid container spacing={2} sx={{ width: isMd ? '700px' : '100%' }}>
          <Grid item xs={12} display="flex" justifyContent="space-between" alignItems="center">
            <Typography sx={{ fontWeight: '600', fontSize: '20px' }}>
              <Typography display="inline-block" sx={{ fontWeight: '600', fontSize: '20px', color: '#9395B8', mr: 2 }}>
                {' '}
                3/4
              </Typography>{' '}
              Выберите споривные организации
            </Typography>
            <Button onClick={hideModal} sx={{ color: '#9395B8' }}>
              <CloseIcon />
            </Button>
          </Grid>

          <Grid item xs={12}>
            <Typography
              sx={{
                fontWeight: '600',
                fontSize: '12px',
                color: '#9395B8',
                mt: 2,
                width: isMd ? 280 : '100%',
              }}
            >
              Выберите организации из списка предложенных.
            </Typography>
            <hr />
          </Grid>

          <Grid item xs={12} display="flex" alignItems="center">
            <CustomTextField
              placeholder="Поиск"
              sx={{
                flexGrow: 1,
                mr: 2,
                borderRadius: '10px',
                background: '#F8F8F9',
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <img src={search} alt="icon" />
                  </InputAdornment>
                ),
              }}
            />

            <Button
              sx={{
                fontSize: '12px',
                fontWeight: '648',
                color: '#fff',
                background: '#06082C',
                borderRadius: '10px',
                padding: '10px 24px',
                height: '40px',
              }}
            >
              Найти
            </Button>
          </Grid>

          <Grid item xs={12}>
            <Grid container spacing={2}>
              {coachData.map((item, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <SelectAthleteItem avatar={item.avatar} name={item.name} />
                </Grid>
              ))}
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Grid container justifyContent="space-between" alignItems="center">
              {isMd ? (
                <Grid
                  item
                  xs={12}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  sx={{
                    position: 'absolute',
                    bottom: 200,
                    borderRadius: '24px 24px 0 0',
                    background: '#fff',
                    width: 400,
                    flexDirection: isMd ? 'column' : 'row',
                    p: 2,
                  }}
                >
                  <Button
                    onClick={() => dispatch(switchModal('selectUserData'))}
                    sx={{
                      fontSize: '12px',
                      fontWeight: '648',
                      color: '#fff',
                      background: '#06082C',
                      borderRadius: '10px',
                      padding: '10px 24px',
                      width: '333px',
                    }}
                  >
                    Продолжить
                  </Button>

                  <Button
                    onClick={() => dispatch(switchModal('selectUserData'))}
                    sx={{
                      fontSize: '12px',
                      fontWeight: '648',
                      textAlign: 'center',
                      color: '#06082C',
                      background: '#F1F3F7',
                      borderRadius: '10px',
                      padding: '10px 10px',
                      width: '333px',
                      mt: 1,
                    }}
                  >
                    Пропустить
                  </Button>

                  <Button
                    onClick={() => dispatch(switchModal(prevModalType))}
                    sx={{
                      fontSize: '12px',
                      fontWeight: '648',
                      color: '#06082C',
                      background: '#F1F3F7',
                      borderRadius: '10px',
                      padding: '10px 24px',
                      width: '333px',
                      mt: 1,
                    }}
                  >
                    Назад
                  </Button>
                </Grid>
              ) : (
                <Grid item xs={12} display="flex" justifyContent="space-between" alignItems="center">
                  <Button
                    onClick={() => dispatch(switchModal(prevModalType))}
                    sx={{
                      fontSize: '12px',
                      fontWeight: '648',
                      color: '#06082C',
                      background: '#F1F3F7',
                      borderRadius: '10px',
                      padding: '10px 24px',
                      width: '126px',
                    }}
                  >
                    Назад
                  </Button>

                  <Box display={'flex'} alignItems="center">
                    <Button
                      onClick={() => dispatch(switchModal('selectUserData'))}
                      sx={{
                        fontSize: '12px',
                        fontWeight: '648',
                        textAlign: 'center',
                        color: '#06082C',
                        background: '#F1F3F7',
                        borderRadius: '10px',
                        padding: '10px 24px',
                        width: '126px',
                        mr: 2,
                      }}
                    >
                      Пропустить
                    </Button>
                    <Button
                      onClick={() => dispatch(switchModal('selectUserData'))}
                      sx={{
                        fontSize: '12px',
                        fontWeight: '648',
                        color: '#fff',
                        background: '#06082C',
                        borderRadius: '10px',
                        padding: '10px 24px',
                        width: '133px',
                      }}
                    >
                      Продолжить
                    </Button>
                  </Box>
                </Grid>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};

export default SelectOrganization;
