export type FaqItem = {
  id: string;
  question: string;
  displayOrder: number;
  createdAt: string; // ISO datetime
  updatedAt: string; // ISO datetime
  answers: FaqAnswer[];
};

export type FaqAnswer = {
  id: string;
  faqId: string;
  short: string;
  long: string;
  displayOrder: number;
  createdAt: string; // ISO datetime
};

export type TestimoniItem = {
  id: string;
  userId: string;
  testimoni: string;
  iconUrl: string;
  createdAt: string; // ISO datetime
  updatedAt: string; // ISO datetime
  user: User;
};

export type User = {
  id: string;
  username: string;
  email: string;
  imageUrl: string;
  addressLine: string;
  city: string;
  province: string;
  postalCode: string;
  country: string;
  createdAt: string; // ISO datetime
  updatedAt: string; // ISO datetime
};

export type PaginationMetadata = {
  current_page: number;
  page_size: number;
  first_page: number;
  last_page: number;
  total_records: number;
};
