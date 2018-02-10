    var Lee = {
    	Child1: {Name: "Kayla", Age: 65}
//Child1 is an index of the object Lee
    };
// var Lee = ["Kayla", "Shelby"} -> this is an array. Arrays are ordered, objects are not. You would use console.log(Lee[1])
function addDependent(x,y,z){
// If trying to add spouse and spouse is already on file, this tells user they can't add a second spouse
  if(y == "Spouse" && (Lee.Spouse)){
    	return "You cannot add " + x +". "+ "You already have a spouse on file named " + Lee.Spouse.Name +". Please contact your local HR representative.";
    }
//if trying to add spouse and no spouse on file, add spouse
    else if (y == "Spouse" && (!Lee.Spouse)){
    	Lee.Spouse = {
          Name: x,
          Age: z
        };
//     	Lee.Spouse.Age = 40;
//     	this is how you would add age, but we can't use it here because youre adding a string and a number
//     	push is only used on arrays, not objects
//     	arrays aren't indexed
          	return Lee.Spouse.Name + " has been added :D";
    }
  
//This next part is the loop for adding children. Maximum of 5 children can be added.
  else if (y == "Child" && (!Lee.Child1)){
    	Lee.Child1 = {
          Name: x,
          Age: z
        };
          	return Lee.Child1.Name + " has been added :D";
    }

    else if (y == "Child" && (!Lee.Child2)){
    	Lee.Child2 = {
          Name: x,
          Age: z
        };
          	return Lee.Child2.Name + " has been added :D";
    }

      else if (y == "Child" && (!Lee.Child3)){
    	Lee.Child3 = {
          Name: x,
          Age: z
        };
          	return Lee.Child3.Name + " has been added :D";
    }

      else if (y == "Child" && (!Lee.Child4)){
    	Lee.Child4 = {
          Name: x,
          Age: z
        };
          	return Lee.Child4.Name + " has been added :D";
    }

        else if (y == "Child" && (!Lee.Child5)){
    	Lee.Child5 = {
          Name: x,
          Age: z
        };
          	return Lee.Child5.Name + " has been added :D";
    }
//If max of children or trying to add invalid relation, show this
  else
    return "You have either exceeded the maximum number of dependents or entered an invalid relation. Please contact your local HR representative for assistance."
}

console.log(addDependent("Shelby","Spouse", 45));
console.log(addDependent("Tina","Spouse", 45));
console.log(addDependent("Sarah","Child", 15));
console.log(Lee);
