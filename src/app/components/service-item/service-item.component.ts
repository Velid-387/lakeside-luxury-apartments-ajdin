import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Service } from '../../shared/models/service.model';

@Component({
  selector: 'app-service-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service-item.component.html',
  styleUrl: './service-item.component.scss'
})
export class ServiceItemComponent {
  @Input() service!: Service;
}
