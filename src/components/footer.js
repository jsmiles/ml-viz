import React from 'react';
import classes from './footer.module.css';

const Footer = () => {
  return (
    <div className={classes.footer}>
      <a href='https://jsmiles.github.io/' className={classes.footerLink}>
        Visit My Portfolio Website
      </a>
    </div>
  );
};

export default Footer;
