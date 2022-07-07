import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import Image from "../../elements/Image";

const Logo = ({ className, ...props }) => {
  const classes = classNames("brand", className);

  return (
    <div
      {...props}
      style={{
        flexDirection: "row",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      className={classes}
    >
      <h1 className="m-0">
        <Link to="/">
          <Image
            src={require("./../../../assets/images/logo.svg")}
            alt="Open"
            width={200}
            height={200}
          />
        </Link>
      </h1>
      {/* <span style={{ marginLeft: 10, color: "white" }}>PayApp</span> */}
    </div>
  );
};

export default Logo;
