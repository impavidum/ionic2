import { Pipe, PipeTransform } from '@angular/core';

/*
    A pipe that filters out items from a list that do not contain the same value as the provided string parameter.
*/
@Pipe({
    name: 'filter'
})

export class FilterPipe implements PipeTransform {

    transform(items: any[], field : string, value : string): any[] {

        // No Items
        if (!items) return [];

        // There are items so check for lowercase matches and return
        return items.filter(it => it[field].toLowerCase().indexOf(value.toLowerCase()) !== -1);
    }
}
