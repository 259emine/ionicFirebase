import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FirebaseService} from '../../services/firebase.service';
import {Router} from '@angular/router';
import {ToastController} from '@ionic/angular';
import {User} from '../../models/user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  registerForm: FormGroup;
  userForRegister: User;
  users: User[] = [];
  isregister = true;

  // eslint-disable-next-line max-len
  constructor(private formBuilder: FormBuilder, private firebase: FirebaseService, private router: Router, private toastController: ToastController) {
    this.registerForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      name: ['', Validators.required],
      surname: ['', Validators.required],
      age: ['', Validators.required],
    });
  }

  ngOnInit() {
  }

  async register() {
    if (this.registerForm.valid) {
      const registerModel = Object.assign({}, this.registerForm.value);

      this.firebase.getAllUser().subscribe(response => {
        this.users = response;
      });
      for (let i = 0; i < this.users.length; i++) {
        if (this.users[i].email === registerModel.email) {
          const toast = await this.toastController.create({
            message: 'email zaten kullanımda',
            duration: 1000,
            color: 'danger',
          });
          toast.present();
          this.isregister = false;
          break;
        }
      }
      if (this.isregister) {
        this.registerUser(registerModel);
        const toast = await this.toastController.create({
          message: 'Kayıt Başarılı',
          duration: 1000,
          color: 'success',
        });
        toast.present();
      }
    } else {
      const toast = await this.toastController.create({
        message: 'lutfen bütün alanları doğru bir şekilde doldurun',
        duration: 2000,
        color: 'danger',
      });
      toast.present();

    }
  }

  registerUser(user: User) {
    this.firebase.register(user).then(r => {
      console.log(r);
      this.router.navigate(['login']);

    });
  }


}
