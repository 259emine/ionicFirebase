import {Component, OnInit} from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../../models/user';
import {ToastController} from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  users: User[];
  loginForm: FormGroup;
  islogin = false;


  // eslint-disable-next-line max-len
  constructor(private firebase: FirebaseService, private router: Router, private formBuilder: FormBuilder, private toastController: ToastController) {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }


  async login() {
    const loginModel = Object.assign({}, this.loginForm.value);
    this.firebase.getAllUser().subscribe(async r => {
        this.users = r;
      // eslint-disable-next-line @typescript-eslint/prefer-for-of
        for (let i = 0; i < this.users.length; i++) {
          if (this.users[i].email === loginModel.email && this.users[i].password === loginModel.password) {
            this.islogin = true;
            break;
          }
        }
        if (this.islogin) {
          const toast = await this.toastController.create({
            message: 'giriş başarılı',
            duration: 2000,
            color: 'success',
          });
          toast.present();
          this.router.navigate(['todo']);
        } else {
          const toast = await this.toastController.create({
            message: 'email veya şifrea hatalı',
            duration: 2000,
            color: 'danger',
          });
          toast.present();
        }
      }
    );

  }
}


