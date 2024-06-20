import Box from '@mui/material/Box';
import { FormControl, Grid, MenuItem, Modal, styled, TextField, useMediaQuery } from '@mui/material';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../app/store.ts';
import { switchModal } from '../../store/userSlice.ts';

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

const SelectUserData: React.FC<Props> = ({ open, hideModal }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { prevModalType } = useSelector((state: RootState) => state.user);
  const isSmallScreen = useMediaQuery('(max-width:950px)');
  const isMd = useMediaQuery('(max-width:500px)');

  const style = {
    position: 'absolute',
    top: isSmallScreen ? '64%' : isMd ? '50%' : '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '100%',
    minHeight: isMd ? 960 : 600,
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
        <Box sx={{ width: isMd ? '700px' : '100%' }}>
          <Typography sx={{ fontWeight: '600', fontSize: '20px' }}>
            <Typography display="inline-block" sx={{ fontWeight: '600', fontSize: '20px', color: '#9395B8', mr: 2 }}>
              4/4
            </Typography>
            Заполните основные данные
          </Typography>
          <hr />

          <Box display="flex" sx={{ mt: '18px' }}>
            <Avatar sx={{ width: 100, height: 100, borderRadius: '250px', background: '#CCCFDA', p: 3 }} />
          </Box>

          <Box mb={9}>
            <Grid container spacing={2} mt={2}>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth variant="outlined">
                  <label style={{ color: '#7B7EA5', fontSize: '12px' }}>Имя</label>
                  <CustomTextField
                    placeholder="Введите имя"
                    sx={{
                      borderRadius: '10px',
                      width: '100%',
                      background: '#F1F3F7',
                      '& .MuiInputBase-input': {
                        padding: '7px',
                      },
                    }}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth variant="outlined">
                  <label style={{ color: '#7B7EA5', fontSize: '12px' }}>Фамилия</label>
                  <CustomTextField
                    placeholder="Введите фамилию"
                    sx={{
                      borderRadius: '10px',
                      width: '100%',
                      background: '#F1F3F7',
                      '& .MuiInputBase-input': {
                        padding: '7px',
                      },
                    }}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth variant="outlined">
                  <label style={{ color: '#7B7EA5', fontSize: '12px' }}>Отчество (необязательно)</label>
                  <CustomTextField
                    placeholder="Введите отчество"
                    sx={{
                      borderRadius: '10px',
                      width: '100%',
                      background: '#F1F3F7',
                      '& .MuiInputBase-input': {
                        padding: '7px',
                      },
                    }}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth variant="outlined">
                  <label style={{ color: '#7B7EA5', fontSize: '12px' }}>Дата рождения</label>
                  <CustomTextField
                    placeholder="Выберите дату"
                    InputLabelProps={{ shrink: false }}
                    sx={{
                      borderRadius: '10px',
                      width: '100%',
                      background: '#F1F3F7',
                      '& .MuiInputBase-input': {
                        padding: '7px',
                      },
                    }}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth variant="outlined">
                  <label style={{ color: '#7B7EA5', fontSize: '12px' }}>Пол</label>
                  <CustomTextField
                    placeholder="Выберите пол"
                    InputLabelProps={{ shrink: false }}
                    sx={{
                      borderRadius: '10px',
                      width: '100%',
                      background: '#F1F3F7',
                      '& .MuiInputBase-input': {
                        padding: '7px',
                      },
                    }}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth variant="outlined">
                  <label style={{ color: '#7B7EA5', fontSize: '12px' }}>Гражданство</label>
                  <CustomTextField
                    select
                    placeholder="Выберите страну"
                    InputLabelProps={{ shrink: false }}
                    sx={{
                      borderRadius: '10px',
                      width: '100%',
                      background: '#F1F3F7',
                      '& .MuiInputBase-input': {
                        padding: '7px',
                      },
                    }}
                  >
                    <MenuItem value="Выберите страну" disabled>
                      Выберите страну
                    </MenuItem>
                    <MenuItem value="Россия">Россия</MenuItem>
                    <MenuItem value="Китай">Китай</MenuItem>
                    <MenuItem value="Грузия">Грузия</MenuItem>
                  </CustomTextField>
                </FormControl>
              </Grid>
            </Grid>
          </Box>
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
                    onClick={() => {
                      navigate('/myProfile');
                      hideModal();
                    }}
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
                    onClick={() => {
                      navigate('/myProfile');
                      hideModal();
                    }}
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
                      onClick={() => {
                        navigate('/myProfile');
                        hideModal();
                      }}
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
                      onClick={() => {
                        navigate('/myProfile');
                        hideModal();
                      }}
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
          <Button onClick={hideModal} sx={{ mt: 2, position: 'absolute', top: 0, right: 0, color: '#9395B8' }}>
            <CloseIcon />
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default SelectUserData;
