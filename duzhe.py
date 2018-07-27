import requests

from bs4 import BeautifulSoup

class InitSpider:
    def __init__(self):
        self.headers = {
            'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36'
        }
    def getIndexUrl(self):
        urlList=[]
        for i in range(1,3):
            urlList.append('http://www.duzhe.com/search.php/fall/{}'.format(i))
        return urlList
    def getContentUrl(self,indexUrl):
        contentUrl=[]
        for i in indexUrl:
            html=requests.get(i).json()
            for j in html:
                contentUrl.append('http://www.duzhe.com/{}'.format(j['url']))
        return contentUrl
    def getContent(self,contentUrl):
        for i in contentUrl:
            html=requests.post(i,self.headers).content
            soup=BeautifulSoup(html,'lxml')
            content=dict()
            content['title']=soup.find('h1').string
            content['content']=soup.find('div',attrs={'class':'detail_con'})
            print(content)

if __name__=='__main__':
    spider=InitSpider()

    getUrl=spider.getIndexUrl()
    getContentUrl=spider.getContentUrl(getUrl)
    getContent=spider.getContent(getContentUrl)