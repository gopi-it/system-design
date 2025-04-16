import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrl: './switch.component.scss',
})
export class SwitchComponent {
  toDoItems: string[] = ['default'];
  toDoForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.toDoForm = this.fb.group({
      taskName: [],
    });
  }

  addTask() {
    this.toDoItems.push(this.toDoForm.value.taskName);
    this.toDoForm.reset();
  }
}
