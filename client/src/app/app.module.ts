import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDatepickerModule,MatButtonModule, MatCardModule, MatInputModule, MatNativeDateModule,MatListModule,
   MatToolbarModule,MatPaginatorModule, MatButtonToggleModule,MatGridListModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {MatSelectModule} from '@angular/material/select';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatTableModule} from '@angular/material/table';
import {MatExpansionModule} from '@angular/material/expansion';
import {ClassificationService} from './shared/classification/classification.service';
import { MyFilterPipePipe } from './my-filter-pipe.pipe';
import { PreorderComponent } from './preorder/preorder.component';
import { PreorderService } from './shared/preorder/preorder.service';
import { LoginService } from './shared/login/login.service';
import { LoginComponent } from './login/login.component';
import { ShowPreorderComponent } from './show-preorder/show-preorder.component';
import { StockService } from './shared/stock/stock.service';
import { RegisterService } from './shared/register/register.service';
import { StockComponent } from './stock/stock.component';
import { RegisterComponent } from './register/register.component';
import { MatTabsModule } from '@angular/material/tabs';
import { ShippingComponent } from './shipping/shipping.component';
import {ShippingService} from './shared/shipping/shipping.service';
import { ShowShippingslipComponent } from './show-shippingslip/show-shippingslip.component';
import { ClassificationComponent } from './classification/classification.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { ReviewComponent } from './review/review.component';
import { ReviewService} from './shared/review/review.service';
import { TranferComponent } from './tranfer/tranfer.component';
import { TranferService } from './shared/tranfer/tranfer.service';
const appRoutes: Routes = [
  {path: 'classification', component: ClassificationComponent},
  {path: 'shopping', component: ShoppingComponent},
  {path: 'preorder/:product', component: PreorderComponent},
  {path: 'show-preorder', component: ShowPreorderComponent},
  {path: 'Stock', component: StockComponent},
  {path: 'Register', component: RegisterComponent},
  {path: 'shipping', component: ShippingComponent},
  {path: 'showship', component: ShowShippingslipComponent},
  {path: 'review', component: ReviewComponent },
  {path: 'tranfer', component: TranferComponent },
  {path: 'login', component: LoginComponent },
  {path: '',redirectTo:'login',pathMatch:'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    PreorderComponent,
    ClassificationComponent,
    ShoppingComponent,
    LoginComponent,
    MyFilterPipePipe,
    ShowPreorderComponent,
    StockComponent,
    RegisterComponent,
    ShippingComponent,
    ShowShippingslipComponent,
    ReviewComponent,
    TranferComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    FormsModule,
    MatSelectModule,
    MatAutocompleteModule,
    RouterModule.forRoot(appRoutes),
    MatInputModule,
    MatTableModule,
    MatExpansionModule,
    MatPaginatorModule,
    MatGridListModule,
    MatTabsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonToggleModule, 
  ],
  providers: [ClassificationService,LoginService,PreorderService,StockService, RegisterService,ShippingService,ReviewService,TranferService],
  bootstrap: [AppComponent]
})
export class AppModule { }
