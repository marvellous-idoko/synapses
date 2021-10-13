import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

import { HomeComponent }   from './home/home.component';
import { WindowComponent }   from './window/window.component';
import { TrendingComponent }   from './trending/trending.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { MAXComponent }   from './max/max.component';
import { MaxPostComponent }   from './max-post/max-post.component';
import { RegisterComponent }   from './register/register.component';
import { UpdateProfileComponent }   from './update-profile/update-profile.component';
import { MaxLoginComponent }   from './max-login/max-login.component';

const routes: Routes = [
  { path: '', redirectTo: 'max', pathMatch: 'full' },
  {path: 'max', component:MAXComponent,
	children: [
	  { path: '', redirectTo: 'home', pathMatch: 'full' },
	  { path: 'trending', component: TrendingComponent },
	  { path: 'home', component: HomeComponent },
	  { path: 'window', component: WindowComponent },
	  { path: 'max-post', component: MaxPostComponent },
	  { path: 'register', component:  RegisterComponent },
	  { path: 'update-profile', component: UpdateProfileComponent },
	  { path: 'max-login', component: MaxLoginComponent },
	  { path: 'post-details/:id', component: PostDetailsComponent }
   ]
  }
  
  ];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule]
})
export class MaxRoutingModule { }
