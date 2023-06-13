import React from 'react';
import Header from './components/layout/Header';
import Main from './components/layout/Main';
import Footer from './components/layout/Footer';

import SliderSection from './components/section/SliderSection.jsx';
import EventItemSection from './components/section/EventItemSection.jsx';
import OnlyEmartSection from './components/section/OnlyEmartSection.jsx';
import BuisnessSection from './components/section/BuisnessSection.jsx';
import MapServiceSection from './components/section/MapServiceSection.jsx';
import AppServiceSection from './components/section/AppServiceSection.jsx';
import NoticeSection from './components/section/NoticeSection.jsx';

function App() {
    return (
        <>
            <Header />
            <Main>
                <SliderSection />
                <EventItemSection />
                <OnlyEmartSection />
                <BuisnessSection />
                <MapServiceSection />
                <AppServiceSection />
                <NoticeSection />
            </Main>
            <Footer />
        </>
    );
}

export default App;
