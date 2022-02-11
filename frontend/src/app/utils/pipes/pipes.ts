import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filter' })
export class FilterPipe implements PipeTransform {
	transform(array: Object[],filterFunction:(o:Object)=>boolean,...args: any[]) {
		return array.filter(item => filterFunction(item));
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