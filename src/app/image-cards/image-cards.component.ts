import { Component } from '@angular/core';

interface imageInfo{
  link: string;
  title: string;
  text: string;
}

let Lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at bibendum magna. Aenean magna est, tempus ut odio aliquet, dapibus dictum erat. In et posuere velit, sed aliquam odio. Curabitur condimentum venenatis sodales.";

@Component({
  selector: 'app-image-cards',
  templateUrl: './image-cards.component.html',
  styleUrls: ['./image-cards.component.css']
})
export class ImageCardsComponent {
  images: imageInfo[] = [
    {
      link:"../../assets/img/unsplash-Anton Repponen.jpg",
      title: "Anton Repponen",
      text: Lorem
    },
    {
      link:"../../assets/img/unsplash-David Marcu.jpg",
      title: "David Marcu",
      text: Lorem
    },
    {
      link:"../../assets/img/unsplash-Jeremy Bishop.jpg",
      title: "Jeremy Bishop",
      text: Lorem
    },
    {
      link:"../../assets/img/unsplash-Julia Craice.jpg",
      title: "Julia Craice",
      text: Lorem
    },
    {
      link:"../../assets/img/unsplash-Nicole King.jpg",
      title: "Nicole King",
      text: Lorem
    }
  ]
}
