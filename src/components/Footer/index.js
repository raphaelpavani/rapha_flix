import React from "react";
import { FooterBase } from "./styles";

function Footer() {
  return (
    <FooterBase>
      <a href="https://github.com/raphaelpavani" target="_blank">
        <img
          src="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
          height="50px"
          alt="Logo React"
        />
      </a>
      <p>
        Orgulhosamente criado durante a{" "}
        <a href="https://github.com/raphaelpavani" target="_blank">
          Raphael Pavani
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
