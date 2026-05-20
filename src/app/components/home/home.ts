import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IfeaturedCars } from '../../models/ifeatured-cars';
import { NgOptimizedImage } from "@angular/common";
import { HomeCart } from "../home-cart/home-cart";

@Component({
  selector: 'app-home',
  imports: [NgOptimizedImage, HomeCart],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  featuredCars: IfeaturedCars[];

  constructor(private router: Router) {
    this.featuredCars = [
      {
        id: 1,
        name: 'BMW M4',
        description: 'High performance sports car',
        img: 'https://octane.rent/wp-content/uploads/2023/03/bmw-m4-red-2.jpg',
      },
      {
        id: 2,
        name: 'Audi R8',
        description: 'Luxury meets speed',
        img: 'https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/images/09q1/267374/2010-audi-r8-52-v10-fsi-quattro-review-car-and-driver-photo-258862-s-original.jpg?resize=640:*',
      },
      {
        id: 3,
        name: 'Mercedes AMG',
        description: 'Power & elegance',
        img: 'https://arabgt.com/wp-content/uploads/2025/05/%D8%B3%D9%8A%D8%A7%D8%B1%D8%A9-gt-63-2026-.jpeg',
      },
      {
        id: 4,
        name: 'Volvo V60',
        description: 'High performance',
        img: 'https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/10354297/20180306_volvov60_vladsavov12.jpg?quality=90&strip=all',
      },
      {
        id: 5,
        name: 'Ferrari F40',
        description: 'High performance sports car',
        img: 'https://cdn.shopify.com/s/files/1/1679/6063/files/ferrari-f40-tribute-render_1024x1024.jpg?v=1542207155',
      },
      {
        id: 6,
        name: 'Lamborghini Aventador',
        description: 'Power & elegance',
        img: 'https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/images/16q2/667349/2016-lamborghini-aventador-lp750-4-superveloce-test-review-car-and-driver-photo-667354-s-original.jpg?resize=640:*',
      },
    ];
  }
  
}
