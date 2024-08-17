import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer class="footer footer-center  w-full p-4 bg-gray-900 text-white">
        <div class="text-center font-heading">
          <p>
            Copyright © 2024 -
            <Link class="font-bold font-heading" to="/">
              Electronic Store.
            </Link>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
