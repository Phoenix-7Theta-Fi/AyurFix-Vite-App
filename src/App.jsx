import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import Prakriti from './components/Prakriti';
import PhysicalActivity from './components/PhysicalActivity';
import Lifestyle from './components/Lifestyle';
import Consultation from './components/Consultation';
import LabTests from './components/LabTests';
import CalendarModule from './components/Calendar';
import AyurBot from './components/AyurBot';
import LoggingPlace from './components/LoggingPlace';

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="content" style={{ padding: '20px', minHeight: '80vh' }}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/prakriti" element={<Prakriti />} />
          <Route path="/physical-activity" element={<PhysicalActivity />} />
          <Route path="/lifestyle" element={<Lifestyle />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="/lab-tests" element={<LabTests />} />
          <Route path="/calendar" element={<CalendarModule />} />
          <Route path="/logging-place" element={<LoggingPlace />} />
        </Routes>
      </div>
      <Footer />
      <AyurBot />
    </div>
  );
};

export default App;
