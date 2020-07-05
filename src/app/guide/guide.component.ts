import { Component } from '@angular/core';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.sass']
})
export class GuideComponent {
  title = 'AngularMaterialCourse';
  showSpinner = false;
  barProgressValue = 10;
  optionA = {
    name: 'option A',
    hobby: 'football'
  };
  optionB = {
    name: 'option B',
    hobby: 'basketball'
  };

  loadData() { 
    this.showSpinner = true;
    setTimeout(() => { this.showSpinner = false; }, 3000)
  }
  incrementBarProgress() {
    if ((this.barProgressValue + 10) >= 100) {
      this.barProgressValue = 0;
    }
    else {
      this.barProgressValue += 10;
    }
  }

}
