import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';

@Component({
  selector: 'app-degrees-toggle',
  templateUrl: './degrees-toggle.component.html',
  styleUrls: ['./degrees-toggle.component.scss']
})
export class DegreesToggleComponent implements OnInit {

  @Output() toggleDegrees = new EventEmitter<boolean>();
  @Input() isCelsius: boolean;

  constructor() { }

  ngOnInit() {
  }

  onToggleDegrees(event: MatButtonToggleChange): void {
    const isCelcius: boolean = event.value;
    this.toggleDegrees.emit(isCelcius);
  }


}
