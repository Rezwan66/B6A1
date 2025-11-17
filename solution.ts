function formatValue(
  value: string | number | boolean
): string | number | boolean | undefined {
  if (typeof value === 'string') {
    return value.toUpperCase();
  } else if (typeof value === 'number') {
    return value * 10;
  } else if (typeof value === 'boolean') {
    return !value;
  }
  return undefined;
}

function getLength<T>(value: string | T[]): number | undefined {
  if (typeof value === 'string') {
    return value.length;
  } else if (Array.isArray(value)) {
    return value.length;
  }
  return undefined;
}

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}

function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  for (let i = 0; i < items.length; i++) {
    if (items[i].rating < 0 || items[i].rating > 5) {
      throw new Error('Rating must be between 0-5!');
    }
  }
  const filteredItems = items.filter(item => item.rating >= 4.0);
  const filteredItemsWithDecimalRating = filteredItems.map(item => ({
    title: item.title,
    rating: Number(item.rating.toFixed(1)),
  }));
  return filteredItemsWithDecimalRating;
}

type UserObject = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

function filterActiveUsers(users: UserObject[]): UserObject[] {
  const activeUsers = users.filter(user => user.isActive === true);
  return activeUsers;
}

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails(book: Book): void {
  console.log(
    `Title: ${book.title}, Author: ${book.author}, Published: ${
      book.publishedYear
    }, Available: ${book.isAvailable ? 'Yes' : 'No'}`
  );
}

function getUniqueValues<T>(array1: T[], array2: T[]): T[] {
  const uniqueArray: T[] = [];

  let uniqueIndex: number = 0;
  for (let i = 0; i < array1.length; i++) {
    uniqueArray[uniqueIndex] = array1[i];
    uniqueIndex++;
  }

  for (let i = 0; i < array2.length; i++) {
    let isDuplicate = false;

    for (let j = 0; j < uniqueIndex; j++) {
      if (uniqueArray[j] === array2[i]) {
        isDuplicate = true;
        break;
      }
    }

    if (!isDuplicate) {
      uniqueArray[uniqueIndex] = array2[i];
      uniqueIndex++;
    }
  }
  return uniqueArray;
}

interface ProductObject {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
}

function calculateTotalPrice(products: ProductObject[]): number {
  if (!products.length) {
    return 0;
  }

  const totalPrice = products.reduce((acc, prod) => {
    const { price, quantity, discount } = prod;
    const grossPrice = price * quantity;

    if (discount) {
      return (acc += grossPrice - (grossPrice * discount) / 100);
    } else {
      return (acc += grossPrice);
    }
  }, 0);

  return totalPrice;
}
