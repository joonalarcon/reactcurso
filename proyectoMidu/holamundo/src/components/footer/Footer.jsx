import './Footer.css'
import { FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaMapLocationDot } from "react-icons/fa6";

function Footer(){

    return(
          <footer>
            <div className="container">
                <div className="row">

                    <div className="col-md-4 ">
                        <div>
                            {/* hay que rellenar el logo.*/}
                        </div>
                    </div>
                    {/* _________________________________________*/}


                    <div className="col-md-4 text-center">
                        <span className='letter-style-footer'>Social Media</span>
                        <div className='text-center'>
                            <FaGithub className='logo' />
                            <FaInstagram className='logo'  />
                            <FaSquareXTwitter className='logo'/>
                        </div>
                    </div>

                    {/* _________________________________________*/}

                    <div className="col-md-4 text-center ">
                        <span className='letter-style-footer'>Contact Me</span>
                        <div className='text-center'>
                        <FaWhatsapp className='logo'/>
                        <FaPhoneVolume className='logo'/>
                        <FaMapLocationDot className='logo'/>
                        </div>

                    </div>

                    {/* _________________________________________*/}


                    <div className='text-center'>
                    <span className='letter-style-footer'>@Jonathan Alarcón all rights reserved</span>

                    </div>
                </div>
            </div>
       </footer>
    )
}

export default Footer
