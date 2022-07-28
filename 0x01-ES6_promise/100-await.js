import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let info = {};

  try {
    info.photo = await uploadPhoto();
    info.user = await createUser();
  } catch (e) {
    info = { photo: null, user: null };
  }
  return info;
}
