// https://ru.wikipedia.org/wiki/UTF-8#:~:text=Unicode%20Transformation%20Format%2C%208%2Dbit,%D1%81%207%2D%D0%B1%D0%B8%D1%82%D0%BD%D0%BE%D0%B9%20%D0%BA%D0%BE%D0%B4%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%BE%D0%B9%20ASCII.
// https://ru.wikipedia.org/wiki/%D0%A1%D0%BF%D0%B8%D1%81%D0%BE%D0%BA_MIME-%D1%82%D0%B8%D0%BF%D0%BE%D0%B2

import 'material-icons/iconfont/material-icons.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import {
  getContacts,
  getContactById,
  updateContact,
} from './js/service/contact.service';
import { createContactMarkup } from './js/createContact';
import { refs } from './js/refs';
import { spinnerPlay, spinnerStop } from './js/spinner';

spinnerPlay();

getContacts()
  .then(data => {
    const markup = [...data].reverse().map(createContactMarkup);
    refs.list.insertAdjacentHTML('beforeend', markup.join(''));
  })
  .catch(error => {
    console.log(error);
  })
  .finally(() => {
    spinnerStop();
  });

//////////////////////////////////////////////

// spinnerPlay();

// getContactById(67)
//   .then(data => {
//     const markup = createContactMarkup(data);
//     refs.list.innerHTML = markup;
//   })
//   .catch(error => {
//     console.log(error);
//   })
//   .finally(() => {
//     spinnerStop();
//   });

////////////////////////////////////////////

const updateBtn = () => {
  spinnerPlay();
  updateContact({ name: 'Serhii', id: 70 })
    .then(data => {
      console.log(data);
      Notify.success(`${data.name} was updated!`);
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      spinnerStop();
    });
};

refs.updateBtn.addEventListener('click', updateBtn);
