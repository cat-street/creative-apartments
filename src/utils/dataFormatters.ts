const cityMap: { [key: string]: string } = {
  Tyumen: 'Тюмень',
};

type Address = {
  city: string;
  street: string;
  house: string;
  room: string;
};

type FullName = {
  first_name: string;
  middle_name: string;
  last_name: string;
};

const formatAddress = ({ city, street, house, room }: Address) => {
  return `${cityMap[city]}, ${street} ул., ${house}, кв. ${room}`;
};

const formatName = ({ first_name, middle_name, last_name }: FullName) => {
  return `${last_name} ${first_name} ${middle_name}`;
};

export { formatAddress, formatName };
