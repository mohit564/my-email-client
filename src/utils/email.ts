// types
import { Email } from "../models/email";
import { READ_EMAIL_ID_LIST, FAVORITE_EMAIL_ID_LIST } from "../constants";

export const convertArrayToEmailList = (array: Email[] = []) => {
  return array.reduce(
    (acc, email) => ({
      ...acc,
      [email.id]: {
        ...email,
        body: email.body ?? "",
        hasRead: email.hasRead ?? false,
        isFavorite: email.isFavorite ?? false,
      },
    }),
    {}
  );
};

export const loadReadEmailsHistory = (
  emails: Record<string, Email>
): Record<string, Email> => {
  const readEmailIdList = sessionStorage.getItem(READ_EMAIL_ID_LIST);

  if (readEmailIdList == null || !Array.isArray(JSON.parse(readEmailIdList))) {
    return emails;
  }

  const ids = JSON.parse(readEmailIdList);

  for (const id of ids) {
    if (emails.hasOwnProperty(id)) {
      emails[id].hasRead = true;
    }
  }

  return emails;
};

export const loadFavoriteEmailsHistory = (
  emails: Record<string, Email>
): Record<string, Email> => {
  const favoriteEmailIdList = sessionStorage.getItem(FAVORITE_EMAIL_ID_LIST);

  if (
    favoriteEmailIdList == null ||
    !Array.isArray(JSON.parse(favoriteEmailIdList))
  ) {
    return emails;
  }

  const ids = JSON.parse(favoriteEmailIdList);

  for (const id of ids) {
    if (emails.hasOwnProperty(id)) {
      emails[id].isFavorite = true;
    }
  }

  return emails;
};

export const addIdToReadEmailHistory = (id: string) => {
  let readEmailIdList = sessionStorage.getItem(READ_EMAIL_ID_LIST);

  if (readEmailIdList == null || !Array.isArray(JSON.parse(readEmailIdList))) {
    readEmailIdList = JSON.stringify([]);
  }

  const ids = new Set(JSON.parse(readEmailIdList));
  ids.add(id);
  sessionStorage.setItem(READ_EMAIL_ID_LIST, JSON.stringify(Array.from(ids)));
};

export const addIdToFavoriteEmailHistory = (id: string) => {
  let favoriteEmailIdList = sessionStorage.getItem(FAVORITE_EMAIL_ID_LIST);

  if (
    favoriteEmailIdList == null ||
    !Array.isArray(JSON.parse(favoriteEmailIdList))
  ) {
    favoriteEmailIdList = JSON.stringify([]);
  }

  let ids = new Set(JSON.parse(favoriteEmailIdList));
  ids.add(id);
  sessionStorage.setItem(
    FAVORITE_EMAIL_ID_LIST,
    JSON.stringify(Array.from(ids))
  );
};

export const removeIdFromFavoriteEmailHistory = (id: string) => {
  let favoriteEmailIdList = sessionStorage.getItem(FAVORITE_EMAIL_ID_LIST);

  if (
    favoriteEmailIdList == null ||
    !Array.isArray(JSON.parse(favoriteEmailIdList))
  ) {
    return;
  }

  let ids = new Set(JSON.parse(favoriteEmailIdList));
  ids.delete(id);
  sessionStorage.setItem(
    FAVORITE_EMAIL_ID_LIST,
    JSON.stringify(Array.from(ids))
  );
};
