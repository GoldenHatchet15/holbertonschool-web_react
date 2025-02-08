import React, { useContext } from 'react';
import './Footer.css';
import { getFooterCopy, getCurrentYear } from '../utils/utils';
import AppContext from '../Context/context';

const Footer = () => {
  const { user } = useContext(AppContext);

  return (
    <footer className="footer">
      <p>Copyright {getCurrentYear()} {getFooterCopy(true)}</p>
      {user.isLoggedIn && (
        <p>
          <a href="mailto:support@holbertonschool.com" id="contactUs">
            Contact us
          </a>
        </p>
      )}
    </footer>
  );
};

export default Footer;
