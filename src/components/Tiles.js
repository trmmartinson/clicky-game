import React from "react";

function Tile(props) {
  return (
<div className="container">
  <div className="row">
    <div className="col-sm">
        <img className = "boxy" onClick={() => { props.clicker(props.num1) }}     src={props.fileName1} height='142' width='142' alt="" />
        <img className = "boxy" onClick={() => { props.clicker(props.num2) }}     src={props.fileName2} height='142' width='142' alt="" />
        <img className = "boxy" onClick={() => { props.clicker(props.num3) }}     src={props.fileName3} height='142' width='142' alt="" />
        <img className = "boxy" onClick={() => { props.clicker(props.num4) }}     src={props.fileName4} height='142' width='142' alt="" />
    </div>
  </div>
</div>
  );
}
export default Tile;
