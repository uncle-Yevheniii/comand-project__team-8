import {postSubscribe} from '../API.js';
import {showModalEmail,showModalSubscr} from '../js/modalfooter.js';

const submitSubscribe = document.querySelector('.footer-form');

submitSubscribe.addEventListener('submit', onSubmit);

async function onSubmit(event) {
  event.preventDefault();
  const emailInput = event.target.email;
  const email = emailInput.value;

  const result = await postSubscribe(email);

  if (result.success) {
    showModalSubscr();
    emailInput.value = '';
  } else {
    if (result.status === 409) {
        showModalEmail();
        emailInput.value = '';
    } else {      
      alert(result.message);
    }
  }
}
