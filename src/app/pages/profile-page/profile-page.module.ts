import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePageComponent } from './profile-page.component';
import { RouterModule } from '@angular/router';
import { ChipsModule } from 'primeng/chips';
import { ButtonModule } from 'primeng/button';
import { UserInfoFormComponent } from './components/user-info-form/user-info-form.component';
import { UserStatisticsFormComponent } from './components/user-statistics-form/user-statistics-form.component';
import { createDefaultRoute } from 'src/app/shared/utils/create-default-route';
import { FieldsetModule } from 'primeng/fieldset';

@NgModule({
  declarations: [
    ProfilePageComponent,
    UserInfoFormComponent,
    UserStatisticsFormComponent,
  ],
  imports: [
    RouterModule.forChild(createDefaultRoute(ProfilePageComponent)),
    CommonModule,
    ChipsModule,
    ButtonModule,
    FieldsetModule,
  ],
})
export class ProfilePageModule {}
