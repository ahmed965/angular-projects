import { Component } from '@angular/core';
import { Goal } from '../goal';
import { GOALS } from '../mocks-goals';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css'],
})
export class GoalsComponent {
  goals = GOALS;
  selectedGoal?: Goal;
  onShowDetail(goal: Goal): void {
    this.selectedGoal = goal;
  }
}
