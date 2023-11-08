import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { FaBars } from 'react-icons/fa';
// import { CiSettings } from 'react-icons/ci';
// import { FiHelpCircle } from 'react-icons/fi';
// import { AiOutlineSearch } from 'react-icons/ai';
// import { RiArrowDownSFill } from 'react-icons/ri';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPlayCircle } from '@fortawesome/free-regular-svg-icons';
import { faCalendarPlus, faGear, faBell, faReceipt, faSortDown, faPerson, faEllipsisVertical, faUserPlus } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {


    // const handleCalender = () => {
    //     navigate("/calender");
    // }

    return (
        <nav className='navbar'>
            <div className='upper'>
              <div className='left'>

                <img className='leaf' alt='profile dp' src='./images/beauty.png'/>
                <h1 className='atlas'>Atlas</h1>
                <div className='mahela'>
                    <div className='rece'>
                        <FontAwesomeIcon icon={faReceipt} className='max' />
                        <FontAwesomeIcon icon={faReceipt} className='min' />
                    </div>
                    <h3>mahelaPedia...</h3>
                    <FontAwesomeIcon icon={faSortDown} className='down' />
                </div>
                <FontAwesomeIcon icon={faGear} className='gear'/>

                <div className='access'>
                    <h4>Access Manager</h4>
                    <FontAwesomeIcon icon={faSortDown}  className='down'/>
                </div>
                <h4 className='billing'>Billing</h4>

              </div>

              <div className='right'>
                <h4>All Clusters</h4>
                <div>
                    <h4>Get Help</h4>
                    <FontAwesomeIcon icon={faSortDown}  className='down' />
                </div>
                <div className='account'>
                    <h4>mahelaPedia</h4>
                    <FontAwesomeIcon icon={faSortDown} className='down'  />
                </div>
              </div>
            
            </div>

            <div className='lower'>
                <div className='left'>
                    <div className='project'>
                            <FontAwesomeIcon icon={faPerson} className='person' />
                            <h4>Borrowers 0</h4>  
                            <FontAwesomeIcon icon={faSortDown} className='down'  />          
                    </div>
                    <FontAwesomeIcon icon={faEllipsisVertical} className='ellipsis' />

                    <div className='data'>
                        <h4>Data Services</h4>
                        <h4>App Services</h4>
                        <h4>Charts</h4>
                    </div>
                
                </div>

                <div className='right'>
                    <FontAwesomeIcon icon={faUserPlus} className='plus' />
                    {/* <FontAwesomeIcon icon={faFolderPlus}  className='plus' /> */}
                    <FontAwesomeIcon icon={faCalendarPlus}  className='plus' />
                    {/* <FontAwesomeIcon icon={faSquarePlus}  className='plus' /> */}
                    <FontAwesomeIcon icon={faBell}  className='plus' />
                </div>

              
            </div>
        </nav>
    )
}

export default Navbar;