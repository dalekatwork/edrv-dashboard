export interface Hours {
  open: string;
  close: string;
}

export interface Shop {
  key: string;
  address: string;
  shopName: string;
  city: string;
  chargeStations: number;
  active: boolean;
  businessHours: { [index: string]: Hours[] };
}

export interface RowEntry {
  key: string;
  day: string;
  hours: Hours[];
}

export const data: Shop[] = [
  {
    key: "0",
    address: "East of Kailash, F92",
    shopName: "GK Coffee House",
    city: "Delhi",
    chargeStations: 2,
    active: true,
    businessHours: {
      "0": [
        {
          open: "09:00",
          close: "12:00",
        },
        {
          open: "18:00",
          close: "21:00",
        },
      ],
      "1": [
        {
          open: "09:00",
          close: "18:00",
        },
      ],
      "2": [
        {
          open: "09:00",
          close: "18:00",
        },
      ],
      "3": [
        {
          open: "09:00",
          close: "18:00",
        },
      ],
      "4": [
        {
          open: "09:00",
          close: "18:00",
        },
      ],
      "5": [
        {
          open: "09:00",
          close: "18:00",
        },
      ],
      "6": [
        {
          open: "09:00",
          close: "12:00",
        },
        {
          open: "18:00",
          close: "21:00",
        },
      ],
    },
  },
  {
    key: "1",
    address: "Lajpat Nagar 1, F82",
    shopName: "Nirulas Coffee",
    city: "Delhi",
    chargeStations: 2,
    active: false,

    businessHours: {
      "0": [
        {
          open: "09:00",
          close: "12:00",
        },
        {
          open: "18:00",
          close: "21:00",
        },
      ],
      "1": [
        {
          open: "09:00",
          close: "18:00",
        },
      ],
      "2": [
        {
          open: "09:00",
          close: "18:00",
        },
      ],
      "3": [
        {
          open: "09:00",
          close: "18:00",
        },
      ],
      "4": [
        {
          open: "09:00",
          close: "18:00",
        },
      ],
      "5": [
        {
          open: "09:00",
          close: "18:00",
        },
      ],
      "6": [
        {
          open: "09:00",
          close: "12:00",
        },
        {
          open: "18:00",
          close: "21:00",
        },
      ],
    },
  },
  {
    key: "2",
    address: "Lajpat Nagar 2, E32",
    shopName: "Starbucks Coffee",
    city: "Delhi",
    chargeStations: 9,
    active: false,

    businessHours: {
      "0": [
        {
          open: "09:00",
          close: "12:00",
        },
        {
          open: "18:00",
          close: "21:00",
        },
      ],
      "1": [
        {
          open: "09:00",
          close: "18:00",
        },
      ],
      "2": [
        {
          open: "09:00",
          close: "18:00",
        },
      ],
      "3": [
        {
          open: "09:00",
          close: "18:00",
        },
      ],
      "4": [
        {
          open: "09:00",
          close: "18:00",
        },
      ],
      "5": [
        {
          open: "09:00",
          close: "18:00",
        },
      ],
      "6": [
        {
          open: "09:00",
          close: "12:00",
        },
        {
          open: "18:00",
          close: "21:00",
        },
      ],
    },
  },
  {
    key: "3",
    address: "Saket, J23",
    shopName: "RK Electronics",
    city: "Delhi",
    chargeStations: 2,
    active: true,

    businessHours: {
      "0": [
        {
          open: "09:00",
          close: "12:00",
        },
        {
          open: "18:00",
          close: "21:00",
        },
      ],
      "1": [
        {
          open: "09:00",
          close: "18:00",
        },
      ],
      "2": [
        {
          open: "09:00",
          close: "18:00",
        },
      ],
      "3": [
        {
          open: "09:00",
          close: "18:00",
        },
      ],
      "4": [
        {
          open: "09:00",
          close: "18:00",
        },
      ],
      "5": [
        {
          open: "09:00",
          close: "18:00",
        },
      ],
      "6": [
        {
          open: "09:00",
          close: "12:00",
        },
        {
          open: "18:00",
          close: "21:00",
        },
      ],
    },
  },
  {
    key: "4",
    address: "East of Kailash, F92",
    shopName: "GK Coffee House",
    city: "Delhi",
    chargeStations: 2,
    active: true,

    businessHours: {
      "0": [
        {
          open: "09:00",
          close: "12:00",
        },
        {
          open: "18:00",
          close: "21:00",
        },
      ],
      "1": [
        {
          open: "09:00",
          close: "18:00",
        },
      ],
      "2": [
        {
          open: "09:00",
          close: "18:00",
        },
      ],
      "3": [
        {
          open: "09:00",
          close: "18:00",
        },
      ],
      "4": [
        {
          open: "09:00",
          close: "18:00",
        },
      ],
      "5": [
        {
          open: "09:00",
          close: "18:00",
        },
      ],
      "6": [
        {
          open: "09:00",
          close: "12:00",
        },
        {
          open: "18:00",
          close: "21:00",
        },
      ],
    },
  },
  {
    key: "5",
    address: "East of Kailash, F92",
    shopName: "GK Coffee House",
    city: "Delhi",
    chargeStations: 2,
    active: true,
    businessHours: {
      "0": [
        {
          open: "09:00",
          close: "12:00",
        },
        {
          open: "18:00",
          close: "21:00",
        },
      ],
      "1": [
        {
          open: "09:00",
          close: "18:00",
        },
      ],
      "2": [
        {
          open: "09:00",
          close: "18:00",
        },
      ],
      "3": [
        {
          open: "09:00",
          close: "18:00",
        },
      ],
      "4": [
        {
          open: "09:00",
          close: "18:00",
        },
      ],
      "5": [
        {
          open: "09:00",
          close: "18:00",
        },
      ],
      "6": [
        {
          open: "09:00",
          close: "12:00",
        },
        {
          open: "18:00",
          close: "21:00",
        },
      ],
    },
  },
  {
    key: "6",
    address: "Lajpat Nagar 2, E32",
    shopName: "Starbucks Coffee",
    city: "Delhi",
    chargeStations: 9,
    active: false,
    businessHours: {
      "0": [
        {
          open: "09:00",
          close: "12:00",
        },
        {
          open: "18:00",
          close: "21:00",
        },
      ],
      "1": [
        {
          open: "09:00",
          close: "18:00",
        },
      ],
      "2": [
        {
          open: "09:00",
          close: "18:00",
        },
      ],
      "3": [
        {
          open: "09:00",
          close: "18:00",
        },
      ],
      "4": [
        {
          open: "09:00",
          close: "18:00",
        },
      ],
      "5": [
        {
          open: "09:00",
          close: "18:00",
        },
      ],
      "6": [
        {
          open: "09:00",
          close: "12:00",
        },
        {
          open: "18:00",
          close: "21:00",
        },
      ],
    },
  },
  {
    key: "7",
    address: "Saket, J23",
    shopName: "RK Electronics",
    city: "Delhi",
    chargeStations: 2,
    active: true,
    businessHours: {
      "0": [
        {
          open: "09:00",
          close: "12:00",
        },
        {
          open: "18:00",
          close: "21:00",
        },
      ],
      "1": [
        {
          open: "09:00",
          close: "18:00",
        },
      ],
      "2": [
        {
          open: "09:00",
          close: "18:00",
        },
      ],
      "3": [
        {
          open: "09:00",
          close: "18:00",
        },
      ],
      "4": [
        {
          open: "09:00",
          close: "18:00",
        },
      ],
      "5": [
        {
          open: "09:00",
          close: "18:00",
        },
      ],
      "6": [
        {
          open: "09:00",
          close: "12:00",
        },
        {
          open: "18:00",
          close: "21:00",
        },
      ],
    },
  },
  {
    key: "8",
    address: "East of Kailash, F92",
    shopName: "GK Coffee House",
    city: "Delhi",
    chargeStations: 2,
    active: true,
    businessHours: {
      "0": [
        {
          open: "09:00",
          close: "12:00",
        },
        {
          open: "18:00",
          close: "21:00",
        },
      ],
      "1": [
        {
          open: "09:00",
          close: "18:00",
        },
      ],
      "2": [
        {
          open: "09:00",
          close: "18:00",
        },
      ],
      "3": [
        {
          open: "09:00",
          close: "18:00",
        },
      ],
      "4": [
        {
          open: "09:00",
          close: "18:00",
        },
      ],
      "5": [
        {
          open: "09:00",
          close: "18:00",
        },
      ],
      "6": [
        {
          open: "09:00",
          close: "12:00",
        },
        {
          open: "18:00",
          close: "21:00",
        },
      ],
    },
  },
  {
    key: "9",
    address: "East of Kailash, F92",
    shopName: "GK Coffee House",
    city: "Delhi",
    chargeStations: 2,
    active: true,
    businessHours: {
      "0": [
        {
          open: "09:00",
          close: "12:00",
        },
        {
          open: "18:00",
          close: "21:00",
        },
      ],
      "1": [
        {
          open: "09:00",
          close: "18:00",
        },
      ],
      "2": [
        {
          open: "09:00",
          close: "18:00",
        },
      ],
      "3": [
        {
          open: "09:00",
          close: "18:00",
        },
      ],
      "4": [
        {
          open: "09:00",
          close: "18:00",
        },
      ],
      "5": [
        {
          open: "09:00",
          close: "18:00",
        },
      ],
      "6": [
        {
          open: "09:00",
          close: "12:00",
        },
        {
          open: "18:00",
          close: "21:00",
        },
      ],
    },
  },
  {
    key: "10",
    address: "Lajpat Nagar 2, E32",
    shopName: "Starbucks Coffee",
    city: "Delhi",
    chargeStations: 9,
    active: false,

    businessHours: {
      "0": [
        {
          open: "09:00",
          close: "12:00",
        },
        {
          open: "18:00",
          close: "21:00",
        },
      ],
      "1": [
        {
          open: "09:00",
          close: "18:00",
        },
      ],
      "2": [
        {
          open: "09:00",
          close: "18:00",
        },
      ],
      "3": [
        {
          open: "09:00",
          close: "18:00",
        },
      ],
      "4": [
        {
          open: "09:00",
          close: "18:00",
        },
      ],
      "5": [
        {
          open: "09:00",
          close: "18:00",
        },
      ],
      "6": [
        {
          open: "09:00",
          close: "12:00",
        },
        {
          open: "18:00",
          close: "21:00",
        },
      ],
    },
  },
  {
    key: "11",
    address: "Saket, J23",
    shopName: "RK Electronics",
    city: "Delhi",
    chargeStations: 2,
    active: true,
    businessHours: {
      "0": [
        {
          open: "09:00",
          close: "12:00",
        },
        {
          open: "18:00",
          close: "21:00",
        },
      ],
      "1": [
        {
          open: "09:00",
          close: "18:00",
        },
      ],
      "2": [
        {
          open: "09:00",
          close: "18:00",
        },
      ],
      "3": [
        {
          open: "09:00",
          close: "18:00",
        },
      ],
      "4": [
        {
          open: "09:00",
          close: "18:00",
        },
      ],
      "5": [
        {
          open: "09:00",
          close: "18:00",
        },
      ],
      "6": [
        {
          open: "09:00",
          close: "12:00",
        },
        {
          open: "18:00",
          close: "21:00",
        },
      ],
    },
  },
  {
    key: "12",
    address: "East of Kailash, F92",
    shopName: "GK Coffee House",
    city: "Delhi",
    chargeStations: 2,
    active: true,
    businessHours: {
      "0": [
        {
          open: "09:00",
          close: "12:00",
        },
        {
          open: "18:00",
          close: "21:00",
        },
      ],
      "1": [
        {
          open: "09:00",
          close: "18:00",
        },
      ],
      "2": [
        {
          open: "09:00",
          close: "18:00",
        },
      ],
      "3": [
        {
          open: "09:00",
          close: "18:00",
        },
      ],
      "4": [
        {
          open: "09:00",
          close: "18:00",
        },
      ],
      "5": [
        {
          open: "09:00",
          close: "18:00",
        },
      ],
      "6": [
        {
          open: "09:00",
          close: "12:00",
        },
        {
          open: "18:00",
          close: "21:00",
        },
      ],
    },
  },
  {
    key: "13",
    address: "East of Kailash, F92",
    shopName: "GK Coffee House",
    city: "Delhi",
    chargeStations: 2,
    active: true,
    businessHours: {
      "0": [
        {
          open: "09:00",
          close: "12:00",
        },
        {
          open: "18:00",
          close: "21:00",
        },
      ],
      "1": [
        {
          open: "09:00",
          close: "18:00",
        },
      ],
      "2": [
        {
          open: "09:00",
          close: "18:00",
        },
      ],
      "3": [
        {
          open: "09:00",
          close: "18:00",
        },
      ],
      "4": [
        {
          open: "09:00",
          close: "18:00",
        },
      ],
      "5": [
        {
          open: "09:00",
          close: "18:00",
        },
      ],
      "6": [
        {
          open: "09:00",
          close: "12:00",
        },
        {
          open: "18:00",
          close: "21:00",
        },
      ],
    },
  },
  {
    key: "14",
    address: "Lajpat Nagar 2, E32",
    shopName: "Starbucks Coffee",
    city: "Delhi",
    chargeStations: 9,
    active: false,
    businessHours: {
      "0": [
        {
          open: "09:00",
          close: "12:00",
        },
        {
          open: "18:00",
          close: "21:00",
        },
      ],
      "1": [
        {
          open: "09:00",
          close: "18:00",
        },
      ],
      "2": [
        {
          open: "09:00",
          close: "18:00",
        },
      ],
      "3": [
        {
          open: "09:00",
          close: "18:00",
        },
      ],
      "4": [
        {
          open: "09:00",
          close: "18:00",
        },
      ],
      "5": [
        {
          open: "09:00",
          close: "18:00",
        },
      ],
      "6": [
        {
          open: "09:00",
          close: "12:00",
        },
        {
          open: "18:00",
          close: "21:00",
        },
      ],
    },
  },
  {
    key: "15",
    address: "Saket, J23",
    shopName: "RK Electronics",
    city: "Delhi",
    chargeStations: 2,
    active: true,
    businessHours: {
      "0": [
        {
          open: "09:00",
          close: "12:00",
        },
        {
          open: "18:00",
          close: "21:00",
        },
      ],
      "1": [
        {
          open: "09:00",
          close: "18:00",
        },
      ],
      "2": [
        {
          open: "09:00",
          close: "18:00",
        },
      ],
      "3": [
        {
          open: "09:00",
          close: "18:00",
        },
      ],
      "4": [
        {
          open: "09:00",
          close: "18:00",
        },
      ],
      "5": [
        {
          open: "09:00",
          close: "18:00",
        },
      ],
      "6": [
        {
          open: "09:00",
          close: "12:00",
        },
        {
          open: "18:00",
          close: "21:00",
        },
      ],
    },
  },
  {
    key: "16",
    address: "East of Kailash, F92",
    shopName: "GK Coffee House",
    city: "Delhi",
    chargeStations: 2,
    active: true,
    businessHours: {
      "0": [
        {
          open: "09:00",
          close: "12:00",
        },
        {
          open: "18:00",
          close: "21:00",
        },
      ],
      "1": [
        {
          open: "09:00",
          close: "18:00",
        },
      ],
      "2": [
        {
          open: "09:00",
          close: "18:00",
        },
      ],
      "3": [
        {
          open: "09:00",
          close: "18:00",
        },
      ],
      "4": [
        {
          open: "09:00",
          close: "18:00",
        },
      ],
      "5": [
        {
          open: "09:00",
          close: "18:00",
        },
      ],
      "6": [
        {
          open: "09:00",
          close: "12:00",
        },
        {
          open: "18:00",
          close: "21:00",
        },
      ],
    },
  },
];

export const days = [
  { id: "0", name: "Sunday" },
  { id: "1", name: "Monday" },
  { id: "2", name: "Tuesday" },
  { id: "3", name: "Wednesday" },
  { id: "4", name: "Thursday" },
  { id: "5", name: "Friday" },
  { id: "6", name: "Saturday" },
];
