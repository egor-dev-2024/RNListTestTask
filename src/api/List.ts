import {listUrl} from '../constants/Weblinks';

export const getListOfUsers = async () => {
  const res = await fetch(listUrl);
  return await res.json();
};
