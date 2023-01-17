export type EmailState = {
  loading: boolean;
  error: Error | null;

  emails: Record<string, Email>;
  total: number;

  filteredEmails: Record<string, Email>;
  openedEmail: Email | null;
};

export type EmailListResponse = {
  list: Email[];
  total: number;
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
