import { Component } from '@angular/core';
import { TreeNode } from '../models/tree.model';

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrl: './tree-view.component.scss',
})
export class TreeViewComponent {
  public treeData: TreeNode[] = [
    {
      id: 1,
      name: 'Root 1',
      children: [
        {
          id: 2,
          name: 'Child 1.1',
          children: [
            {
              id: 3,
              name: 'Grandchild 1.1.1',
            },
            {
              id: 4,
              name: 'Grandchild 1.1.2',
            },
          ],
        },
        {
          id: 5,
          name: 'Child 1.2',
        },
      ],
    },
    {
      id: 6,
      name: 'Root 2',
      children: [
        {
          id: 7,
          name: 'Child 2.1',
        },
        {
          id: 8,
          name: 'Child 2.2',
          children: [
            {
              id: 9,
              name: 'Grandchild 2.2.1',
            },
          ],
        },
      ],
    },
  ];
}
