import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cat-fact-modal',
  templateUrl: './cat-fact-modal.component.html',
  styleUrls: ['./cat-fact-modal.component.scss']
})
export class CatFactModalComponent implements OnInit {
  @Output() closeModal = new EventEmitter<void>();
  
  @Input() factReceived: string;

  constructor() { }

  ngOnInit(): void {
  }


  fecharModal(){
    this.closeModal.emit();
  }

}
