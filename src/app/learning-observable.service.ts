import { Injectable } from '@angular/core'
import { Http } from '@angular/http'

@Injectable()

export class LearningObservable {

    public constructor(private http: Http) {

        // criando o objeto observador
        let observer = {
            next: function(newData){
                console.log('Chamou o método next e passou o parâmetro newData: ', newData)
            },
            error: function(errorData){
                console.log('Chamou o método error e passou o parâmetro errorData: ', errorData)
            },
            complete: function(){
                console.log('Chamou o método complete e encerrou.')
            }
        }

        // Criando um objeto observado e passando um observador como parâmetro        
        // this.http.get("api/tasks")
        //     .subscribe(observer)

        // this.http.get("api/tasks")
        //     .subscribe(
        //         (newData)=>{
        //             console.log('Chamou o método next e passou o parâmetro newData: ', newData)
        //         },
        //         (errorData)=>{
        //             console.log('Chamou o método error e passou o parâmetro errorData: ', errorData)
        //         },
        //         ()=>{
        //             console.log('Chamou o método complete e encerrou.')
        //         }
        //     )

        
        // this.http.get("api/tasks")
        //     .subscribe(
            //         newData => {
                //             console.log('Chamou o método next e passou o parâmetro newData: ', newData)
                //         }
                //     )
                
                this.http.get("api/taasdsdsks")
                .subscribe({
                    next: newData => console.log('Chamou o método next e passou o parâmetro newData: ', newData),
                    error: errorData => alert('Ocorreu um erro no servidor. Tente mais tarde.'),
                    complete: ()  => console.log('Chamou o método complete e encerrou.')
                })
    }
}