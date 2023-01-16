export type EmailState = {
  loading: boolean;
  error: Error | null;

  list: Email[];
  total: number;

  selectedEmail: Email | null;
};

export type Email = {
  id: string;
  from: EmailFrom;
  date: number;
  subject: string;
  short_description: string;
  body: string;
  hasRead: boolean;
  isFavorite: boolean;
};

export type EmailFrom = {
  email: string;
  name: string;
};

export type EmailFilters = {
  id?: string;
  page?: number;
};
