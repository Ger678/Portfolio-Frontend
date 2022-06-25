import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() url: string= " ";
  @Input() title: string = " ";
  @Input() subtitle: string = " ";
  @Input() porcentaje: number= 0

  @Output() onModal = new EventEmitter();

  constructor( public activeModal : NgbModal,
    ) { }

  ngOnInit(): void {
  }

   openModal(url: string, title: string, subtitle: string, porcentaje: number): void {
    this.url = url;
    this.title = title;
    this.subtitle = subtitle;
    this.porcentaje = porcentaje;
    this.onModal.emit();
  }


}
