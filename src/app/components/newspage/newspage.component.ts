import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BackendService } from 'src/app/services/backend.service';
@Component({
  selector: 'app-newspage',
  templateUrl: './newspage.component.html',
  styleUrls: ['./newspage.component.css'],
})
export class NewspageComponent implements OnInit {
  constructor(private backend: BackendService) {}

  headlines: any[] = [];
  private sub1: Subscription | undefined;
  ngOnInit(): void {
    this.sub1 = this.backend.getNews().subscribe({
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
