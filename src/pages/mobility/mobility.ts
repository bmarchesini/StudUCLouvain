/*
    Copyright (c)  Université catholique Louvain.  All rights reserved
    Authors :  Daubry Benjamin & Marchesini Bruno
    Date : July 2018
    This file is part of UCLCampus
    Licensed under the GPL 3.0 license. See LICENSE file in the project root for full license information.

    UCLCampus is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    UCLCampus is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with UCLCampus.  If not, see <http://www.gnu.org/licenses/>.
*/
import { NavParams } from '@ionic/angular';

import { Component } from '@angular/core';
import { Market } from '@ionic-native/market/ngx';

import { UtilsService } from '../../services/utils-services/utils-service';

@Component({
  selector: 'page-mobility',
  templateUrl: 'mobility.html'
})
export class MobilityPage {
  public title: any;
  carpoolingPage;
  busPage;
  trainPage;

  constructor(
    public market: Market,
    public navParams: NavParams,
    public utilsService: UtilsService
  ) {
    this.title = this.navParams.get('title');
    this.carpoolingPage = this.utilsService.getPageObject(
      'Carpooling',
      this.utilsService.getText('MOBI', 'COVOIT'),
      'id1143545052', 'be.thomashermine.prochainbus',
      'commutynet://', 'https://app.commuty.net/sign-in'
    );
    this.busPage = this.utilsService.getPageObject(
      'Bus', 'NextRide',
      'id568042532', 'net.commuty.mobile',
      'nextride://', 'https://nextride.be/timetables'
    );
    this.carpoolingPage = this.utilsService.getPageObject(
      'Train', 'SNCB',
      'id403212064', 'e.hafas.android.sncbnmbs',
      'sncb://', 'http://www.belgianrail.be/fr/service-clientele/outils-voyage.aspx'
    );
  }
}
