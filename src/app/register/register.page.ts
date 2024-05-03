import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { AuthenticationService } from 'src/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  regForm!: FormGroup;

  
  constructor(public formBuilder: FormBuilder, public loadingCtrl: LoadingController, public authService: AuthenticationService) { }

  ngOnInit() {
    this.regForm = this.formBuilder.group({
      fullname: ['', [Validators.required]],
      email: ['', [
        Validators.required,
        Validators.email,
        Validators.pattern("[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"),
      ]],
      telephone:['', [
        Validators.required,
        Validators.pattern("^[0-9]{10}$"),
      ]],
      password: ['',
        Validators.required,
        Validators.pattern("(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}") 
      ]
    })
  }


get errorControl(){
  return this.regForm?.controls;
 }


 async signUp(){
    const loading = await this.loadingCtrl.create();
    await loading.present();
    if (this.regForm?.valid){
      //const user = await this.authService.registerUser (email, password)
    }

 }


}
