import { Pipe, PipeTransform } from '@angular/core';
import { ExhibitionService } from '../services/exhibition.service';
import { Exhibition } from '../models/Exhibition';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Pipe({
  name: 'exhibitionConvert'
})
export class ExhibitionConvertPipe implements PipeTransform {

  currentExhibition?: Exhibition;

  constructor(private exhibitionService: ExhibitionService) { }

  transform(value: string, ...args: unknown[]): Observable<string> {
    return this.exhibitionService.readExhibitionById(value).pipe(
      map((exhibition) => {
        this.currentExhibition = exhibition[0];
        return this.currentExhibition?.name as string;
      })
    );
  }

}
