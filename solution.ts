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
  const filteredItems = items.filter(item => item.rating >= 4.0);
  return filteredItems;
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
