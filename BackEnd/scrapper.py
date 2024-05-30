import csv
import time
from datetime import datetime
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options

class Scraper:
    def __init__(self, chromedriver_path):
        self.chromedriver_path = chromedriver_path
        self.driver = None
    
    def open_url(self, url):
        if not self.driver:
            self._initialize_driver()
        self.driver.get(url)
    
    def close(self):
        if self.driver:
            self.driver.quit()
            self.driver = None
    
    def _initialize_driver(self):
        chrome_options = Options()
        chrome_options.add_argument("--headless")  # Run in headless mode (optional)
        self.service = Service(self.chromedriver_path)
        self.driver = webdriver.Chrome(service=self.service, options=chrome_options)

class LinkedInScraper(Scraper):
    def __init__(self, chromedriver_path, location="Pakistan", geo_id="101022442"):
        super().__init__(chromedriver_path)
        self.location = location
        self.geo_id = geo_id
    
    def get_no_of_jobs(self, job_title):
        job_title_encoded = job_title.replace(" ", "%20")
        url = f"https://www.linkedin.com/jobs/search?keywords={job_title_encoded}&location={self.location}&geoId={self.geo_id}&trk=public_jobs_jobs-search-bar_search-submit&position=1&pageNum=0"
        self.open_url(url)
        
        try:
            page_title = self.driver.title
            print(f"Debug: page_title = {page_title}")  # Debug information
            
            # Extract the number part from the page title
            job_count = ''.join(filter(str.isdigit, page_title.split()[0]))
            
            if not job_count:
                job_count = '0'
        except Exception as e:
            print(f"Error extracting job count: {e}")
            job_count = '0'
        
        print(f"{job_count} {job_title} jobs in {self.location}")
        self.close()
        
        return job_count

    def write_to_csv(self, job_title, job_count):
        # Write to CSV file
        filename = 'BackEnd/data.csv'  # Using ./ to explicitly indicate current directory
        date_today = datetime.now().strftime('%Y-%m-%d')
        try:
            with open(filename, mode='a', newline='') as file:
                writer = csv.writer(file)
                writer.writerow([job_title, job_count, date_today])
            print(f"Data written to {filename}: {job_title}, {job_count}, {date_today}")
        except Exception as e:
            print(f"Error writing to CSV: {e}")

# Example usage
chromedriver_path = r"C:\Users\HP\Documents\chromedriver-win64\chromedriver.exe"  # Update with your actual chromedriver path
scraper = LinkedInScraper(chromedriver_path)
job_titles = ["SOFTWARE ENGINEER", "PROGRAMMER", "DATA ANALYST", "WEB DEVELOPER", "AI DEVELOPER", "WORDPRESS DEVELOPER", "GRAPHIC DESIGNER", "DATA SCIENTIST"]

for job_title in job_titles:
    try:
        job_count = scraper.get_no_of_jobs(job_title)
        scraper.write_to_csv(job_title, job_count)
    except Exception as e:
        print(f"Failed to process job title {job_title}: {e}")
    time.sleep(5)  # Adding a delay of 5 seconds between each iteration
