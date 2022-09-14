import settings from './Settings.module.css'
import NavBar from "../NavBar";
import Footer from "../Footer";
export default function Settings(){
    return(
        <div className={settings.Page}>
            <NavBar focusedPage={'/Settings'}/>
            <div className={settings.body}>
                <h2>Настройки</h2>
            </div>
            <Footer/>
        </div>

    )
}