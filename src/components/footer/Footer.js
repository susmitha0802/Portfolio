import { SocialMedia } from '../socialMedia/SocialMedia';
import "../../App.css"

export const Footer = () => {
    return (
        <div className='d-flex flex-column align-items-center dark'
            fixed="bottom"
            style={{ backgroundColor: "black" }}
        >
            <SocialMedia />
            <p className='text-white text-center fs-6'>© 2023 Susmitha Papani. All rights reserved.</p>
        </div>
    )
}