import React from "react";
import Link from "@mui/material/Link";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const RedSocial = () => {
  return (
    <div>
      <h5>Seguinos en nuestras redes sociales.</h5>
      <Link href="https://www.facebook.com/" target="_blank">
        <FacebookIcon />
      </Link>
      <Link href="https://twitter.com/" target="_blank">
        <TwitterIcon />
      </Link>
      <Link href="https://instagram.com/" target="_blank">
        <InstagramIcon />
      </Link>
      <Link href="https://linkedin.com/" target="_blank">
        <LinkedInIcon />
      </Link>
    </div>
  );
};
export default RedSocial;
