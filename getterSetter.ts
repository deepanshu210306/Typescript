class nigga {
  private _coursecount: number = 1;
  constructor(public email: string, private name: string) {}
  get getEmail(): string {
    return "";
  }
  get coursecount(): number {
    return this._coursecount
  }
  set coursecount(coursenum){
    coursenum=2;
  }
}
class nigger extends nigga{
    protected hi:number=1 // can be accessed in any inherited class
}