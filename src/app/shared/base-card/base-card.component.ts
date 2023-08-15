import {Component, Inject, OnInit} from '@angular/core';
import {BASE_CARD_CONFIG_TOKEN} from "../tokens/base-card-config-token";
import {BaseCardConfig} from "./types/BaseCardConfig";

@Component({
  selector: 'app-base-card',
  templateUrl: './base-card.component.html',
  styleUrls: ['./base-card.component.scss']
})
export class BaseCardComponent implements OnInit {

  constructor(
    @Inject(BASE_CARD_CONFIG_TOKEN)
    public config: BaseCardConfig[]
  ) {
  }

  ngOnInit(): void {
  }

}
