import { Component, OnInit } from '@angular/core';
import { Objectifs } from '../../model/Objectifs';


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  objectifs: Objectifs[] =[]

  constructor() { }

  ngOnInit() {
    fetch('/assets/Data/objectifs.json')
      .then(response => response.json())
      .then(data => {
        this.objectifs = data.objectifs.map((obj: { title: string; description: string; }) => new Objectifs(obj.title, obj.description));
      });
  }
}
