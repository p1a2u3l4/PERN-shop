import { makeAutoObservable } from "mobx";

export default class GadgetsStore {
    constructor() {
        this._gadgetTypes = [
            {id: 1, name: 'смартфоны'},
            {id: 2, name: 'ноутбуки'}
        ];
        this._brands = [
            {id: 1, name: 'Apple'},
            {id: 2, name: 'LG'}
        ];
        this._devices = [
            {id: 1, name: 'Apple IPhone 12', rating: 4},
            {id: 2, name: 'LG Nexus 4', rating: 4},
            {id: 3, name: 'Xiaomi Redmi Note 8', rating: 4},
            {id: 4, name: 'Lenovo 2281337', rating: 2}
        ]
        this._selectedType = {};
        this._selectedBrand = {};

        makeAutoObservable(this);
    }

    setGadgetsTypes(types) {
        this._gadgetTypes = types;
    }

    setBrands(brands) {
        this._brands = brands;
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

    get gadgetTypes() {
        return this._gadgetTypes;
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

    get selectedBrand() {
        return this._selectedBrand;
    }
}
