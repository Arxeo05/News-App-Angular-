import { Component, Input, OnChanges, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-newspage',
  templateUrl: './newspage.component.html',
  styleUrls: ['./newspage.component.css'],
})
export class NewspageComponent implements OnChanges, OnDestroy {
  constructor(private backend: BackendService) {}

  headlines: any[] = [];
  private sub1: Subscription | undefined;

  @Input() selectedValue!: string;

  ngOnChanges(): void {
    if (this.selectedValue) {
      this.fetchNews();
    }
  }

  fetchNews(): void {
    if (this.sub1) {
      this.sub1.unsubscribe();
    }

    this.sub1 = this.backend.getNews(this.selectedValue).subscribe({
      next: (data: any) => {
        this.headlines = data.articles;
        console.log(this.headlines);
      },
      error: (error: any) => {
        console.error('Error fetching news:', error);
      },
    });
  }

  ngOnDestroy(): void {
    if (this.sub1) {
      this.sub1.unsubscribe();
    }
  }
}
