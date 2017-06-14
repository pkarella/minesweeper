import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

 myshow = null;
 myarray= [];

   bombArray(){
    for(var i = 1; i <= 64; i++){
      this.myarray.push(i);
    }
    for(var i = 1; i <= 15; i++){
      if(this.myarray[Math.floor(Math.random()*64)] = 'bomb'){
        i - 1
      }else{
        this.myarray[Math.floor(Math.random()*64)] = 'bomb';
      }
    }

   this.bombArea(this.myarray);
  }

  testIt(stuff){
    if(stuff == 'bomb'){
      console.log('kaboom');
    }else{

      console.log('safe')
    }
  }

neighbors = [];
 neighbor(num) {
    this.neighbors.push(num - 1)
    this.neighbors.push(num - 8)
    this.neighbors.push(num - 7)
    this.neighbors.push(num - 9)
    this.neighbors.push(num + 1)
    this.neighbors.push(num + 8)
    this.neighbors.push(num + 7)
    this.neighbors.push(num + 9)
    this.neighbors = this.neighbors.filter(function(x){ return x > 0 });
   return this.neighbors.sort()
  }


neigh:number[]= []
test = [];
bombArea = function(myarray){
  myarray.forEach((bob)=>{
    this.neigh = this.neighbor(bob);
    if(bob != 'bomb'){
      var count = 0;
      this.neigh.forEach((numm)=>{
        if(myarray[(numm-1)] == 'bomb'){
          count += 1;
        }
      })
      this.myarray[bob-1] = (count);
    }
  })
  console.log(this.test)
  this.myarray;

  this.myshow=1;
}


// var array = ["bomb"," ","3"," ", "bomb"];
// array.forEact
 // canvas: HTMLCanvasElement;
 //   ctx: CanvasRenderingContext2D;

// gridMine(){
//   for (var x = 1; x < 500; x += 10) {
//     this.ctx.moveTo(x, 0);
//     this.ctx.lineTo(x, 381);
//   }
//
//   for (var y = 1; y < 381; y += 10) {
//     this.ctx.moveTo(0, y);
//     this.ctx.lineTo(500, y);
//   }
//
//
//   this.ctx.strokeStyle = "#ddd";
//   this.ctx.stroke();
//
// }


  title = 'minesweeper';
}
