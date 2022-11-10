import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  .footer {
    margin: 50px 0 50px 0;
    text-align: center;
  }
  a:link {
    color: hotpink;
  }

  a:visited {
    color: hotpink;
  }

  a:hover {
    color: hotpink;
  }

  a:active {
    color: hotpink;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <p className="footer">
        Made with 💖 by <strong><a href="https://github.com/ruvolpe">Rubi</a></strong><small> © 2022 </small>
      </p>
    </StyledFooter>
  );
};

export default Footer;