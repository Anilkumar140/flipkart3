import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Deal } from '../deal';
// We haven't defined these services yet
// import { AuthService } from '../auth.service';
import { DealService } from '../deal.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-public-deals',
  // We'll use an external file for both the CSS styles and HTML view
  templateUrl: 'private-deals.component.html',
  styleUrls: ['private-deals.component.css']
})
export class  PrivateDealsComponent implements OnInit, OnDestroy {
  dealsSub: Subscription;
  privateDeals: Deal[];
  error: any;
  loading:boolean=true;
  // Note: We haven't implemented the Deal or Auth Services yet.
  constructor(
    public dealService: DealService,
    public authService: AuthService
    // public authService: AuthService
  ) { }

  // When this component is loaded, we'll call the dealService and get our public deals.
  ngOnInit() {
    this.dealsSub = this.dealService
    .getPrivateDeals()
    .subscribe((data: any) => {
      console.log(data);
      this.privateDeals = data;
      this.loading=false;
    });
}

  ngOnDestroy() {
    this.dealsSub.unsubscribe();
    
  }
}