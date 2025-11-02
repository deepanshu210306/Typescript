// this means the tuple will have length of 3 and these data types in this order
let user: [number, string, boolean];
user = [1, "ab", true];

// but there is something that can give error
// functions like .push() can be used in tuples which will give error

const abn: [number, string] = [1, "asdfg"];
abn.push(10); // error
