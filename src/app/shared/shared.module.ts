import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// - C_shared
import { HeaderComponent } from './header/header.component';
import { SidebarChatComponent } from './sidebar-chat/sidebar-chat.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    SidebarChatComponent,
    BreadcrumbsComponent,
    FooterComponent,
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    SidebarChatComponent,
    BreadcrumbsComponent,
    FooterComponent,
  ],
  imports: [ CommonModule ]
})
export class SharedModule { }
