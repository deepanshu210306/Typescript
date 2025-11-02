interface user {
  readonly dbid: number;
  email: string;
  id: number;
  googleid?: string;
}
// reopening of the interface , not possible in type
interface user {
  github: string;
}
const deep: user = { dbid: 11, email: "ssjjd", id: 79, github: "hjkkhhkj" };
