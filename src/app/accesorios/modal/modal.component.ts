import { Component, OnInit, Input } from '@angular/core';
import { Skills } from 'src/app/models/skills';
import { SkillsService } from 'src/app/service/skills.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  public skill!: Skills;

  @Input() itemId: number = 1;
  @Input() icono!: string;
  @Input() nombre!: string;
  @Input() descripcion!: string;
  @Input() fotos!: string;
  @Input() porcentaje!: number;
  @Input() showDiv: boolean = false;
  numero: number = this.itemId;

  constructor(private skService: SkillsService) {}

  ngOnInit(): void {}

  public getSkill(): void {
    this.skService.getById(this.itemId).subscribe(
      (data) => {
        this.skill = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
