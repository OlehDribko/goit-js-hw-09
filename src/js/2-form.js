const feedbackFormEl = document.querySelector('.feedback-form');

let formData = {
  email: '',
  message: '',
};

const fillFormFields = () => {
  try {
    const formDanaFromLs = JSON.parse(
      localStorage.getItem('feedback-form-state')
    );
    if (formDanaFromLs === null) {
      return;
    }
    formData = formDanaFromLs;
    for (const key in formDanaFromLs) {
      feedbackFormEl.elements[key].value = formDanaFromLs[key];
    }
  } catch (error) {
    console.log(error);
  }
};

fillFormFields();

const onFormChange = event => {
  const { target: formFieldEl } = event;
  const fieldValue = formFieldEl.value;
  const fieldName = formFieldEl.name;
  formData[fieldName] = fieldValue;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

const feedbackFormSubmit = event => {
  if (formData.email === '' || formData.message === '') {
    return alert('Fill please all fields');
  }
  event.preventDefault();
  const { currentTarget: formEl } = event;
  formEl.reset();
  localStorage.removeItem('feedback-form-state');
};

feedbackFormEl.addEventListener('input', onFormChange);
feedbackFormEl.addEventListener('submit', feedbackFormSubmit);
