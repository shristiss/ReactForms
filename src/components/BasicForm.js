import UseInput from "../hooks/UseInput";
const BasicForm = (props) => {
  const {value:enteredFirstName,isValid:firstnameIsValid,hasError:firtsnameHasError,
    valueChangeHandler:firstnameChangeHandler,
    inputBlurHandler:firstnameBlurHandler,
    reset:firstnameReset
  }=UseInput(value=>value.trim()!=='')

  const {value:enteredLastname,isValid:lastnameIsValid,hasError:lastnameHasError,
    valueChangeHandler:lastnameChangeHandler,
    inputBlurHandler:lastnameBlurHandler,
    reset:lastnameReset
  }=UseInput(value=>value.trim()!=='')

  const {value:enteredEmail,isValid:emailIsValid,hasError:EmailHasError,
    valueChangeHandler:EmailChangeHandler,
    inputBlurHandler:EMailBlurHandler,
    reset:EmailReset
  }= UseInput(value=>value.includes('@'))
 
  let isFormValid=false;
  if( firstnameIsValid && lastnameIsValid && emailIsValid)
  {
    isFormValid=true;
  }

  const submitHandler=(event)=>{
  event.preventDefault();
  if(!firstnameIsValid || !lastnameIsValid || !emailIsValid)
  {
    return;
  }
  firstnameReset();
  lastnameReset();
  EmailReset();
  }

  return (
    <form onSubmit={submitHandler}>
      <div className='control-group'>
        <div className='form-control'>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' 
            onChange={firstnameChangeHandler}
            onBlur={firstnameBlurHandler}
            value={enteredFirstName}
          />
           {firtsnameHasError && (
          <p className='error-text'>First Name must not be empty.</p>
        )}
        </div>
        <div className='form-control'>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name'
           onChange={lastnameChangeHandler}
            onBlur={lastnameBlurHandler}
            value={enteredLastname}
           />
            {lastnameHasError && (
          <p className='error-text'> LastName must not be empty.</p>
        )}
        </div>
      </div>
      <div className='form-control'>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name'
         onChange={EmailChangeHandler}
            onBlur={EMailBlurHandler}
            value={enteredEmail} />
             {EmailHasError && (
          <p className='error-text'>Email must contain '@'.</p>
        )}
      </div>
      <div className='form-actions'>
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
