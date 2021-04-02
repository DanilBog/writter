import { Component, OnInit } from '@angular/core';
import { delay, map, mapTo, switchMap, takeUntil } from 'rxjs/operators';
import { from, timer } from 'rxjs';
import { interval } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'writter';
  text = '';
  text2 = '';
  header = '';
  textArray=['Mainly good marketing and networking skills will lead to a successful career. Not my ability to inspire others| with my works.',
  'Only a high career status will allow me to teach others and earn money with it. Not just my ability to inspire others| with my advice.',
  'Said who?',
  'liberté, égalité, créativité'];
  textSpan = '';
  source = from('Mainly good marketing and networking skills will lead to a successful career. Not my ability to inspire others with my works.|Only a high career status will allow me to teach others and earn money with it. Not just my ability to inspire others with my advice.|Said who?|liberté, égalité, créativité');
  
  headerArray = ['Career Myth Nr.1', 'Career Myth Nr.2', '','']
  isSpan = false;
  j=0;
  i=0;
  ngOnInit() {
    let textToPrint = this.textArray[this.j];
    this.header = this.headerArray[this.j];
    interval(100).pipe(
      map(() => {if (this.i < textToPrint.length) {
                    if (textToPrint[this.i] ==='|') {
                      this.i++; this.isSpan = true;
                    } else {
                      if (!this.isSpan) {
                        this.text=this.text + textToPrint[this.i]; 
                        this.i++;
                      } else {
                        this.textSpan = this.textSpan + textToPrint[this.i];
                        this.i++;
                      } 
                    }
                  } else {this.i=0; this.j++; this.text = ''; this.textSpan = ''; this.isSpan = false;
                            textToPrint = this.textArray[this.j];
                            this.header = this.headerArray[this.j];}
                }),
    ).subscribe(val => console.log(val));
  }
  

}