Form a new google sheets, then go on adding the values in the cells as mentioned. This works as the Backend for the project, which fetches live data from the market.



Symbol to be used in cell		Formula of the cell



SYMBOL					Retrieve data from nse.com 

Exchange + Symbol	 			    "

10 Days Chart				=SPARKLINE(INDEX(GOOGLEFINANCE(A2,"price",WORKDAY(TODAY(),-10),TODAY()),,2),{"charttype","column";"color","green"})

NAME OF COMPANY				Retrieve data from nse.com		

Current Price				=GOOGLEFINANCE(B2,"PRICE")

Change	Change %			=GOOGLEFINANCE(B2,"CHANGE")

Market Cap(in Cr*)			=GOOGLEFINANCE(B2,"MARKETCAP")/10000000           (for data in crores)

Volume					=GOOGLEFINANCE(B2,"volume")

VolumeAvg				=GOOGLEFINANCE(B2,"Volumeavg")


once you get all the data in the Google sheet, go to Extentions>AppsScript...
Then add the codes provided, modifying if necessary.
Once done, go to deployments and set new Deployment, name it and deploy the codes. Check the output from the given link.