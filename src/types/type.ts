export interface PostPage {
  id: number;
  title: string;
  body: string;
}

export interface PhotoPage {
  id: string;
  author: string;
  download_url: string;
}

export type TodoPage = {
  id: number;
  title: string;
  completed: string;
};

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
}

export interface Geo {
  lat: string;
  lang: string;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface UserPage {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  geo: Geo;
  phone: string;
  website: string;
  company: Company;
}
