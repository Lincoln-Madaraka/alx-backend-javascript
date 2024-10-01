import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const promises = [signUpUser(firstName, lastName), uploadPhoto(fileName)];
  const report = [];
  return Promise.allSettled(promises)
    .then((results) => {
      results.forEach((result) => {
        report.push({
          status: result.status,
          value: result.status === 'rejected' ? result.reason.toString() : result.value,
        });
      });
      return report;
    });
}
