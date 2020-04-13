import { Resource } from './resource';
import { ResposeUnit } from './response-unit';

export interface ResourceResponse  extends ResposeUnit {
    data: Resource[];
}
