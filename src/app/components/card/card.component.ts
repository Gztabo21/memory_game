import { Component, OnInit,ViewChild, ElementRef,Renderer2 } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @ViewChild('card') card:ElementRef
  @ViewChild('img') img:ElementRef

  selected:boolean = false;
  
  constructor(private renderer:Renderer2) { }

  ngOnInit(): void {
   
  }
 
  selectCard(){
    if(!this.selected){
      this.renderer.removeChild(this.card.nativeElement,this.img.nativeElement)
      this.renderer.addClass(this.card.nativeElement, "darkness")
      this.selected = true;
    }else{
      this.renderer.appendChild(this.card.nativeElement,this.img.nativeElement);
      this.renderer.addClass(this.card.nativeElement, "darkness");
      this.selected = false;
    }      
  }

}
