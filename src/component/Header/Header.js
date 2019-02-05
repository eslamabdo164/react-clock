
import React from 'react' ;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Navbar} from 'reactstrap';
import './Header.css'
const Header = () => {
    return(
        <div className=''>
        <Navbar color="dark" light expand="md">
        <p className='text-white display-4 mx-auto' href="/">
        <FontAwesomeIcon icon="clock" className='mr-2' /> React Basic Clock
         </p>
        </Navbar>
      </div>
    )
}
export default Header
