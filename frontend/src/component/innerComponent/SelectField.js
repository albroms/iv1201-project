import React, { Fragment } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import styles from "../../resources/styles/standardLayoutStyles";

/*
* Represents a selec field in a form
*/
class SelectField extends React.Component {

  renderSelects = (ids) => {
    const {controlId, handler, options, renderOptions, fieldTitles} = this.props;
    return ids.map((id, i)=>(
        <Form.Group key={id} controlId={controlId[i]} style={styles.formField}>
          <Form.Label>{fieldTitles[i]}</Form.Label>
          <Form.Control 
          as="select" 
          onChange={handler} 
          ref={ref => this[controlId[i]] = ref }
          >
            {renderOptions(options[i], controlId[i])}
          </Form.Control>
        </Form.Group>
      ));
    }
    

  render() {
    const {addSelected, buttonName, errors, controlId} = this.props
    return (
      <Fragment>
        <Form.Row>
          {this.renderSelects(controlId)}
        </Form.Row>
        <Button
          variant="primary"
          type="button"
          style={{ maxHeight: "38px" }}
          onClick={() => {
            addSelected();
            this.workExpYears.value = "";
            this.workExp.value = "";
          }}>
          {buttonName}
        </Button>
        <p style={styles.error}>{errors[0]}</p>
      </Fragment>
    );
  }
}

export default SelectField;
