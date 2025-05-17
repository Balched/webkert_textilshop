import { Component, OnDestroy} from '@angular/core';
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
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-login',
  imports: [
    MatFormFieldModule, ReactiveFormsModule, NgIf,  MatCardModule, MatCheckboxModule, MatDividerModule, MatIconModule, MatProgressSpinnerModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnDestroy  {
  form: FormGroup;
  error = '';
  private userSub?: Subscription;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  login() {
    if (this.form.invalid) return;

    const { email, password } = this.form.value;
    this.authService.login(email, password)
      .then(() => this.router.navigate(['/']))
      .catch(err => this.error = err.message);
  }

  ngOnDestroy() {
    this.userSub?.unsubscribe();
  }
}