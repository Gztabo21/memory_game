import { Component, OnInit,ViewChild, ElementRef,Renderer2 } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @ViewChild('card') card:ElementRef
  @ViewChild('img') img:ElementRef

  selected:number = 0;
  selectedOne: number = 0;
  selectedTwo:number = 0;

  imagen =[
    {id:1,url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScnplaxp7gh3BWZcUeNlsO56jKW79EA0FOow&usqp=CAU'},
    {id:2,url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScnplaxp7gh3BWZcUeNlsO56jKW79EA0FOow&usqp=CAU'},
    {id:1, url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScnplaxp7gh3BWZcUeNlsO56jKW79EA0FOow&usqp=CAU'},
  ]
  
  constructor(private renderer:Renderer2) { }

  ngOnInit(): void {

  }
 
  selectCard(card){
    if(this.selected >= 0 && this.selected <=2){
      console.log('id_one: '+this.selectedOne + 'id_two :' + this.selectedTwo)
      this.selectedOne == 0 ? this.selectedOne = card.id : this.selectedTwo = card.id;
      debugger
      this.renderer.removeClass(card, "darkness")
      this.renderer.addClass(card, "card");
      this.selected = this.selected+1;

      let valid  = this.validateCard(this.selectedOne,this.selectedTwo)
      // if(this.selectedOne > 0 && this.selectedTwo > 0){ 
      //   this.validateCard(this.selectedOne,this.selectedTwo)
      //  } 
       if(!valid){
        this.resetClass(this.selectedOne,card);
        this.resetClass(this.selectedTwo,card);
       }else{
       this.correct(this.selectedOne,this.selectedTwo,card);
       }
    }else{
      if(card.id == this.selectedOne || card.id == this.selectedTwo){
        this.renderer.addClass(card, "darkness")
        this.renderer.removeClass(card, "card");
        this.selected = this.selected-1;
      }
    }      
  }
  resetClass(id,element):void{
    element.id = id
    // element.className = 'darkness'
    this.renderer.removeClass(element,'card')
    this.renderer.addClass(element, "darkness")

  }

  correct(one,two ,element){

  }

  validateCard(one:number,two:number) {
    if(one >0 && two >0){
      return one == two ? true : false;
    }   
  }

}
