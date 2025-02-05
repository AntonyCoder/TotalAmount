import Cart from '../service/Cart';
import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('Проверка на добавление элемента', () => {
  const cart = new Cart();

  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2500, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));

  expect(cart.items).toEqual([{ id: 1001, name: 'War and Piece', author: 'Leo Tolstoy', price: 2500, pages: 1225 }, { id: 1008, name: 'Meteora', author: 'Linkin Park', price: 900 }])
})

test('Проверка на расчет общей стоимости корзины', () => {
  const cart = new Cart();

  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2500, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));

  expect(cart.totalPrice()).toEqual(3400);
})

test('Проверка на расчет общей стоимости корзины со скидкой', () => {
  const cart = new Cart();

  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2500, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));

  expect(cart.discountTotalPrice(15)).toEqual(2890);
})

test('Проверка на удаление элемента из корзины по id', () => {
  const cart = new Cart();

  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2500, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.deleteItem(1001)

  expect(cart.items).toEqual([{ id: 1008, name: 'Meteora', author: 'Linkin Park', price: 900 }]);
})