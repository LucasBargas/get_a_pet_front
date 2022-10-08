import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AppArea from './layout/AppArea';
import Container from './layout/Container';
import Footer from './layout/Footer';
import Header from './layout/Header';
import Message from './layout/Message';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Register from './pages/Register';
import MyPets from './pages/MyPets';
import Profile from './pages/Profile';
import AddPet from './pages/AddPet';
import EditPet from './pages/EditPet';
import PetDetails from './pages/PetDetails';
import NotFound from './pages/NotFound';
import MyAdoptions from './pages/MyAdoptions';

const App = () => {
  // eslint-disable-next-line no-undef
  console.log(process.env.REACT_APP_API);

  return (
    <AppArea>
      <Header />
      <Message />
      <Container>
        <Routes>
          <Route path="/" index element={<Homepage />} />
          <Route path="/registre-se" element={<Register />} />
          <Route path="/entrar" element={<Login />} />
          <Route path="/meus-pets" element={<MyPets />} />
          <Route path="/meus-pets/adicionar" element={<AddPet />} />
          <Route path="/meus-pets/editar/:id" element={<EditPet />} />
          <Route path="/minhas-adocoes" element={<MyAdoptions />} />
          <Route path="/pet/:id" element={<PetDetails />} />
          <Route path="/perfil" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
      <Footer />
    </AppArea>
  );
};

export default App;
