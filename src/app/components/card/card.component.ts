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
  imagen =[
    {id:1,url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScnplaxp7gh3BWZcUeNlsO56jKW79EA0FOow&usqp=CAU'},
    {id:2,url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScnplaxp7gh3BWZcUeNlsO56jKW79EA0FOow&usqp=CAU'},
    {id:3, url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScnplaxp7gh3BWZcUeNlsO56jKW79EA0FOow&usqp=CAU'},
  ]
  
  constructor(private renderer:Renderer2) { }

  ngOnInit(): void {
   console.log(this.img)
  }
 
  selectCard(card:ElementRef){
 
    console.dir(card.nativeElement)

    if(!this.selected){
      // this.renderer.removeChild(card,this.img.nativeElement)
      console.log(this.card)
      this.renderer.addClass(card, "darkness")
      this.renderer.removeClass(card, "card");
      this.selected = true;
    }else{
      // this.renderer.appendChild(card,this.img.nativeElement);
      this.renderer.addClass(card, "card");
      this.renderer.removeClass(card, "darkness");
      this.selected = false;
    }      
  }

}
