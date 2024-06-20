import React from 'react';
import Header from './Components/Header/Header.tsx';
import { CssBaseline } from '@mui/material';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import './style.css';
import { Route, Routes } from 'react-router-dom';
import SelectSport from './Components/Onbording/SelectSport.tsx';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './app/store.ts';
import Main from './Components/Main/Main.tsx';
import MyProfile from './Components/Onbording/MyProfile.tsx';
import ModalLogin from './Components/Header/ModalLogin.tsx';
import ModalRegister from './Components/Header/ModalRegister.tsx';
import { closeModal } from './store/userSlice.ts';
import ConfirmPhoneNumber from './Components/ConfirmPhoneNumber/ConfirmPhoneNumber.tsx';
import SelectAthlete from './Components/Onbording/SelectAthlete.tsx';
import SelectOrganization from './Components/Onbording/SelectOrganization.tsx';
import SelectUserData from './Components/Onbording/SelectUserData.tsx';
const App = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { modalType } = useSelector((state: RootState) => state.user);
  return (
    <Box>
      <CssBaseline />
      <header style={{ marginBottom: 25 }}>
        <Header />
      </header>
      <Container>
        <Routes>
          <Route path={'/'} element={<Main />} />
          <Route path="/myProfile" element={<MyProfile />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
        <ModalLogin open={modalType === 'login'} handleClose={() => dispatch(closeModal())} />

        <ModalRegister open={modalType === 'register'} handleClose={() => dispatch(closeModal())} />

        <ConfirmPhoneNumber
          openModal={modalType === 'confirmPhoneNumber'}
          handleCloseModal={() => dispatch(closeModal())}
        />

        <SelectSport open={modalType === 'selectSport'} hideModal={() => dispatch(closeModal())} />

        <SelectAthlete open={modalType === 'selectAthlete'} hideModal={() => dispatch(closeModal())} />

        <SelectOrganization open={modalType === 'selectOrganization'} hideModal={() => dispatch(closeModal())} />

        <SelectUserData open={modalType === 'selectUserData'} hideModal={() => dispatch(closeModal())} />
      </Container>
    </Box>
  );
};

export default App;
