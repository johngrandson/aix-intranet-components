import * as React from "react";
import { Component } from "react";

class UserHeader extends Component<{}> {
  render() {
    return (
      <>
        <div
          className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
          style={{
            minHeight: 380,
            marginBottom: '-16rem',
            backgroundImage:
              "url(/bg.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center center"
          }}
        >
          {/* Mask */}
          <span className="mask bg-gradient-default opacity-7" />
          {/* Header container */}
        </div>
      </>
    );
  }
}

export default UserHeader;
