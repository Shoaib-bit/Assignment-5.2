import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  productData :any = [];
  productForm !: FormGroup;
  constructor(public data : DataService){
      data.getData().get('https://dummyjson.com/products/1').subscribe((dta) =>{
        this.productData = dta;
        this.productForm.patchValue(this.productData)
      })
  }
  get control(){
    return new FormControl(null, Validators.required)
  }
  
  ngOnInit(): void {
      this.productForm = new FormGroup({
        title : this.control,
        description : this.control,
        category : this.control,
        rating : this.control,
        stock :this.control
      })
     
  }
  getAction(){
    alert('hello')
  }
}
