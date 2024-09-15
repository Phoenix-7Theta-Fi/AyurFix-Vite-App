import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

const theme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#4caf50',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#4caf50',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4caf50',
};

const AyurBot = () => {
  const steps = [
    {
      id: '1',
      message: 'Hello! I am AyurBot, your personal Ayurvedic assistant. How can I help you today?',
      trigger: 'options',
    },
    {
      id: 'options',
      options: [
        { value: 'log', label: 'Log my activities', trigger: 'log' },
        { value: 'consult', label: 'Book a consultation', trigger: 'consult' },
        { value: 'insight', label: 'Get insights', trigger: 'insight' },
      ],
    },
    {
      id: 'log',
      message: 'Sure! You can log your activities by going to the Calendar module.',
      end: true,
    },
    {
      id: 'consult',
      message: 'You can book a consultation by navigating to the Consultation module from the menu.',
      end: true,
    },
    {
      id: 'insight',
      message: 'Here is a quick insight: Keep up the good work with your yoga routines to maintain balance!',
      end: true,
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <ChatBot
        steps={steps}
        floating={true}
        headerTitle="AyurBot"
      />
    </ThemeProvider>
  );
};

export default AyurBot;
