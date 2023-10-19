import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country-service.service';
import { Country } from './country.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-country-view',
  templateUrl: './country-view.component.html',
  styleUrls: ['./country-view.component.css']
})
export class CountryViewComponent implements OnInit {
  countries$!: Observable<Country[]>;

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {
    this.countries$ = this.countryService.getCountries();
    this.countries$.subscribe(countries => {
      console.log('Fetched countries:', countries);
    });
  }
}
