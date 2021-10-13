import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MaxRoutingModule }     from './max-routing.module';
import { AngularFireModule } from 'angularfire2'
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AppComponent } from './app.component';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { HttpClientModule }    from '@angular/common/http';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';
import { HomeComponent } from './home/home.component';
import { TrendingComponent } from './trending/trending.component';
import { WindowComponent } from './window/window.component';
import { SearchComponent } from './search/search.component';
import { NavComponent } from './nav/nav.component';
import {Routes, RouterModule, Router} from '@angular/router';
import { MAXComponent } from './max/max.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { MaxPostComponent } from './max-post/max-post.component';
import { PostPaneComponent } from './post-pane/post-pane.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { RegisterComponent } from './register/register.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { MaxLoginComponent } from './max-login/max-login.component';

@NgModule({
  declarations: [
    AppComponent,
	  HomeComponent,
    TrendingComponent,
    WindowComponent,
    SearchComponent,
    NavComponent,
    MAXComponent,
    SideBarComponent,
    MaxPostComponent,
    PostPaneComponent,
    PostDetailsComponent,
    RegisterComponent,
    UpdateProfileComponent,
    MaxLoginComponent,
	],
  imports: [
  BrowserModule,
  ReactiveFormsModule,
  FormsModule,
  HttpClientModule,
  BrowserAnimationsModule,
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
  MaxRoutingModule,
  AngularFireAuthModule,
  AngularFireModule.initializeApp(environment.firebase),
  AngularFireDatabaseModule
	],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }