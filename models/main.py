import requests
from bs4 import BeautifulSoup
import csv
import re

best_time = []
destination_rating = []
destination_names = []
destination_desc = []
data = []
img_link=[]
ratings_no=[]
repeated_text = "Best Time:  "
regex = re.compile(r'\d+\.')

for page in range(0, 3):
    url = f"https://www.holidify.com/country/india/places-to-visit.html?pageNum={page if page!=0 else ''}"
    response = requests.get(url)
    soup = BeautifulSoup(response.content, "html.parser")

    # Destination Names:
    for name in soup.find_all("h3", {"class": "card-heading"}):
        destination_names.append(name.text)

    # Destination Rating out of 5:
    rating_spans = soup.find_all("span", {"class": "rating-badge"})
    for rating_span in rating_spans:
        for child in rating_span.children:
            if child.name == "b":
                destination_rating.append(child.text)

    # Destination Description:
    for desc in soup.find_all("p", "card-text"):
        destination_desc.append(desc.text)

    # Destination images:
    for img in soup.find_all("img", {"class":"card-img-top"}):
        src_value=img.get('data-original')
        img_link.append(src_value)
        
    # Best Time to Visit:
    for card_body in soup.find_all('div', {'class': 'card-body'}):
        paragraphs = card_body.find_all('p')
        if(len(paragraphs)>=3):
            para3_text = paragraphs[2].text.strip()
        if para3_text.startswith(repeated_text):
            para3_text = para3_text[len(repeated_text):]
        best_time.append(para3_text)

    # # Number of ratings for each destination
    # for rating in soup.find_all("a", {"class": "num-reviews"}):
    #     ratings_no.append(rating.text) 

    # Removing numbers from city names:
    city_names = [regex.sub('', city) for city in destination_names]



for i in range(len(destination_names)):
    data.append({'City':city_names[i][2:], 'Rating':destination_rating[i], 'Description': destination_desc[i], 'Link':img_link[i], 'Best Time': best_time[i]})

with open('data.csv', mode='a', encoding='utf-8', newline='') as file:
    writer = csv.writer(file)
    writer.writerow(['City', 'Rating', 'Description', 'Img Link', 'Best Time'])  
    for item in data:
        writer.writerow([item['City'], item['Rating'], item['Description'], item['Link'], item['Best Time']])