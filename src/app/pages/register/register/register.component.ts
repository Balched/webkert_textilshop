import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import { NgIf } from '@angular/common';
import { AuthService } from '../../../shared/auth/auth.service';
import { Router, RouterLink} from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-register',
  imports: [
    MatFormFieldModule, ReactiveFormsModule, NgIf,  MatCardModule, MatCheckboxModule, MatDividerModule, MatIconModule, MatProgressSpinnerModule
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']

})
export class RegisterComponent {
  form: FormGroup;
  error = '';
  success = '';

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  register() {
    if (this.form.invalid) return;

    const { email, password } = this.form.value;
    this.authService.register(email, password)
      .then(() => {
        this.success = 'Sikeres regisztráció!';
        this.form.reset();
        this.error = '';
        this.router.navigateByUrl('/home');
      })
      .catch(err => {
        this.error = err.message;
        this.success = '';
      });
  }
}
