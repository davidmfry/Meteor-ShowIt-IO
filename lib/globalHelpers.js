// Gives an index variable in the handlebars each loop - came from Evgeny's Blog evgenys-blog.blogspot.com
UI.registerHelper('index', function(context, options){
   if(context)
   {
       return context.map(function(item, index){
          item._index = index + 1;
           return item;
       });
   }
});