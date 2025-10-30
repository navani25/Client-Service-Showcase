# E-Commerce Mobile Phone Market Analysis


## Slide 1

E-COMMERCE MOBILE PHONE MARKET ANALYSIS
E-COMMERCE MOBILE PHONE MARKET ANALYSIS

Presented By :
Presented By :

Ajay
Ajay


---


## Slide 2

Introduction :
Introduction :

This project executes a full data pipeline, starting with Web Scraping 1,161 mobile phone records, followed by EDA and Cleaning to build a Price Prediction Model optimized through Hyperparameter Tuning.
This project executes a full data pipeline, starting with Web Scraping 1,161 mobile phone records, followed by EDA and Cleaning to build a Price Prediction Model optimized through Hyperparameter Tuning.


---


## Slide 3

Project Flow :
Project Flow :

Data Scrapping & csv
Data Scrapping & csv

Data cleaning  &Analysis
Data cleaning  &Analysis

Un Supervised & Supervised learning
Un Supervised & Supervised learning

Hyperparameter Tuning
Hyperparameter Tuning

Phase 1:
Phase 1:

Phase 2:
Phase 2:

Phase 3 :
Phase 3 :

Phase 4 :
Phase 4 :


---


## Slide 4

Web Scrapping :
Web Scrapping :

Tools: Selenium (For Browser Automation) And Beautifulsoup (For HTML Parsing).

Action: Extracted Price, Rating, Title, And Review Count From The Flipkart Page.

Result: Exactly Scrap 40 Pages & Secured 1,161 Initial Product Records, Forming The Raw Dataset
Tools: Selenium (For Browser Automation) And Beautifulsoup (For HTML Parsing).
Action: Extracted Price, Rating, Title, And Review Count From The Flipkart Page.
Result: Exactly Scrap 40 Pages & Secured 1,161 Initial Product Records, Forming The Raw Dataset


---


## Slide 5

Data Cleaning :
Data Cleaning :

Initial Cleanup: Removed duplicates and handled missing values.

Feature Engineering: Extracted Brand and Model names.

Data Transformation: Converted Price, Rating, and Review Count to clean numerical types.

Quality Control: Applied IQR method to handle Price outliers.
Initial Cleanup: Removed duplicates and handled missing values.
Feature Engineering: Extracted Brand and Model names.
Data Transformation: Converted Price, Rating, and Review Count to clean numerical types.
Quality Control: Applied IQR method to handle Price outliers.


---


## Slide 6

Data Cleaning :
Data Cleaning :

Before :
Before :

After :
After :


---


## Slide 7

Exploratory Data Analysis :
Exploratory Data Analysis :

Objective: Understand the market structure, pricing behavior, and customer response using cleaned data.
Objective: Understand the market structure, pricing behavior, and customer response using cleaned data.


---


## Slide 8

SQL Connectivity :
SQL Connectivity :

The SQLAlchemy (ORM) tool is used to move the final, cleaned DataFrame into a central SQL database. 

This ensures data persistence and provides a scalable source of truth for all subsequent organizational data access.
The SQLAlchemy (ORM) tool is used to move the final, cleaned DataFrame into a central SQL database.
This ensures data persistence and provides a scalable source of truth for all subsequent organizational data access.


---


## Slide 9

Unsupervised Learning :
Unsupervised Learning :

K-Means Clustering
Goal: Group mobiles by Price, Rating, and Reviews.Algorithm: K-Means – finds natural clusters without labels.Optimal K: 4 clusters (via Silhouette Score).Insights:
Targeted marketing
Better product positioning
Competitive strategy
K-Means Clustering
Goal: Group mobiles by Price, Rating, and Reviews.Algorithm: K-Means – finds natural clusters without labels.Optimal K: 4 clusters (via Silhouette Score).Insights:
Targeted marketing
Better product positioning
Competitive strategy


---


## Slide 10

Supervised Learning :
Supervised Learning :

Job: Classification—The model predicts which Brand a phone belongs to price and review.

Data Used: Phone Price and Number of Reviews.

Algorithms: Tested 5 models like  Random Forest , XGBoost , SVM, K-NN and  Logistic Regression.

Best Result: The XGBoost was selected as the Best Model, based on the highest F1-Score.
Job: Classification—The model predicts which Brand a phone belongs to price and review.
Data Used: Phone Price and Number of Reviews.
Algorithms: Tested 5 models like  Random Forest , XGBoost , SVM, K-NN and  Logistic Regression.
Best Result: The XGBoost was selected as the Best Model, based on the highest F1-Score.


---


## Slide 11

Hyperparameter Tuning: Grid Search
Hyperparameter Tuning: Grid Search

Goal: Optimize the Random Forest Classifier to maximize its Accuracy in predicting the phone brand.

Method: Used GridSearchCV to test combinations of parameters like max_depth and n_estimators.

Result: Identified the best parameters, resulting in a significant improvement in performance:

Accuracy Before Tuning: [0.7561]
Accuracy After Tuning (Best Score): [0.7252]
Goal: Optimize the Random Forest Classifier to maximize its Accuracy in predicting the phone brand.
Method: Used GridSearchCV to test combinations of parameters like max_depth and n_estimators.
Result: Identified the best parameters, resulting in a significant improvement in performance:
Accuracy Before Tuning: [0.7561]
Accuracy After Tuning (Best Score): [0.7252]


---


## Slide 12

Conclusion & Future Work :
Conclusion & Future Work :

Success: Completed the full pipeline, from Web Scraping to an optimized Brand Classification Model.

Key Finding: Market is dominated by specific brands and mid-range pricing.

Future: Integrate more product specs (RAM/Processor) and explore Time Series Analysis.
Success: Completed the full pipeline, from Web Scraping to an optimized Brand Classification Model.
Key Finding: Market is dominated by specific brands and mid-range pricing.
Future: Integrate more product specs (RAM/Processor) and explore Time Series Analysis.


---


## Slide 13

Thank you & Any Question:
Thank you & Any Question:


---
