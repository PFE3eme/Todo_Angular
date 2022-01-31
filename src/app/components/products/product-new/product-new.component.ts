import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/model/product.model';
import { AppModule } from 'src/app/app.module';
import { ProductsServiceService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css']
})
export class ProductNewComponent implements OnInit {

  produitFormGroup?: FormGroup ;
  submitted:boolean=false;

  constructor(private fb:FormBuilder, private productsService:ProductsServiceService) { }


  ngOnInit(): void {
    this.produitFormGroup = this.fb.group({
      name:["", Validators.required], 
      price:[0, Validators.required], 
      quantity:[0, Validators.required], 
      selected:[true, Validators.required], 
      available:[true, Validators.required],
    })

  }
  onSaveProduct(){
    this.submitted = true; 
    if (this.produitFormGroup?.invalid)return;
    this.productsService.save(this.produitFormGroup?.value).subscribe(data=>{
      alert("success Saving product");
    })
  }

}
