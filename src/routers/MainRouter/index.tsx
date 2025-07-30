import { BrowserRouter, Route, Routes } from 'react-router';
import { AboutPomodoro } from '../../pages/AboutPomodoro';
import { NotFound } from '../../pages/NotFound';
import { Home } from '../../pages/Home';
import { useEffect } from 'react';
import { useLocation } from 'react-router';

function ScrolltoTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);

  return null;
}

export function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-pomodoro' element={<AboutPomodoro />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <ScrolltoTop />
    </BrowserRouter>
  );
}
