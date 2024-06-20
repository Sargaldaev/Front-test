import { Modal, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import logo from '../../assets/logoAuth.png';
import { NavLink } from 'react-router-dom';
import * as React from 'react';
import { FC, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, switchModal } from '../../store/userSlice.ts';
import { AppDispatch, RootState } from '../../app/store.ts';

interface Props {
  openModal: boolean;
  handleCloseModal: () => void;
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 370,
  height: 447,
  bgcolor: '#FFFFFF',
  borderRadius: '24px',
  boxShadow: 24,
  paddingTop: '40px',
  paddingRight: '24px',
  paddingBottom: '36px',
  paddingLeft: '24px',
};
const ConfirmPhoneNumber: FC<Props> = ({ openModal, handleCloseModal }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { prevModalType } = useSelector((state: RootState) => state.user);

  const [state, setState] = useState<string>('');

  const [isError, setIsError] = useState<boolean>(false);

  const [isFocused, setIsFocused] = useState(false);

  const [symbols, setSymbols] = useState<React.ReactNode[]>([]);

  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (isFocused) {
      inputRef.current?.focus();
    }
  }, [isFocused]);

  useEffect(() => {
    const nodes = [];

    for (let i = 0; i < 6; i++) {
      nodes.push(
        <Box
          key={`${i}`}
          sx={{
            padding: '16px 12px',
            width: 40,
            height: 40,
            borderRadius: '10px',
            border: isError && !state[i] && '1px solid #d32f2f',
            ml: 2,
            background: '#F1F3F7',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {state[i]}
        </Box>,
      );
    }

    setSymbols(nodes);
  }, [state, isError]);

  const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length < 7) {
      setState(e.target.value);
    }
  };

  const submit = () => {
    if (state.length < 6) {
      setIsError(true);
      return;
    }

    dispatch(switchModal('selectSport'));
    dispatch(addUser('user'));
  };
  return (
    <Modal
      open={openModal}
      onClose={handleCloseModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style} onClick={() => setIsFocused(true)} onBlur={() => setIsFocused(false)}>
        <Button
          onClick={handleCloseModal}
          sx={{
            mt: 2,
            position: 'absolute',
            bottom: 404,
            left: 310,
            color: '#9395B8',
          }}
        >
          <CloseIcon />
        </Button>
        <Typography variant="h6" component="h2" sx={{ width: '50px', margin: '0 auto' }}>
          <img src={logo} alt="logo" />
        </Typography>
        <Typography sx={{ textAlign: 'center', lineHeight: '30px', mt: '17px', fontSize: '30px', fontWeight: 600 }}>
          Подтвердите номер телефона
        </Typography>

        <Typography sx={{ textAlign: 'center', mt: '17px', fontSize: '12px', fontWeight: 600, color: '#9395B8' }}>
          Отправим сообщение с 6-ти значным кодом на номер +7 983 540-49-43
          <Typography
            onClick={() => dispatch(switchModal(prevModalType))}
            sx={{
              color: '#353754',
              fontSize: '12px',
              fontWeight: 600,
              ml: '2px',
              cursor: 'pointer',
            }}
            display={'inline-block'}
          >
            Изменить
          </Typography>
        </Typography>

        <input
          type="number"
          value={state}
          ref={inputRef}
          onChange={changeValue}
          style={{ opacity: '0', width: 0, height: 0 }}
        />
        <Box display={'flex'}> {symbols}</Box>
        <Button
          component={NavLink}
          onClick={submit}
          sx={{
            fontSize: '14px',
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
          Потвердить
        </Button>

        <Typography
          sx={{
            fontSize: '14px',
            textAlign: 'center',
            color: '#9395B8',
            mt: '20px',
          }}
        >
          Отправить снова через 01:00
        </Typography>
      </Box>
    </Modal>
  );
};

export default ConfirmPhoneNumber;
