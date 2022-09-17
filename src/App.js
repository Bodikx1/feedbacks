import './App.css';
import React , {useState} from "react";
import RatingPage from "./components/RatingPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import RatingAutho from "./components/RatingAutho";
import AdminAutho from "./components/AdminComponents/AdminAutho";
import AdminRegister from "./components/AdminComponents/AdminRegister";
import RestaurantRegister from "./components/AdminComponents/RestaurantRegister";
import AdminPanel from "./components/AdminComponents/AdminPanel";
import QrCodePage from "./components/QrCodePage";
import SubscriptionPage from "./components/SubscriptionComponent/SubscriptionPage";
import FeedbacksPage from "./components/FeedbacksComponent/FeedbacksPage";
import RatingSmsAccess from "./components/RatingSmsAccess";
import Gratitude from "./components/ Gratitude";
import NoMatch from "./components/NoMatch";
import Settings from "./components/Settings/Settings";
import ProFunctions from "./components/ProFunctions/ProFunctions";
import Questions from "./components/Questions/Questions";
import AboutUs from "./components/AboutUs/AboutUs";
import QrConstructor from "./components/QrCode'sPages/QrConstructor";
import QrInstruction from "./components/QrCode'sPages/QrInstruction";
import QrTemplates from "./components/QrCode'sPages/QrTemplates";
import PreparedQr from "./components/QrCode'sPages/PreparedQr";
import CreateNewQr from "./components/QrCode'sPages/CreateNewQr";
import Analytics from "./components/Analytics/Analytics";


function App() {
    const [QrSrc , setQrSrc] = useState('http://localhost:3000')
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/Rating" element={
                    <RatingPage/>}>
                </Route>
                <Route path="/RatingAutho" element={
                    <RatingAutho/>}>
                </Route>
                <Route path="/" element={
                    <AdminAutho/>}>
                </Route>
                <Route path="/AdminRegister" element={
                    <AdminRegister/>}>
                </Route>
                <Route path="/RestaurantRegister" element={
                    <RestaurantRegister/>}>
                </Route>
                <Route path="/AdminPanel" element={
                    <AdminPanel/>}>
                </Route>
                <Route path="/QrPage" element={
                    <QrCodePage text ={QrSrc}/>}>
                </Route>
                <Route path="/Subscription" element={
                    <SubscriptionPage/>}>
                </Route>
                <Route path="/Feedbacks" element={
                    <FeedbacksPage/>}>
                </Route>
                <Route path="/SmsAccess" element={
                    <RatingSmsAccess/>}>
                </Route>
                <Route path="/Gratitude" element={
                    <Gratitude/>}>
                </Route>
                <Route path="/AboutUs" element={
                    <AboutUs/>}>
                </Route>
                <Route path="/Questions" element={
                    <Questions/>}>
                </Route>
                <Route path="/ProFunctions" element={
                    <ProFunctions/>}>
                </Route>
                <Route path="/Settings" element={
                    <Settings/>}>
                </Route>
                <Route path="QrConstructor" element={
                    <QrConstructor/>}>
                </Route>
                <Route path="QrInstruction" element={
                    <QrInstruction/>}>
                </Route>
                <Route path="QrTemplates" element={
                    <QrTemplates/>}>
                </Route>
                <Route path="PreparedQr" element={
                    <PreparedQr/>}>
                </Route>
                <Route path="CreateNewQr" element={
                    <CreateNewQr text ={QrSrc}/>}>
                </Route>
                <Route path="Analytics" element={
                    <Analytics/>}>
                </Route>
                <Route path="*" element={
                    <NoMatch/>}>
                </Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
