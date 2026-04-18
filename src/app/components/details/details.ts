import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiNewCars } from '../../services/api-new-cars';
import { CurrencyPipe, NgIf, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-details',
  imports: [NgIf, NgOptimizedImage, CurrencyPipe],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details implements OnInit {
  carId: number=0;
  carDetails: any;
  constructor(private route: ActivatedRoute,
    private ApiNewCars: ApiNewCars,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.carId = Number(this.route.snapshot.paramMap.get('id'));
    this.getCarDetails();
  }

  getCarDetails() {
    this.ApiNewCars.getAllNewCars().subscribe({
      next: (res) => {
        this.carDetails = res.find(car => car.id === this.carId);
      }
    })
  }

  logIn() {
alert('You are not login')
    this.router.navigateByUrl('/logIn')
  }
}
