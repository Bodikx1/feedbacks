import qr from './PreparedQr.module.css'
import DownloadIcon from '@mui/icons-material/Download';
import ModeIcon from '@mui/icons-material/Mode';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DeleteIcon from '@mui/icons-material/Delete';
export default function QrNewTemplatesItem({ setTemplates ,templates , template}){
    function removeProduct(id) {
        let removeProduct = templates.filter((template) => {
            return id !== template.id
        })
        setTemplates(removeProduct)
    }
    return(
        <div className={qr.item} style={{margin:'20px'}}>
            <div>
                <h2>Новый шаблон {template.number}</h2>
                <h4>16\09\2022</h4>
            </div>

            <div>
                <button><DownloadIcon/></button>
                <button><ModeIcon/></button>
                <button><ContentCopyIcon/></button>
                <button onClick={()=>removeProduct(template.id)}><DeleteIcon/></button>
            </div>
        </div>
    )
}