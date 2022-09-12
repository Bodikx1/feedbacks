import foot from '../CssModules/Footer.module.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
export default function Footer(){
    return(
        <div className={foot.body}>
            <div className={foot.socialNet}>
                <a href=""><InstagramIcon className={foot.socialIcon} style={{width:'60px' , height:'60px'}}/></a>
                <a href=""><FacebookIcon className={foot.socialIcon} style={{width:'60px' , height:'60px'}}/></a>
                <a href=""><YouTubeIcon className={foot.socialIcon} style={{width:'60px' , height:'60px'}}/></a>



            </div>
            <div className={foot.text}>© 2018- 2022 Все права защищены. BERRY® - зарегистрированная торговая марка BERRY Group.</div>
            <div className={foot.logo}>BERRY</div>
        </div>
    )
}