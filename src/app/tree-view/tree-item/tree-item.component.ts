import { Component, computed, input, signal } from '@angular/core';
import { TreeNode } from '../models/tree.model';

@Component({
  selector: 'app-tree-item',
  templateUrl: './tree-item.component.html',
  styleUrl: './tree-item.component.scss',
})
export class TreeItemComponent {
  public expand = signal(true);
  public treeNode = input.required<TreeNode>();

  public labelValue = computed<string>(() => {
    return this.expand() ? 'Hide' : 'Show';
  });

  public toggleView(): void {
    this.expand.update((s) => !s);
  }
}
