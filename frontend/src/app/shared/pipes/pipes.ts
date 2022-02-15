import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filter' })
export class FilterPipe implements PipeTransform {
	transform(array: Object[],filterFunction:(o:Object)=>boolean,...args: any[]) {
		return array.filter(item => filterFunction(item));
	}
}


@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  public transform(value:any[], keys: string, term: string) {
    if (!term) return value;
    return (value || []).filter(item => keys.split(',').some(key => item.hasOwnProperty(key) && new RegExp(term, 'gi').test(item[key])));

  }
}


@Pipe({
	name: 'enumToArray'
  })
  export class EnumToArrayPipe implements PipeTransform {
	transform(data: Object) {
		if (data === undefined) return [];
		return  Object.keys(data);
	}
  }