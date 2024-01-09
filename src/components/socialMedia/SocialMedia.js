import { SocialIcon } from 'react-social-icons';
import { useTheme } from '../../context/ThemeContext';
import { socialMedia } from '../../data/constants';
import './SocialMedia.css'
import 'animate.css/animate.css';

export const SocialMedia = () => {
    const styles = {
        iconStyle: {
            marginLeft: 10,
            marginRight: 10,
            marginBottom: 10,
        },
    };

    const { theme } = useTheme()
    const bgColor = theme === "dark" ? "white" : "black"
    const fgColor = theme === "dark" ? "black" : "white"

    return (
        <div className="pt-3">
            {
                socialMedia.map((social) => (
                    <SocialIcon
                        key={social.network}
                        style={styles.iconStyle}
                        url={social.href}
                        network={social.network}
                        bgColor={bgColor}
                        fgColor={fgColor}
                        target="_blank"
                        rel="noopener"
                        className='social-icon'
                    />
                ))
            }
        </div>
    )
}
