import { Component, OnInit, OnDestroy, Host } from '@angular/core';
import { Subscription } from 'rxjs';
import { Deal } from '../deal';
// We haven't defined these services yet
// import { AuthService } from '../auth.service';
import { DealService } from '../deal.service';
import { SpinnerService } from '../spinner-service.service';


@Component({
  selector: 'app-public-deals',
  // We'll use an external file for both the CSS styles and HTML view
  templateUrl: 'public-deals.component.html',
  styleUrls: ['public-deals.component.css']
})
export class PublicDealsComponent implements OnInit, OnDestroy {
  dealsSub: Subscription;
  publicDeals: Deal[];
  error: any;
  loading: boolean=true;
  // Note: We haven't implemented the Deal or Auth Services yet.
  constructor(
    public dealService: DealService,
    public spinnerService: SpinnerService,
    
  
    // public authService: AuthService
  ) { }

  // When this component is loaded, we'll call the dealService and get our public deals.
  ngOnInit() {
  
    this.dealsSub = this.dealService
    .getPublicDeals()
    .subscribe((data: any) => {
      console.log(data);
      this.publicDeals = data;
    this.loading=false;
    });
}

  ngOnDestroy() {
    this.dealsSub.unsubscribe();
    
  }
}