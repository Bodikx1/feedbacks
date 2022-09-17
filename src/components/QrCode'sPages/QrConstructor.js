import qr from './QrConstructor.module.css'
import NavBar from "../NavBar";
import Footer from "../Footer";
import {Link} from "react-router-dom";
function QrConstructor(){
    return(
        <div className={qr.Page}>
            <NavBar/>
            <div className={qr.body}>
                <h1>Конструктор QR</h1>
                <Link  to='/PreparedQr'className={qr.Links} style={{marginTop:'40px'}}>Готовый QR</Link>
                <Link  to='/QrTemplates'className={qr.Links}>Создать новый QR</Link>
                <Link  to='/QrInstruction'className={qr.Links}>Инструкция по созданию шаблона QR</Link>
            </div>
            <Footer/>
        </div>
    )
}
export default QrConstructor