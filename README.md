# NG 

1. How to install angular in your computer
   
   // install angular globally use computer cli
   npm install -g @angular/cli

   // install angular app
   ng new appName

   // how to run angular
   ng serve

   ng serve -o


2. How create components physically or use cli 
    
    //cli
    ng generate component folderName

3. Data Binding in angular

    1. One way data Binding
   
       1. String interpolation. { { } }
       2. property binding. [property] = "tsVariable"
       3. event binding. (event) = 'expression'
   
    2. Two way data Binding
   
       1. ts to html
                        [(ngModel)] = 'data'
       2. html to ts  