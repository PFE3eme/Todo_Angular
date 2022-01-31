import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductsServiceService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  productId:number;
  produitFormGroup?:FormGroup;
  submitted:boolean=false;

  constructor(private activatedRoute:ActivatedRoute,
     private productService:ProductsServiceService,
     private fb:FormBuilder) {
    this.productId = activatedRoute.snapshot.params.id;

  }

  ngOnInit(): void {
    this.productService.getProduct(this.productId).subscribe(product =>{
        this.produitFormGroup= this.fb.group({
            id:[product.id,Validators.required],
            name:[product.name,Validators.required],
            price:[product.price,Validators.required],
            quantity:[product.quantity,Validators.required],
            selected:[product.selected,Validators.required],
            available:[product.available,Validators.required],
        })
      })
  }

  oneditProduct(){
    this.productService.updateProduct(this.produitFormGroup?.value).subscribe( data =>{
    alert("Success Product updated")
    })
  }

}
