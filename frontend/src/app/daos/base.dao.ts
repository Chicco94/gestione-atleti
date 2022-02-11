import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Base } from '../models/base.model';
import { map } from 'rxjs/operators';


export class BaseDao<Model extends Base> {
	//protected url: string = 'http://test.ubware.it:4400/api/';
	protected url: string = 'http://192.168.50.185:4400/api/';
	public download_completed: boolean;

	constructor(
		private http:HttpClient,
		private type:{new():Model},
		private suburl:string) {}


	public get():Observable<Model[]>{
		return this.http.get(this.url+this.suburl)
			.pipe(
				map( (data:any[]) => data.map(item => new this.type().deserialize(item)))
			)
	}

	public post(object:Model):Observable<Model>{
		return this.http.post(this.url+this.suburl,{data:object})
			.pipe(
				map( (data:any) => new this.type().deserialize(data))
			)
	}
}
