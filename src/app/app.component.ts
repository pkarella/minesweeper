import { ElementRef, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

 myshow = null;
 myarray= [];
 loser = null;

 loserStyle(){
   return this.loser
 }
ngOnInit(){
  this.bombArray();
}
   bombArray(){
    for(var i = 0; i <= 63; i++){
      this.myarray.push(i);
    }
    for(var i = 1; i <= 15; i++){
      if(this.myarray[(Math.floor(Math.random()*64)+1)] = 'bomb'){
        i - 1
      }else{
        this.myarray[(Math.floor(Math.random()*64)+1)] = 'bomb';
      }
    }

   this.bombArea(this.myarray);
  }

  counter = 0;
  addCount(){
    this.counter += 1;
    console.log(this.counter)
    if(this.counter === 49){
      this.loser = ("winner"+((Math.floor(Math.random()*5)+1).toString()));
      console.log(this.loser)
      // alert('You Win!')

    }
  }

  testIt(stuff, event){
    if(stuff == 'bomb'){
      alert("You Loser!!");
      this.loser = 'loser';
    }else{

    }
  }
// open bonus spaces  ********  call in testIt??
  // if 0 {
  //   run neighbors function,
  //   open/'clickity' all neighbors + add them to counter,
  //   if any neighbor is 0, run again
  // }

neighbors = [];
leftNeighbor(num) {
   this.neighbors = [];
   this.neighbors.push(num - 8)
   this.neighbors.push(num - 7)
   this.neighbors.push(num + 1)
   this.neighbors.push(num + 8)
   this.neighbors.push(num + 9)
   this.neighbors = this.neighbors.filter(function(x){ return x > 0 });
  return this.neighbors.sort()
 }
 rightNeighbor(num) {
    this.neighbors = [];
    this.neighbors.push(num - 1)
    this.neighbors.push(num - 8)
    this.neighbors.push(num - 9)
    this.neighbors.push(num + 8)
    this.neighbors.push(num + 7)
    this.neighbors = this.neighbors.filter(function(x){ return x > 0 });
   return this.neighbors.sort()
  }
 neighbor(num) {
    this.neighbors = [];
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
right: number[] = [7, 15, 23, 31, 39, 47, 55, 63]
left: number[] = [0, 8, 16, 24, 32, 40, 48, 56]
neigh:number[]= []
test = [];
bombArea = function(myarray){
  myarray.forEach((bob)=>{

    if(bob != 'bomb'){
      if(this.left.includes(bob)){
        this.neigh = [];
        this.neigh = this.leftNeighbor(bob);
      }else if(this.right.includes(bob)){
        this.neigh = [];
        this.neigh = this.rightNeighbor(bob);
      }else{
      this.neigh = [];
      this.neigh = this.neighbor(bob);
      }
      var count = 0;
      this.neigh.forEach((numm)=>{
        if(myarray[(numm)] == 'bomb'){
          count += 1;
        }
      })
      this.myarray[bob] = (count);
    }
  })
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
