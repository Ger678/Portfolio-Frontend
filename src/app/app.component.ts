import { Component, HostListener } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'portfolio';

  showPort: boolean= false;
  showAcerca: boolean=false;
  showExpe: boolean=false;
  showEdu: boolean=false;
  showSki: boolean=false;
  showPie: boolean=false;

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercentage = (scrollPosition / scrollHeight) * 100;
    console.log(scrollPercentage + "1")
    if (scrollPercentage >= 1) {
      this.showPort = true;      
    }
    if (scrollPercentage >= 15) {
      this.showAcerca = true;      
    }
    if (scrollPercentage >= 40) {
      this.showExpe = true;      
    }
    if (scrollPercentage >= 45) {
      this.showEdu = true; 
    }
    if (scrollPercentage >= 60) {
      this.showSki = true;      
    }
    if (scrollPercentage >= 75) {
      this.showPie = true;      
    }
    else{
      this.showPort = false;
    }
  }

}
