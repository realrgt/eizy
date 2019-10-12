import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: 'filter.component.html'
})
export class FilterComponent {

  selected: string;

  @Output() emitter = new EventEmitter();

  options = ['matutino', 'diurno', 'noturno'];

  constructor() {}

  onSelected() {
    this.emitter.emit(this.selected);
  }

}
