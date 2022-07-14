import { Component, OnInit, Input } from '@angular/core';
import { Skills } from 'src/app/models/skills';
import { SkillsService } from 'src/app/service/skills.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  /* skill: Skills[] = []; */

  @Input() idClick: number = 1;



  constructor(
        private skService: SkillsService) { }

  ngOnInit(): void {
/*     this.getSkill(); */
  }

  public getSkill():void {
    /* this.skService.getById(this.idClick).subscribe(
      data => {
        this.skill = data;
      },
      error => {
        console.log(error)
      }
    );
  } */

}
