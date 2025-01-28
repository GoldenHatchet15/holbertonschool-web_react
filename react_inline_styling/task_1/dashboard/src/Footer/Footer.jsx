import React from 'react';
import './Footer.css';
import { getFooterCopy, getCurrentYear } from '../utils/utils';

const Footer = () => (
    <footer className="footer">
    <p>Copyright {getCurrentYear()} {getFooterCopy(true)}</p>
  </footer>
);

export default Footer;
