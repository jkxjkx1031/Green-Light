import scrapy
from datetime import datetime
from scraper.items import CarbonCoinItem


class CarbonCoinSpider(scrapy.Spider):
    name = "cc"
    start_urls = [
        'https://coinmarketcap.com/currencies/carboncoin/historical-data/'
    ]

    def parse(self, response):
        flag = getattr(self, 'flag', None)
        for entry in response.css('tr.text-right'):
            fields = entry.css('td::text').getall()
            item = CarbonCoinItem()
            item['date'] = datetime.strptime(fields[0], '%b %d, %Y').date()
            item['close'] = fields[4]
            yield item
            if flag is None:
                break
