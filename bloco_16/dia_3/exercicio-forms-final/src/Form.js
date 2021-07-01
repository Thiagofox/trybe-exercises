import React, { Component } from 'react';
import PersonalForm from './PersonalForm'
import ProfessionalForm from './ProfessionalForm'
import { connect } from 'react-redux';
import { formSubmit } from './actions';

class Form extends Component {
  render() {
    const { formSubmit, resetForm, changeHandler, currentState, onBlurHandler } = this.props;

    return (
      <form>
        <PersonalForm
          changeHandler={ changeHandler }
          onBlurHandler= { onBlurHandler }
          currentState= { currentState }
        />
        <ProfessionalForm changeHandler={ changeHandler } />
        <input
            type="button"
            onClick={ () => formSubmit(currentState) }
            value="Enviar"
        />
        <input
          type="reset"
          onClick={ resetForm }
          value="Limpar"
        />
      </form>
    );
  }
  
}
const mapDispatchToProps = (dispatch) => ({
  formSubmit: (state) => dispatch(formSubmit(state))});

export default connect (null, mapDispatchToProps)(Form)
