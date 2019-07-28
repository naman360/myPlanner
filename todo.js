
var myList=[];
//Show stored data in the unordered list
if(!localStorage.getItem('myTodoList'))
{
	f=1;
}

else{

	var temp=JSON.parse(localStorage.getItem('myTodoList'));
	for(var i=0;i<temp.length;i++)
    {
	document.getElementById('mainlist').innerHTML+="<li><span class=\"delet\">X</span><span>"+temp[i].task+"</span></li>";
       }

}



//Adding Event listener for add button
document.forms['addtask'].addEventListener('submit',function(p){

p.preventDefault();
var list=document.getElementById('mainlist');




//Create Elements
var li=document.createElement('li');
var name=document.createElement('span');
var del=document.createElement('span');



var obj={
	'task':document.getElementById('namebox').value
}

//Adding Data to local storage
if(localStorage.getItem('myTodoList')){
var stored=JSON.parse(localStorage.getItem('myTodoList'));
localStorage.removeItem('myTodoList');

stored.push(obj);


localStorage.setItem('myTodoList',JSON.stringify(stored));

}

else{
myList.push(obj);
localStorage.setItem('myTodoList',JSON.stringify(myList));
myList=[];

}


//Append to Document
li.appendChild(del);
li.appendChild(name);
list.appendChild(li);



//Adding IDs and text content
name.textContent=document.getElementById('namebox').value;;
del.setAttribute('class',"delet");
del.textContent="X";

document.forms['addtask'].reset();
});




//To remove data
var list=document.getElementById('mainlist');
list.addEventListener('click',function(e){
	if(e.target.className=='delet'){
    
	//Deleting data from localstorage	
    var collection=JSON.parse(localStorage.getItem('myTodoList'));
    for(var i=0;i<collection.length;i++)
    {
    	if(e.target.parentElement.textContent=="X"+collection[i].task){
    		collection.splice(i,1); //For deleting elements from array accrding to the index of element.
    		localStorage.setItem('myTodoList',JSON.stringify(collection));
    	}
    }
         
		//For deleting elements form list.
		const rem=e.target.parentElement;
		rem.parentElement.removeChild(rem);
		
	}
	
});

