import { makeAutoObservable } from "mobx";

export default class DeviceStore {
  constructor() {
    this._types = [
      { id: 1, name: "Xолодильник" },
      { id: 2, name: "Tелевизор" },
      { id: 3, name: "Cмартфон" },
      { id: 4, name: "Ноутбук " },
    ];

    this._brands = [
      { id: 1, name: "Samsung" },
      { id: 2, name: "Apple" },
      { id: 2, name: "Lenova" },
      { id: 2, name: "Asus" },
    ];

    this._devices = [
      {
        id: 1,
        name: "Iphone 12 pro",
        price: 500,
        rating: 5,
        img: "https://placeimg.com/640/480/tech",
      },
      {
        id: 2,
        name: "Iphone 13 pro",
        price: 500,
        rating: 5,
        img: "https://placeimg.com/640/480/tech",
      },
      {
        id: 3,
        name: "Iphone 14 pro",
        price: 500,
        rating: 5,
        img: "https://placeimg.com/640/480/tech",
      },
      {
        id: 4,
        name: "Iphone 15 pro",
        price: 500,
        rating: 5,
        img: "https://placeimg.com/640/480/tech",
      },  {
        id: 5,
        name: "Iphone 15 pro",
        price: 500,
        rating: 5,
        img: "https://placeimg.com/640/480/tech",
      },  {
        id: 6,
        name: "Iphone 15 pro",
        price: 500,
        rating: 5,
        img: "https://placeimg.com/640/480/tech",
      },
    ];

    this._selectedType = {};
    this._selectedBrand = {};
    makeAutoObservable(this);
  }

  setTypes(types) {
    this._isAuth = types;
  }
  setBrands(brands) {
    this._isAuth = brands;
  }

  setDevices(devices) {
    this._devices = devices;
  }
  setSelectedType(type) {
    this._selectedType = type;
  }
  setSelectedBrand(brand) {
    this._selectedBrand = brand;
  }

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
  get SelectedBrand() {
    return this._selectedBrand;
  }
}
