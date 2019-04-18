export class Task {
  
    constructor(
      public id: number, 
      public titulo: string,
      public descricao?: string,
      public status?: boolean,
      public data?: string
    ){
    }
  }