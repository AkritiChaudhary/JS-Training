let restaurantMenu={
    Name: "Food and Feast",
    Food:{
        item1: {
            Name:"Pizza",
            Price:320
        },
        item2 :{
            Name:"Burger",
            Price:150
        },
        item3 :{
            Name:"Noodles",
            Price:200
        },
        item4: {
            Name:"Pasta",
            Price:210
        },
        item5: {
            Name:"Fries",
            Price:100
        },
    ListMenu: function(){
        alert(this.Food.item1.name+" costs "+this.Food.item1.price)
        alert(this.Food.item2.name+" costs "+this.Food.item2.price)

        alert(this.Food.item3.name+" costs "+this.Food.item3.price)

        alert(this.Food.item4.name+" costs "+this.Food.item4.price)


        alert(this.Food.item5.name+" costs "+this.Food.item5.price)

    },
        
    choose:function(){
        let choice=prompt("select an item")
        alert("You ordered: "+ choice)
    }    
}
      
    
}