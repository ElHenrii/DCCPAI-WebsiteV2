import styles from './AboutBodySection.module.css';
import FlavorTextLeft from '../../FlavorTextLeft/FlavorTextLeft.jsx'
import FlavorTextWithButtonLeft from '../../FlavorTextWithButtonLeft/FlavorTextWithButtonLeft.jsx'
import FlavorTextRight from '../../FlavorTextRight/FlavorTextRight.jsx'
import FlavorTextWithButtonRight from '../../FlavorTextWithButtonRight/FlavorTextWithButtonRight.jsx'
import FlavorTextMiddle from '../../FlavorTextMiddle/FlavorTextMiddle.jsx';
import PictureCard from '../../PictureCard/PictureCard.jsx';

function AboutBodySection() {
    return(
    <>
    <div className={styles.aboutBodyContainer}>

        <div className={styles.missionVisionContainer}>
            <div className={styles.leftTextTop}>
                <FlavorTextLeft mainText="The Mission" subText="To empower local cacao farmers by promoting sustainable farming practices, enhancing the quality and value of cacao products, 
                                                                and fostering community-driven growth in the cacao industry. We are committed to building a resilient and prosperous future 
                                                                for our members and their communities through education, innovation, and collaboration."/>
            </div>

            <div className={styles.flavorPicture}>
            </div>

            <div className={styles.leftTextBottom}>
                <FlavorTextRight mainText="The Vision" subText="To be a leading force in the global cacao industry, recognized for our dedication to quality, sustainability, and the empowerment 
                                                                of local farmers. We envision a thriving cacao community where our products are celebrated worldwide, and our members enjoy economic 
                                                                prosperity and a sustainable livelihood."/>
            </div>
        </div>
        
        <div className={styles.theProcess}>
            <div className={styles.theProcessPicture}></div>
            <div className={styles.leftText}>
                <FlavorTextWithButtonLeft mainText="The Process" buttonLabel="Video"/>
            </div>
        </div>
        
        <div className={styles.theSource}>
            <div className={styles.rightText}>
                <FlavorTextWithButtonRight mainText="The Source" buttonLabel="Frequently Asked Questions" buttonLeadsTo="FAQ"/>
            </div>
            <div className={styles.theSourcePicture}></div>
        </div>
        
        
        <div className={styles.bottomText}>
            <FlavorTextMiddle mainText="We hope to see you." subText="We are located @ Maya St, Ecoland Dr, Talomo, Davao City, Davao del Sur"/>
        </div>

    </div>
    </>
    );
}

export default AboutBodySection