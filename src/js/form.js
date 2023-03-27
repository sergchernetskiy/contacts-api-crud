import { Notify } from 'notiflix/build/notiflix-notify-aio';
import throttle from 'lodash.throttle';
import { load, save, removeLS } from './localStorage';
import { refs } from './refs';
import { createContact } from './service/contact.service';
import { spinnerPlay, spinnerStop } from './spinner';
import { createContactMarkup } from './createContact';

initForm();

const handleSubmit = e => {
  e.preventDefault();
  const { name, email, phone } = e.target.elements;

  if (name.value === '' || email.value === '' || phone.value === '') {
    Notify.failure('Please fill in all the areas of the form and try again');
    return;
  }

  const userData = {};

  const formData = new FormData(refs.form);

  formData.forEach((value, name) => {
    userData[name] = value;
  });
  spinnerPlay();
  createContact(userData)
    .then(data => {
      const markup = createContactMarkup(data);
      refs.list.insertAdjacentHTML('afterbegin', markup);
      toggleModal();
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      spinnerStop();
    });

  e.currentTarget.reset();
  removeLS();
};

const handleInput = event => {
  const { name, value } = event.target;
  let persistedData = load();
  persistedData = persistedData ? persistedData : {};

  persistedData[name] = value;
  save(persistedData);
};

function initForm() {
  let persistedData = load();
  if (persistedData) {
    Object.entries(persistedData).forEach(([name, value]) => {
      refs.form.elements[name].value = value;
    });
  }
}

function toggleModal() {
  refs.modalForm.classList.toggle('is-hidden');
}

refs.addBtn.addEventListener('click', toggleModal);
refs.closeBtn.addEventListener('click', toggleModal);

refs.form.addEventListener('input', throttle(handleInput, 300));
refs.form.addEventListener('submit', handleSubmit);
