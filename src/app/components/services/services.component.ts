import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceItemComponent } from '../service-item/service-item.component';
import { Service } from '../../shared/models/service.model';
import { TranslateDirective } from '../../shared/directives/translate.directive';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, ServiceItemComponent, TranslateDirective],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  services: Service[] = [
    {
      id: 'apartments',
      title: 'Luxury Apartments',
      description: "Experience ultimate comfort in our modern, well-appointed apartments. Each unit features floor-to-ceiling windows with breathtaking lake views, fully equipped kitchens, luxurious bedding, and spacious living areas. Whether you're booking a cozy studio or a spacious family suite, you'll enjoy the perfect blend of luxury and comfort. All apartments include high-speed WiFi, smart TVs, and premium amenities to ensure your stay is as convenient as it is relaxing.",
      imageUrl: '/assets/images/apartments/apartman-5.jpg',
      altText: 'Luxury apartment interior with lake view',
      isImageOnLeft: true,
      titleTranslateKey: 'service_apartments_title',
      descriptionTranslateKey: 'service_apartments_desc'
    },
    {
      id: 'cafe',
      title: 'Lakeside Café & Garden',
      description: "Our charming café offers delicious meals and beverages in a picturesque setting. Enjoy your morning coffee on the terrace overlooking the lake, savor a leisurely lunch in our garden, or unwind with a glass of wine as the sun sets over the water. Our menu features fresh, locally-sourced ingredients and a variety of options to suit all tastes. The café is open to both guests and visitors, making it the perfect spot to relax and soak in the tranquil lakeside atmosphere.",
      imageUrl: '/assets/images/about/about-us.jpg',
      altText: 'Cozy café with garden and lake view terrace',
      isImageOnLeft: false,
      titleTranslateKey: 'service_cafe_title',
      descriptionTranslateKey: 'service_cafe_desc'
    },
    {
      id: 'rafts',
      title: 'Raft Cruising Adventures',
      description: "Explore the crystal-clear waters of the lake at your own pace with our comfortable raft rentals. Our easy-to-navigate rafts are perfect for families, couples, or solo adventurers looking to experience the beauty of the lake from a different perspective. Pack a picnic, find a secluded cove, or simply drift and enjoy the stunning surroundings. All necessary safety equipment is provided, and our staff will ensure you're comfortable before setting out on your aquatic adventure.",
      imageUrl: '/assets/images/about/splav-1.jpg',
      altText: 'Raft cruising on the beautiful lake',
      isImageOnLeft: true,
      titleTranslateKey: 'service_rafts_title',
      descriptionTranslateKey: 'service_rafts_desc'
    }
  ];
}
