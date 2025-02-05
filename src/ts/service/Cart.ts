import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];


    add(item: Buyable): void {
        this._items.push(item);
    }

    totalPrice(): number {
        return this._items.reduce((sum, item) => sum + item.price, 0);
    }

    discountTotalPrice(discount: number): number {
        return this._items.reduce((sum, item) => sum + item.price * (1 - discount * 0.01), 0)
    }

    deleteItem(id: number): void{
        this._items = this._items.filter(item => item.id !==id);
    }

    get items(): Buyable[] {
        return [...this._items];
    }
}