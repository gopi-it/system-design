import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeViewRoutingModule } from './tree-view-routing.module';
import { TreeViewComponent } from './tree-view/tree-view.component';
import { TreeItemComponent } from './tree-item/tree-item.component';

@NgModule({
  declarations: [TreeViewComponent, TreeItemComponent],
  imports: [CommonModule, TreeViewRoutingModule],
})
export class TreeViewModule {}
