import qr from './QrInstruction.module.css'
import NavBar from "../NavBar";
import Footer from "../Footer";
export default function QrInstruction(){
    return(
        <div className={qr.Page}>
            <NavBar/>
            <div className={qr.body}>
                <h1>Инструкция по созданию шаблона QR</h1>
            </div>
            <Footer/>
        </div>
    )
}