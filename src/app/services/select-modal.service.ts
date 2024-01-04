import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SelectModalPage } from '../select-modal/select-modal.page';

@Injectable({
  providedIn: 'root'
})
export class SelectModalService {
  constructor(private modalController: ModalController) { }
  async openSelectModal(options: any[]): Promise<any> {
    const modal = await this.modalController.create({
      component: SelectModalPage,
      componentProps: {
        options: options
      }
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    return data;
  }
}