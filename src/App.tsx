import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Welcome, Home, NotFound, Task, Info, About } from './components/views';
import { MainLayout } from './components/layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Welcome />} />

        <Route element={<MainLayout />}>
          <Route path='/home' element={<Home />} />
          <Route path='/tasks/:id' element={<Task />} />
          <Route path='/info' element={<Info />} />
          <Route path='/about' element={<About />} />
        </Route>

        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export { App };
