import { Component } from '@angular/core';
import { Product } from './models/Product';
import { service } from './models/Service/AppService';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project Angular  ';
  AppUserToken: any = "";
  dataSource: any;
  displayedColumns: string[] = ['Id', 'Nome'];

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
      .then((produtos) => {


        var listaDeProdutos: any;
        listaDeProdutos = produtos;

        this.dataSource = listaDeProdutos;
        console.log("data", this.dataSource)
      }).catch(erro => {
 
      })
  }

  CreateProduct() {
     
    var Product = {
      Id: 0,
      Name: "Phone 11",
      Imagem: ""
    };

     
    this.AppService.PostProduct(this.AppUserToken, Product)
      .toPromise()
      .then((resp) => {
        var ok = resp;
      }).catch(erro => {

         
        var erros = erro;
      })
  }

  ngOnInit() {
    this.GenerateToken();

    this.GetProduct()
  }

}


