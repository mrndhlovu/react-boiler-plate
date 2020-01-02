import React, { Component } from "react";
import { connect } from "react-redux";

import styled from "styled-components";
import { getAuth } from "../actions/AuthActions";

const StyledAppContainerDiv = styled.div`
  min-height: 60rem;
  overflow: hidden;
  padding-bottom: 2rem;
`;

class AppContainer extends Component {
  componentDidMount() {
    this.props.getAuth();
  }

  render() {
    return <StyledAppContainerDiv>{this.props.children}</StyledAppContainerDiv>;
  }
}

export default connect(null, { getAuth })(AppContainer);
