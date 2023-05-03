export class Exhibition {
  id: string;
  name: string;
  openFrom: string;
  description: string;
  descriptionLength: number;
  imageResource: string;

  constructor(id: string = '', name: string = '', openFrom: string = '', description: string = '', descriptionLength: number = 0, imageResource: string = '') {
    this.id = id;
    this.name = name;
    this.openFrom = openFrom;
    this.description = description;
    this.descriptionLength = descriptionLength;
    this.imageResource = imageResource;
  }
}
