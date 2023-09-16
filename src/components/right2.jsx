import React from 'react'
import { faEnvelope, faCog,  faSignOutAlt,  faInfoCircle, faFileContract, faSquareEnvelope} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Right2() {
  return (
    <div>

        <div id='right' className='blocks_of_home'>

            <div id="sub_right_1">
            <i className='texts' id='contact_word' title='Contact Us'>Contact Messages</i> 
            <i className='texts' id='info_word' title='About Us'>About Us</i> 
            <i className='texts' id='conditions_word' title='Terms & Conditions'>Terms & Conditions</i>
            <i className='texts' id='settings_word' title='Settings'>Settings</i> 
            <i className='texts' id='logout_word' title='Logout'>Logout</i> 
            </div>

            <div id="sub_right_2">
            <FontAwesomeIcon icon={faEnvelope} className='fonts_divs' id='contact_icon' title='Contact Us'/> 
            <FontAwesomeIcon icon={faInfoCircle} className='fonts_divs' id='info_icon' title='About Us'/> 
            <FontAwesomeIcon icon={faFileContract} className='fonts_divs' id='conditions_icon' title='Terms & Conditions'/>
            <FontAwesomeIcon icon={faCog} className='fonts_divs' id='settings_icon' title='Settings'/> 
            <FontAwesomeIcon icon={faSignOutAlt} className='fonts_divs' id='logout_icon' title='Logout'/> 
            </div>

        </div>
      
    </div>
  )
}

export default Right2
