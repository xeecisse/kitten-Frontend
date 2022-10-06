import classNames from "classnames";
import React from "react";
import { Card } from "reactstrap";
import { themeClass } from "../../variables";
// import { themeClass } from "variables";

function BorderedCard(props) {
  return (
    <Card
      className={classNames([ props.className])}
      //  className={`${props.container}`}
      // outline
      style={{
        borderWidth: 1,
        // borderColor: activeBusiness.primary_color,
        borderColor:themeClass,
        borderStyle: 'solid',
      }}
      outline
    >
      {props.children}
    </Card>
  );
}

export default BorderedCard;
