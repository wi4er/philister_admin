import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-content-page',
  templateUrl: './content-page.component.html',
  styleUrls: ['./content-page.component.css']
})
export class ContentPageComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
  ) {
    this.blockId = +this.route.snapshot.paramMap.get('id')!;
  }

  blockId: number;

  ngOnInit(): void {
    // this.blockId = +this.route.snapshot.paramMap.get('id')!;
  }

}
