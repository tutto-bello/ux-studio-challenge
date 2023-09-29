export interface IContact {
  name: string;
  phone: string;
  email: string;
  imgUrl: string;
  favorite: boolean;
}

export interface IContactResponse extends IContact {
  _id: string;
}
