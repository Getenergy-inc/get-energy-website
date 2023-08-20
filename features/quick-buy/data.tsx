import GetElectricity from "./screens/get-electricity";
import GetData from "./screens/get-data";
import GetAirtime from "./screens/get-airtime";

export const buttons = [
  {
    _id: 'quick-buy-1',
    title: 'GetData',
    screen: 0
  },
  {
    _id: 'quick-buy-2',
    title: 'GetAirtime',
    screen: 1
  },
  {
    _id: 'quick-buy-3',
    title: 'GetElectricity',
    screen: 2
  }
];

export const screens = [
  <GetData />,
  <GetAirtime />,
  <GetElectricity />
]
