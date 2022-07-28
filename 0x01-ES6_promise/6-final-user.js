import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
    return Promise.allSettled([uploadPhoto(fileName), signUpUser(firstName, lastName)])
    .then((result) => {
        const promises = result.map((value) => {
          if (value.status === 'fulfilled') {
            return value; }
          return { status: value.status, value: `${value.reason}` };
        });
        return promises;
      });}
