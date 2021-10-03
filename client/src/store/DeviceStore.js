import { makeAutoObservable } from 'mobx';

export default class DeviceStore {
  constructor() {
    this._types = [
      { id: 1, name: 'Холодильники' },
      { id: 2, name: 'Смартфоны' },
      { id: 3, name: 'Телевизоры' },
      { id: 4, name: 'Ноутбуки' },
    ];
    this._brands = [
      { id: 1, name: 'Samsung' },
      { id: 2, name: 'Apple' },
    ];
    this._device = [
      {
        id: 1,
        name: 'Iphone 12 pro',
        price: 25000,
        rating: 5,
        img: 'https://www.purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png',
      },
      {
        id: 2,
        name: 'Iphone 12 pro',
        price: 25000,
        rating: 5,
        img: 'https://www.purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png',
      },
      {
        id: 3,
        name: 'Iphone 12 pro',
        price: 25000,
        rating: 5,
        img: 'https://www.purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png',
      },
      (this._selectedType = {}),
    ];
    // func для слежения за переменными
    // в случае изменения - rerender
    makeAutoObservable(this);
  }

  // setter
  setTypes(types) {
    this._types = types;
  }
  setBrands(brands) {
    this._brands = brands;
  }
  setDevices(devices) {
    this._devices = devices;
  }
  setSelectedType(type) {
    // this.setPage(1);
    this._selectedType = type;
  }
  //getter
  get types() {
    return this._types;
  }
  get brands() {
    return this._brands;
  }
  get devices() {
    return this._devices;
  }
  get selectedType() {
    return this._selectedType;
  }
}
