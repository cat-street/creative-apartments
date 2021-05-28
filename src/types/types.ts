export type Apartment = {
  [key: string]: any;
  image: string;
  favorites: boolean;
};

export type ApartmentsState = {
  items: Apartment[];
  loading: boolean;
};
