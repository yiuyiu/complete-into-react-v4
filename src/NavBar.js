import React from "react";
import { Link } from "@reach/router";
import styled from "@emotion/styled";
import { jsx, css, keyframes } from "@emotion/core";
import colors from "./colors";
/** @jsx jsx */
const bounce = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    transform: translate3d(0, -30px, 0);
  }

  70% {
    transform: translate3d(0, -15px, 0);
  }

  90% {
    transform: translate3d(0,-4px,0);
  }
`;
const Container = styled("header")`
  background-color: ${colors.dark};
  position: sticky;
  top: 0;
  z-index: 10;
`;
const NavLink = styled(Link)`
  &:hover {
    text-decoration: underline;
  }
`;
class NavBar extends React.Component {
  state = {
    time: 1
  };
  handleClick = () => {
    this.setState({
      time: this.state.time / 2
    });
  };
  render() {
    return (
      <Container>
        <NavLink to="/">Adopt Me!</NavLink>
        <NavLink to="/search-params">
          <span aria-label="search" role="img" onClick={this.handleClick}>
            🔍
          </span>
        </NavLink>
        <div
          css={css`
            animation: ${bounce} ${this.state.time}s ease infinite;
          `}
        >
          some bouncing text!
        </div>
      </Container>
    );
  }
}

export default NavBar;
