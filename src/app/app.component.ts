import { VfRemoteService } from "./vf-remote.service";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:  [VfRemoteService]
})

export class AppComponent {
	title : String;
	accounts : Array<object>;
	constructor(private vfRemote: VfRemoteService) {

	}

	ngOnInit() {
		let fn = this.vfRemote["AngularSFController"]["helloAngular"]
		fn().then(result => { this.title = result; }).catch(reason => console.log(reason));

		let newFn = this.vfRemote["AngularSFController"]["getAccounts"]
		newFn().then(result => {
			console.log('result', result);
			this.accounts = result; 
		}).catch(reason => console.log(reason));
	}	 
}