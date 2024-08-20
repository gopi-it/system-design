import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutocompleteRoutingModule } from './autocomplete-routing.module';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AutocompleteComponent],
  imports: [CommonModule, FormsModule, AutocompleteRoutingModule],
})
export class AutocompleteModule {}
