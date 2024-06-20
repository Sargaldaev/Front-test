import Box from '@mui/material/Box';
import { Grid, Modal, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import * as React from 'react';
import { FC, useState } from 'react';
import logo from '..//../assets/logoAuth.png';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/material.css';
import CloseIcon from '@mui/icons-material/Close';
import './/..//..//style.css';
import { changePhoneNumber, switchModal } from '../../store/userSlice.ts';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../app/store.ts';

interface Props {
  open: boolean;
  handleClose: () => void;
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 370,
  height: 513,
  bgcolor: '#FFFFFF',
  borderRadius: '24px',
  boxShadow: 24,
  paddingTop: '40px',
  paddingRight: '24px',
  paddingBottom: '36px',
  paddingLeft: '24px',
};
const ModalLogin: FC<Props> = ({ open, handleClose }) => {
  const dispatch = useDispatch<AppDispatch>();

  const { currentPhoneNumber, testPhoneNumber } = useSelector((state: RootState) => state.user);
  const [error, setError] = useState<string>('');

  const changeValue = (value: string) => {
    if (value.length >= 11) {
      setError('');
    }
    dispatch(changePhoneNumber(value));
  };

  const submit = () => {
    if (currentPhoneNumber.length < 11) {
      setError('Это поле обязательное');
      return;
    } else if (currentPhoneNumber !== testPhoneNumber) {
      setError('Номер телефона введен неверно');
      return;
    }

    dispatch(switchModal('confirmPhoneNumber'));
  };
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Button
            onClick={handleClose}
            sx={{
              mt: 2,
              position: 'absolute',
              bottom: 470,
              left: 310,
              color: '#9395B8',
            }}
          >
            <CloseIcon />
          </Button>
          <Typography variant="h6" component="h2" sx={{ width: '50px', margin: '0 auto' }}>
            <img src={logo} alt="logo" />
          </Typography>
          <Typography sx={{ textAlign: 'center', ml: '10px', mt: '8px', fontSize: '30px', fontWeight: 600 }}>
            Вход на платформу
          </Typography>

          <Typography sx={{ textAlign: 'center', mt: '8px', fontSize: '14px', fontWeight: 500, color: '#9395B8' }}>
            Код будет автоматически отправлен на Ваш номер телефона с помощью SMS
          </Typography>

          <Grid item xs={12} sm={6} sx={{ mt: '20px' }} className="custom-tel-container">
            <label htmlFor="phoneNumber" className="custom-tel-label">
              <span style={{ fontSize: '12px', color: '#7B7EA5' }}>Номер телефона</span>
            </label>
            <PhoneInput
              country="ru"
              masks={{ ru: '(...) ...-..-..' }}
              onlyCountries={['ru']}
              containerStyle={{ width: '100%' }}
              value={currentPhoneNumber}
              onChange={changeValue}
              countryCodeEditable={false}
              disableDropdown
              inputStyle={{
                width: '100%',
                background: '#F1F3F7',
                borderRadius: '10px',
                border: error && '1px solid #d32f2f',
                color: error && '#d32f2f',
                padding: '16px 36px',
                fontSize: '14px',
              }}
              inputProps={{
                id: 'phoneNumber',
                name: 'phoneNumber',
                required: true,
              }}
            />
            {error && (
              <Typography
                sx={{
                  fontSize: '12px',
                  ml: '14px',
                  mt: '4px',
                  color: '#d32f2f',
                }}
              >
                {' '}
                {error}
              </Typography>
            )}
          </Grid>

          <Button
            onClick={submit}
            sx={{
              fontSize: '12px',
              fontWeight: '548',
              textAlign: 'center',
              color: '#fff',
              background: '#06082C',
              borderRadius: '10px',
              padding: '10px 24px',
              width: '322px',
              mt: '20px',
            }}
          >
            Получить код
          </Button>
          <Typography
            sx={{
              fontSize: '14px',
              textAlign: 'center',
              color: '#9395B8',
              mt: 5,
            }}
          >
            Нет аккаунта?
          </Typography>

          <Button
            onClick={() => dispatch(switchModal('register'))}
            sx={{
              fontSize: '14px',
              fontWeight: '548',
              textAlign: 'center',
              color: '#06082C',
              background: '#F1F3F7',
              borderRadius: '10px',
              padding: '10px 24px',
              width: '322px',
              mt: '14px',
            }}
          >
            Зарегистрироваться
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default ModalLogin;
