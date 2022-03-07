import React from "react";

export const PopUp = (props) => {
  const data = props.props;
  return (
    <div>
      <div>
        {data.lastName} {data.firstName} a bien ete enregistré
      </div>
    </div>
  );
};
