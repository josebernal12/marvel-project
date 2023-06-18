import { useEffect, useMemo, useState } from 'react';

export const useForm = ( initialForm = {}, formValidations = {} ) => {
  
    const [ formState, setFormState ] = useState( initialForm );
  const [formValidation, setformValidation] = useState({})

  useEffect(() => {
    createValidators()
  }, [formState])
  
 const isFormValid = useMemo(() => {
   for (const FormChange of Object.keys(formValidation)) {
      if(formValidation[FormChange] !== null) return false
   }
   return true
 }, [formValidation])

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }

    const createValidators = () => {
   const formCheckedValues = {};
   for (const formValues of Object.keys(formValidations)) {
    const [fn, errorMessage] = formValidations[formValues]
    formCheckedValues[`${formValues}Valid`] = fn(formState[formValues]) ? null : errorMessage
   }
   setformValidation(formCheckedValues)
 
    }
    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        ...formValidation,
        isFormValid
    }
}