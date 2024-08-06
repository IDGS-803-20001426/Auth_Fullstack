import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-change-password',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.css'
})
export class ChangePasswordComponent {
  newPassword!: string
  currentPassword!: string
  authService = inject(AuthService)
  MatSnackBar = inject(MatSnackBar)
  router = inject(Router)

  changePassword(){
    this.authService.changePassword({
      email: this.authService.getUserDetail()?.email,
      newPassword: this.newPassword,
      currentPassword: this.currentPassword,
    }).subscribe({
      next: (response) => {
        if(response.isSuccess){
          this.MatSnackBar.open(response.message, 'Close', {
            duration: 3000
          })
          this.authService.logout()
          this.router.navigate(['/login'])
        }else{
          this.MatSnackBar.open(response.message, 'Close',{
            duration: 3000
          });
        }
      },
      error: (err: HttpErrorResponse) => {
        this.MatSnackBar.open(err.error.message, 'Close', {
          duration: 3000
        })
      }
    })
  }
}
