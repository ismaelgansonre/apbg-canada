export class Objectifs {
    title: string;
    description: string;
    objectifs: Objectifs[];
  
    constructor(title: string, description: string) {
      this.title = title;
      this.description = description;
      this.objectifs = [];
    }
  }
  