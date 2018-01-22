import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ProductManagerService } from './services/product-manager.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatExpansionModule,
  MatCardModule,
} from '@angular/material';

import { AppComponent } from './app.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { ProductEditorComponent } from './views/common/product-editor/product-editor.component';
import { ProductCreatorComponent } from './views/common/product-creator/product-creator.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProductEditorComponent,
    ProductCreatorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatExpansionModule,
    MatCardModule,
  ],
  providers: [ProductManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
