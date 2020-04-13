import { DataUnit } from './data-unit';

export interface Resource extends DataUnit {
    name: string;
    year: string;
    color: string;
    pantone_value: string;
}
