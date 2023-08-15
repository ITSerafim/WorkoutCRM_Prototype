import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from './components/sidebar/sidebar.module';
import { HttpClientModule } from '@angular/common/http';
import { TimetableModule } from './pages/timetable/timetable.module';
import { NavbarModule } from './components/navbar/navbar.module';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { GLOBAL_HTTP_INTERCEPTOR_PROVIDER } from './shared/providers/http-interceptor.provider';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NoopAnimationsModule,
    ButtonModule,
    SidebarModule,
    TimetableModule,
    NavbarModule,
    ToastModule,
  ],
  providers: [MessageService, GLOBAL_HTTP_INTERCEPTOR_PROVIDER],
  bootstrap: [AppComponent],
})
export class AppModule {}
