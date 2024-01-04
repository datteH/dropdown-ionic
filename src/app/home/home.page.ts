import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SelectModalPage } from '../select-modal/select-modal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  options = [
    { label: 'Opción 1', value: 'opcion1' },
    { label: 'Opción 2', value: 'opcion2' },
    { label: 'Opción 3', value: 'opcion3' },
  ];
  filteredOptions = this.options;
  selectedOption: any = {};
  constructor(private modalController: ModalController) {}
  async openSelectModal() {
    const modal = await this.modalController.create({
      component: SelectModalPage,
      componentProps: {
        options: this.options
      }
    });
    modal.onWillDismiss().then((result) => {
      if (result.data) {
        this.selectedOption = result.data;
      }
    });
    return await modal.present();
  }
}