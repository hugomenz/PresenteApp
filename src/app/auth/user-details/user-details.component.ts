import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {
  constructor(private _router: Router) {}

  ngOnInit() {}

  onNavigateToHome(): void {
    this._router.navigate(['/home']);
  }
}
