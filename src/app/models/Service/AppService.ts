
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Product } from "../Product";
import { InputModel, Token } from "../InputModel";
@Injectable({ providedIn: 'root' })


export class services {

    private readonly urlBackEnd = environment["apiBackEnd"];
    private readonly urlToken = environment["apiToken"];

    tokenUsesr: any;

    constructor(private httpClient: HttpClient) {


    }

    // metodo that call/generate token
    public GenerateToken() {
        var url = this.urlToken;
        var user = {
            "Email": "admin@admin.com",
            "Password": "-amDzJBt5ZHYXv4"
        }

        return this.tokenUsesr = this.httpClient.post<string>
                                 (url,
                                  user,
                                 {
                                    headers: new HttpHeaders({
                                        'Conent-Type':'application/json',
                                        'Access-Control-Allow-Origin':'*',
                                        'Access-Control-Allow-Methods':'GET,POST,OPTIONS,PUT,PATCH,DELETE',
                                        'Access-Control-Allow-Healders': 'Acess-Control-Headers,Origin,Accept,X-Requested-With'
                                    })
                                 });
    }


    //list product
    public GetProducts(userToken:any){
        var url = this.urlBackEnd + "products";

        return  this.httpClient.get<object>(url,{
                                            headers: new HttpHeaders({
                                                    'Content-Type':'Application/json',
                                                    'Authorization': `Bearer ${userToken}`
                                                    })
                                                })
    }

    // create/add
    public PostProduct(userToken:any){

        var url = this.urlBackEnd + "createProduct";

        return this.httpClient.post<Product>(url,{
                                             headers: new HttpHeaders({
                                            'Content-Type':'Application/json',
                                            'Authorization': `Bearer ${userToken}`
                                            })
                })
    }
}




