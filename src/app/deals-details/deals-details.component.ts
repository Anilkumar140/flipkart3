import { Component, OnInit } from '@angular/core';
import { DealService } from '../deal.service';
import { Deal } from '../deal';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-deals-details',
  templateUrl: './deals-details.component.html',
  styleUrls: ['./deals-details.component.css']
})
export class DealsDetailsComponent implements OnInit {
  publicDeals: Deal[];
  data1: any;
  loading :boolean=true;
  
  constructor(public dealService:DealService,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(data=>{
      console.log(data.get('id'));
      this.data1=data.get('id');
      console.log(this.data1);
    })
    this.dealService
    .getPublicDeals()
    .subscribe((data: any) => {
      console.log(data);
      this.publicDeals = data;
      this.loading=false;
    
    });
}

  }



