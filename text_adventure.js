const buyACar = () =>{
  const whatType1 = prompt("what kind of car do you want? \n A sports car \n B sedan \n C coupé \n D SUV \n E convertible \n F everyday")
  anotherFunction1(whatType1)
}

 const anotherFunction1 = (buyACar) => {
   if (buyACar == "A"){
     const whatBrand1 = prompt("what brand? \n A Pagani \n B Koenigsegg" )
     anotherFunction2(whatBrand1, buyACar)
   }
    else if (buyACar == "B"){
     const whatBrand2 = prompt("what brand?  \n A Mercades-Maybach \n B rolls-royce  " )
     anotherFunction2(whatBrand2, buyACar)
   }  
   else if (buyACar == "C"){
     const whatBrand3 = prompt("what brand? \n A Mercades \n B Bentley " )
     anotherFunction2(whatBrand3, buyACar)
   }  
   else if (buyACar == "D"){
     const whatBrand4 = prompt("what brand? \n A Mercades  \n  B Bentley" )
     anotherFunction2(whatBrand4, buyACar)
   } 
   else if (buyACar == "E"){
     const whatBrand5 = prompt("what brand? \n A Mercades \n B Bentley  " )
     anotherFunction2(whatBrand5, buyACar)
   } 
   else if (buyACar == "F"){
     const whatBrand6 = prompt("what brand? \n A toyota \n B honda  " )
     anotherFunction2(whatBrand6, buyACar)
   }  
 }   
 
 
 const anotherFunction2 = (brand, type) => {
   if (type == "A") {
     if (brand == "A") {
       const model1 = prompt("what model? \n A Zonda \n B Huayra BC" )
       if (model1 == "A"){
         alert("You and your Zonda broke the speed limit.")
       }
       else if(model1 == "B"){
         alert("You and your Huayra BC crashed on the track.")
       }
     }
     else if (brand == "B") {
       const model1 = prompt("what model? \n A One:1 \n B Regera" )
       if (model1 == "A"){
         alert("You and your One:1 broke the speed limit.")
       }
       else if(model1 == "B"){
         alert("You and your Regera crashed on the track.")
       }
     }
   }
   if (type == "B") {
     if (brand == "A") {
       const model1 = prompt("what model? \n A Mercades-Maybach S650 \n B mercades-maybach S560" ) 
       if (model1 == "A"){
         alert("You enjoyed your drive.")
       }
       else if(model1 == "B"){
         alert("You enjoyed your drive.")
       }
     }
     else if (brand == "B") {
       const model1 = prompt("what model? \n A Phantom \n B Ghost" )
       if (model1 == "A"){
         alert("You enjoyed your drive.")
       }
       else if(model1 == "B"){
         alert("You enjoyed your drive.")
       }
     }
   }
   if (type == "C") {
     if (brand == "A") {
       const model1 = prompt("what model? \n A Mercades S65 AMG \n B Mercades S63 AMG" )
       if (model1 == "A"){
         alert("You ruled the track.")
       }
       else if(model1 == "B"){
         alert("You ruled the track.")
       }
     }
     else if (brand == "B") {
       const model1 = prompt("what model? \n A Bentley Continental GT \n B Bentley Continental Supersports" )
       if (model1 == "A"){
         alert("You and your Bentley Continental GT broke the speed limit.")
       }
       else if(model1 == "B"){
         alert("You and your Bentley Continental Supersports crashed on the track.")
       }
     }
   }
   if (type == "D") {
     if (brand == "A") {
       const model1 = prompt("what model? \n A Mercades GLE 350 \n B Mercades G63 AMG" )
       if (model1 == "A"){
         alert("You and your Mercades GLE 350 went off roading.")
       }
       else if(model1 == "B"){
         alert("You and your Mercades G63 AMG broke the speed limit.")
       }
     }
     else if (brand == "B") {
       const model1 = prompt("what model? \n A Bentley Bentayga \n B Bentley Bentayga Mulliner" )
       if (model1 == "A"){
         alert("You and your Bentley Bentayga broke the speed limit.")
       }
       else if(model1 == "B"){
         alert("You and your Bentley Bentayga Mulliner broke the speed limit.")
       }
     }
   }
   if (type == "E") {
     if (brand == "A") {
       const model1 = prompt("what model? \n A Mercades G65 AMG \n B Mercades G63 AMG" )
         if (model1 == "A"){
           alert("You and your Mercades G65 AMG broke the speed limit.")
         }
         else if(model1 == "B"){
           alert("You and your Mercades G63 AMG broke the speed limit.")
         }
     }
     else if (brand == "B") {
       const model1 = prompt("what model? \n A Bentley Continental GT \n B Bentley Continental Supersports" )
       if (model1 == "A"){
         alert("You and your Bentley Continental GT broke the speed limit.")
       }
       else if(model1 == "B"){
         alert("You and your Bentley Continental Supersports crashed on the track.")
       }
     }
   }
    if (type == "F") {
     if (brand == "A") {
       const model1 = prompt("what model? \n A toyota Mirai \n B toyota Camry" )
       if (model1 == "A"){
         alert("You enjoyed your commute.")
       }
       else if(model1 == "B"){
         alert("You enjoyed your commute.")
       }
     }
    else if (brand == "B") {
      const model1 = prompt("what model? \n  A honda civic \n B Honda civic type-r" )
      if (model1 == "A"){
        alert("You enjoyed your commute.")
      }
      else if(model1 == "B"){
        alert("You enjoyed your commute.")
      }
    }
  }
 } 
 
 buyACar()
