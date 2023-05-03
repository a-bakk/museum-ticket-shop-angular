import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    rePassword: new FormControl('')
  });

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.registerForm.get('name')?.addValidators([Validators.required]);
    this.registerForm.get('email')?.addValidators([Validators.required]);
    this.registerForm.get('password')?.addValidators([Validators.required, Validators.minLength(8)]);
    this.registerForm.get('rePassword')?.addValidators([Validators.required, Validators.minLength(8)]);
  }

  register() {
    if (this.registerForm.valid) {
      this.authService.register(this.registerForm.get('email')?.value, this.registerForm.get('password')?.value).then(cred => {
        this.authService.addDisplayName(this.registerForm.get('name')?.value).then(() => {
          this.router.navigateByUrl('/exhibitions');
        }).catch(error => {
          console.error(error);
        });
      }).catch(error => {
        console.error(error);
      });
    }
  }

}
