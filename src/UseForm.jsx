import { useState } from 'react';

function useForm(initialValues) {
  const [formValues, setFormValues] = useState(initialValues);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,  
    });
  };

  return {
    formValues,
    handleInputChange,
  };
}

export default useForm;
