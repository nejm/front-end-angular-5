export class Stat{
  id:number;
  name:string;
  description:string;
  data:string;
  createdBy:string;
  creationDate:string;
  type:string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
