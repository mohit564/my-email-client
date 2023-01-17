import { Email } from "../models/email";

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
