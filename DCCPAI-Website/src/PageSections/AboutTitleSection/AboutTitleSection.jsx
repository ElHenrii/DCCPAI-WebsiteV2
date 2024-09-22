import styles from '../AboutTitleSection/AboutTitleSection.module.css'
import FlavorTextMiddle from '../../FlavorTextMiddle/FlavorTextMiddle';
import PictureCard from '../../PictureCard/PictureCard';
import FlavorTextLeft from '../../FlavorTextLeft/FlavorTextLeft';

function AboutTitleSection() {
    return(
        <>
        <div className={styles.aboutTitleContainer}>
            <div className={styles.aboutUsPicture}>
            </div>
            <div className={styles.aboutUsTitleText}>
            <FlavorTextLeft mainText='About Us' 
                                subText="Since our inception in 2017, the Davao City Chocolate Processors Association Inc. (DCCPAI) has been dedicated to advancing cacao 
                                production across the Davao Region. In line with our commitment to sustainable practices, we believe in producing high-quality 
                                cacao and elevating the value of local cacao products."/> 
        </div>
        </div>
        </>
    );
}

export default AboutTitleSection