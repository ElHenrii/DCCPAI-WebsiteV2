import styles from '.././FlavorTextWithButtonRight/FlavorTextWithButtonRight.module.css';
import TextButton from '../TextButton/TextButton.jsx';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

function FlavorTextWithButtonRight(props) {
    return (
        <div className={styles.whoWeAreTextContainer}>
        <div className={`${styles.whoWeAreMainText} ${styles.whoWeAreText}`}>{props.mainText}</div>
        <div className={`${styles.whoWeAreSubText} ${styles.whoWeAreText}`}>{props.subText}</div>
            <div className={styles.buttonContainer}>
                {/* <Link to="/pageUnderConstruction" className="Link"> */}
                <TextButton className={`${styles.button} ${styles.shopButton}`} buttonText={props.buttonLabel} buttonLink={props.buttonLeadsTo}/>
                {/* </Link> */}
            </div>
        </div>
    );
}

FlavorTextWithButtonRight.PropTypes = {
    mainText: PropTypes.string,
    subText: PropTypes.string,
    buttonLabel: PropTypes.string,
    buttonLeadsTo: PropTypes.string,
}
FlavorTextWithButtonRight.defaultProps = {
    mainText: "Main Text (Right)",
    subText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Senectus et netus et malesuada fames ac. Elementum facilisis leo vel fringilla est ullamcorper eget. Dignissim suspendisse in est ante in nibh mauris. Tincidunt eget nullam non nisi est.",
    buttonLabel: "Button Label",
    buttonLeadsTo: "",
}

export default FlavorTextWithButtonRight;
