"use strict";
        function blogContent() {

        // ` this is a "back tick". Use it to define multi-line strings in JavaScript.
        var content = ` 
        
            <h3><u>Database</u></h3>
                <p>
                    This database table will allow the user to add the following to keep track of their books.
                </p>
                <ul>
                    <li>Book Title</li>
                    <li>Author's Name</li>
                    <li>Description</li>
                    <li>Price</li>
                    <li>Release Date</li>
                    <li>Book Image</li>
                </ul>

                &nbsp


                <h3><u>Web App Experience</u></h3>
                <p>
                    I do not have any experience web design or web development. I began to learn JavaScript a while 
                    ago but didn't continue since I figured it would be more beneficial to learn it in a class. Since 
                    I have no experience, I hope to learn a lot in this class. I want to be able to work with web 
                    applications after this semester and having even the most basic knowledge can help with that.
                </p>
    
                &nbsp
            
                <h3><u>Database Experience</u></h3>
                <p> 
                    I have not had any database experience that would be useful for this class. The only database I 
                    used before was Firebase, which I have limited experience with, and it is a document store database. 
                    I have never used a SQL database before. I have wanted to learn it before for projects, but have never 
                    gotten around to it.
                </p>
    
                &nbsp
            
                <h3><u>Homework 1</u></h3>
                <p>
                    There were a few challenges I had when completing this lab. I created an external style sheet 
                    which was easy but figuring out how to reference it was a little difficult. Once I figured out how 
                    to do that I understood it better. I also had problems with making the titleNav responsive. I had 
                    the code to make it responsive, but having the proper padding was a bit confusing to get right. The tutorials and 
                    examples that were provided were very useful for this assignment and helped me with a majority of 
                    my problems.
                </p>

                <p>
                    The rest of the lab was relatively easy. Changing the text and colors were straight forward.
                    Understanding all the id's was not difficult since they are named reasonably. Even including an 
                    image as the background was easy since there were examples on how to do it. 
                </p>

                <p>
                    This lab was very useful in general since it allow me to work with a lot of the basics of creating a 
                    website. A lot of it was covered in the lab activity, but the additional requirements had helped me 
                    understand the layout of the website a lot more.
                </p>
    
                &nbsp
    
                <h3><u>Homework 2</u></h3>
                <p>
                    The challenges I had faced related to the nav router. Since we used the nav route in the last part of the lab 
                    activity, adding it didn't create too many problems. The main problem was trying to style it to look like my 
                    header from the first homework. The other part I had problems with was getting the drop down menu to work. Trying 
                    to figure out how it is connected to the nav router and how to add another link took a lot of time 
                    to figure out.
                </p>
    
                <p>
                    The smaller parts of the lab were easier. I already had the links change color based on the action from the last 
                    homework. Adding "use strict" to all Javascript code was simple. Since we created different Javascript 
                    files in the lab activity, creating them for this homework did not take long. All of the employee files 
                    were straight forward and it was easy to convert to my website.
                </p>
           
                <p>
                    Like last week, the sample code and the lab activity was very useful. This homework was very similar 
                    so it was only changing a few things. Also, working with the nav router allowed me to understand it a 
                    lot better than the lab activity.
                </p>
            
                &nbsp

                <h3><u>Homework 3</u></h3>
                <p>
                    For this weeks homework I didn't have many challenges, but the two that I did have took me a long time to figure 
                    out how to do it. The first challenge was creating the date changer. I wanted something other than a text box and 
                    button I made that. Since we never learned how to do this, it took some time to understand its functions. The 
                    second thing that was challenging was having the image disappear and show the description. This took me the longest time 
                    to figure out, but I then realized it had to do with visiblity in the css file.
                </p>
            
                <p>
                    The rest of the homework was simple since there was a lot of sample code and it was the same as the lab activity and 
                    last weeks homework. Creating the buttons, text boxes and the image did not take long and was straight forward. Making sure 
                    they were public/private was simple as well.
                </p>
            
                <p>
                    As I said previously, there was a lot of source code and it helped a lot when I got stuck on something. Also the lectures 
                    help a lot since she explained everything that was in the code and made sure we understoon the concepts.
                </p>
            
                &nbsp

                <h3><u>Homework 4</u></h3>
                <p>
                    This homework was very simple, I did not have any problems with creating the database table.
                </p>
            
                <p>
                    The entire homework was very easy since it was just a continuation of the lab activity. Creating the table, 
                    the foreign key, adding records, creating errors and joining the tables had already been done before. If I couldn't remember how to do something
                    then I would just be able to look back at the lab activity.
                </p>
                <p>
                    The tutorial that is on the professors website was useful for figuring out certain parts. When I coulding remember how to join  
                    tables, I was able to look back at the document. Also, as I said previously, the lab activity document was very useful for 
                    remembering how to complete tasks.
                </p>
            
                Click <a target="_blank" href='Nuss_Web_Database.pdf'>here</a> to see my database document
    `;
                var ele = document.createElement("div");
                ele.innerHTML = content;
                return ele;
        }