import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-allenamenti',
  templateUrl: './allenamenti.component.html',
  styleUrls: ['./allenamenti.component.scss']
})
export class AllenamentiComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  public newAllenamento(){
    // creo il nuovo allenamento
    let id = 4;
    this.router.navigate(['allenamento',id]);
  }

}
