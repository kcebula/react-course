import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends React.Component<any> {

  renderError = ({ error, touched }: any) => {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      )
    }
  };


  renderInput = ({input, label, meta}: any) => {
    const className = `field ${meta.touched && meta.error && 'error'}`

    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off"/>
        {this.renderError(meta)}
      </div>
    )
  };

  onSubmit = (formValues: any) => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field name="title" component={this.renderInput} label="Enter title"/>
        <Field name="description" component={this.renderInput} label="Enter description"/>
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = (formValues: any) => {
  const errors: { [key: string]: string } = {};

  if (!formValues.title) {
    errors.title = 'Stream title is required';
  }
  if (!formValues.description) {
    errors.description = 'Stream decription is required';
  }

  return errors;
};

export default reduxForm({
  form: 'streamForm',
  validate
})(StreamForm);
