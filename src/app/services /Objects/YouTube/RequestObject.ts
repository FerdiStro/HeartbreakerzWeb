import {InfoObject} from "./InfoObject";

export interface RequestObject{
  kind:string,
  etag:string,
  items:InfoObject[]
}
