import { Component } from '@angular/core';
import { service } from './models/Service/AppService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project Angular  ';
  AppUserToken: any = "";


  constructor(public AppService: service) {

  }

  // call token
  public GenerateToken() {
    this.AppService.GenerateToken().toPromise().then((x) => {
       
      this.AppUserToken = x;
    })
  }

  // list

  public GetProduct() {
    setTimeout(() => {
      this.List();
    }, 5000);
  }

  public List() {
    this.AppService.GetProducts(this.AppUserToken)
      .toPromise()
      .then((resp) => {

        debugger
        var list = resp;

      }).catch (erro =>{

        var erros =erro;
      })
  }

  CreateProduct(){
    debugger
    var Product ={
      Id: 0,
      Name: "Phone 11",
      Imagem:"" 
    };

    debugger
    this.AppService.PostProduct(this.AppUserToken,Product)
                  .toPromise()
                  .then((resp) =>{
var ok = resp;
                  }).catch(erro => {

                    debugger
                    var erros = erro;
                  })
  }

  ngOnInit(){
    this.GenerateToken();

    this.GetProduct()
  }

}


