const score:Array<number>=[]
const names:Array<string>=[]

function identity <T>(val:T):T{
    return val;
}

// You can use generic type parameters in functions for flexible input/output types.
function getArray<T>(items: T[]): T[] {
  return new Array<T>().concat(items);
}

const numberArray = getArray<number>([1, 2, 3]);
const stringArray = getArray<string>(["A", "B", "C"]);

//Generics can make interfaces flexible.
interface Box<T> {
  content: T;
}

const stringBox: Box<string> = { content: "Hello" };
const numberBox: Box<number> = { content: 42 };


//Generics can also be used with classes.
class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data = this.data.filter(i => i !== item);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Hello");
textStorage.addItem("World");
textStorage.removeItem("Hello");
console.log(textStorage.getItems()); // ["World"]
