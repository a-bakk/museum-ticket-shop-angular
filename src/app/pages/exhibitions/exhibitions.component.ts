import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Exhibition } from '../../shared/models/Exhibition';
import { ExhibitionService } from '../../shared/services/exhibition.service';
@Component({
  selector: 'app-exhibitions',
  templateUrl: './exhibitions.component.html',
  styleUrls: ['./exhibitions.component.scss']
})
export class ExhibitionsComponent implements OnInit {

  exhibitions: Exhibition[] = [];
  @Output() exhibitionsEmitter: EventEmitter<Exhibition[]> = new EventEmitter<Exhibition[]>();
  // TODO do something with this

  constructor(private exhibitionService: ExhibitionService) { }

  ngOnInit(): void {
    this.readExhibitions();
  }

  readExhibitions() {
    this.exhibitionService.readAllExhibitions().subscribe((exhibitions: Exhibition[]) => {
      this.exhibitions = exhibitions;
    })
  }

}
