import React from "react";

class LangSwitch extends React.Component {
  render(){
    return (
      <div className="switch-container">
        <h6>EN</h6>
        <label>
          <input
            onChange={()=>this.props.handleLangChange()}
            className="switch"
            id="langSwitch"
            type="checkbox"
          />
          <div>
            <div></div>
          </div>
        </label>
        <h6>FR</h6>
      </div>
    );
  }
}
export default LangSwitch;
