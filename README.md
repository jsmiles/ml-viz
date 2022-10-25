# ML-VIZ
An Unsupervised Machine Learning model in the browser updating based on the user's submitted parameter values. 

## How it works
Initially you see a plot and a form with 3 different parameters that can be selected. The plot maps two initial values from the famous [Iris](https://en.wikipedia.org/wiki/Iris_flower_data_set) dataset. The first two parameters allow you to change what data you would like plotted. The sepal and petal are parts of a plant, specifically 150 Iris in this case. The third parameter allows you to select how many clusters you want the model to predict. Once submitted the model makes its prediction. The data values are then plotted with the colour of each value representing the model's prediction.

## Potential real world applications
Unsupervised ML models are less common and often perceived as less useful when compared to supervised models. By the same token, in-browser models are seen as less stable, performant and possibly an intellectual property security risk. Hence, this kind of interface is not very common in production. However, there are many places where this kind of project could provide business value. For example, internal facing applications remove many of the concerns about using in-browser ML models. Also, unsupervised models can be very useful in "theory formation" and casual hunch validation stages. For example, they could be used for customer segmentation analysis.

## Tools Used
This is a React app built with Javascript. I styled it using CSS Modules. The plot was generated with Recharts. The KMeans clustering model comes from the ML.JS library. The form utilised Formik and I managed state using Redux Toolkit. 

## What I learned
I used this project as an opportunity to reinforce some previous study, to learn some libraries I knew would be important in the future and to touch base with a data project. I really enjoyed the challenge of making all the pieces work together. At the same time, I gained a new appreciation for how much heavy lifting css component libraries do.   

## Next Steps
- Rebuild the styling as it is currently a scruffy minimum viable proposition. 
- Extend the functionality to include another test dataset and a supervised learning model. 

## Deployment
I have deployed my site with Netlify, visit it [here](https://boring-goldwasser-1ef6ff.netlify.app/)

## Local Dev Deployment
If you would like to deploy this project locally then please follow the instructions below. I assume you are working on a Windows machine and have [git](https://git-scm.com/) and [node](https://nodejs.org/en/) installed (node to get access to npm). Once you do, open a terminal (git bash is a good option) in the location you would like the project.

```
# Clone the repo
git clone https://github.com/jsmiles/ml-viz.git

# Change directory into the project
cd ml-viz

# Install the dependencies needed
npm install

# Start the project on a local server
npm start
```

Once you have done the above the site should be available at <http://localhost:3000> or an alternative port if specified. 


