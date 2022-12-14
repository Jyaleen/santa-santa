import React, { ReactNode } from "react";
import Header from "./Header";
// import snow from  "./snow";
import { Grid, makeStyles } from '@material-ui/core';
import Kitsch from "./Kitsch";

type Props = {
  children: ReactNode;
};

const useStyles = makeStyles((theme) => ({
  layout: {
    padding: "0 2rem",
  },
}))

const Layout: React.FC<Props> = (props) => {
  const classes = useStyles()
  // <div dangerouslySetInnerHTML={{__html: snow}}>
  return (
    < Grid >
      <Header />
      <div >{props.children}</div>
      {/* <Kitsch /> */}
      <style jsx global>{`
      html {
        box-sizing: border-box;
        head: <script src="snowstorm.js"></script>;
      }

      *,
      *:before,
      *:after {
        box-sizing: inherit;
      }

      body {
        margin: 0;
        padding: 0;
        font-size: 16px;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
          Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
          "Segoe UI Symbol";
        background: rgba(20, 40, 73);
      }

      input,
      textarea {
        font-size: 16px;
      }

      button {
        cursor: pointer;
      }
    `}</style>
    </Grid >
  )
};

export default Layout;
