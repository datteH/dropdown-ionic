import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-select-modal',
  templateUrl: './select-modal.page.html',
  styleUrls: ['./select-modal.page.scss'],
})
export class SelectModalPage {
  @Input() options: any[] = [];
  filteredOptions: any[] = [];
  searchTerm: string = '';
  constructor(private modalController: ModalController) { }
  ionViewWillEnter() {
    this.filteredOptions = this.options;
  }
  dismiss(selectedOption: any) {
    this.modalController.dismiss(selectedOption);
  }
  searchOptions() {
    this.filteredOptions = this.options.filter(option =>
      option.label.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
  
}