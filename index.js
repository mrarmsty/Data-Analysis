
var theList = ["Data is only as meaningful as how good you are at interpreting it.", 

                "Advanced analytics and predictive modelling has helped a manufacturer increase earnings by 55%, according to", 

                "At Duke Energy, an alert from the predictive analytics software warned employees that there was something wrong with the turbines, helping to save over $4.1 million. ",

                "Data analysis enables the use of details in real-time, allowing companies to predict performance or outcomes, but also to deal with events in-the-moment.", 

                "Data analysis can help reveal and unlock marketing insights so that campaigns are much more successful.", 

                "IBM reports that 62 percent of retailers find that using big data and analytics is giving them a competitive advantage over other organizations. ",

                 "Data analysis benefits need not be limited to those with an army of in-house data scientists. Small businesses can also benefit.",

                //  <a class="nav-link " href="#contact-me">Contact</a>
                
                ];
        var theRandNum = Math.random();
        var theRoundnum =Math.floor(theRandNum * theList.length);
        var finalName = theList[theRoundnum];
        document.getElementById("spann").innerHTML = (finalName + " "+ '<a href="https://www.kolabtree.com/blog/seven-data-analysis-benefits-for-small-business/">read more</a>');