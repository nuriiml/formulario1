import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.css']
  
})
export class FormPageComponent {
  graduacionForm: FormGroup 
  arrGraduacion: any [] =[]
  isError =false

  constructor(private fb: FormBuilder) {
    this.graduacionForm=fb.group({ 
      'name': ['', Validators.required],
      'firstName': ['', Validators.required]
    })
  }
    sendData(){
    let nombre =this.graduacionForm.value.name
    let apellido = this.graduacionForm.value.firstName

    if (nombre.length ==0 || apellido.length ==0) {
      this.isError=true
      return
    } else {
      this.isError=false
    }

    this.arrGraduacion.push({name: nombre, firstName: apellido}) 
    this.graduacionForm.patchValue ({name: "", apellido: ""})

  }

}
