import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'search'
})
export class SearchPipe implements PipeTransform {
	/**
	 * @description Data una lista di elementi omogenei, degli attributi degli elementi ed una stringa da cercare ritorna tutti gli elementi della lista passata in cui l'elemento da cercare compare tra gli attributi indicati
	 * @param value lista di elementi omogenei
	 * @param keys nomi degli attributi tra cui cercare divisi da ","
	 * @param term stringa da ricercare
	 * @returns lista degli elementi in cui compare la stringa cercata negli attributi indicati
	 */
	public transform(value:any[], keys: string, term: string) {
		if (!term) return value;
		return (value || []).filter(item => keys.split(',').some(key => item.hasOwnProperty(key) && String(item[key]).toLowerCase().includes(term.toLowerCase())));

	}
}