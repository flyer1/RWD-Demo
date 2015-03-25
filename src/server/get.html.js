
var http = require('http');
var http = require('http');
var fs =require('fs');
var cheerio = require('cheerio');
console.log('hello');


var urlData = getUrls();
for (var i =0; i<urlData.length; i++)
{	
	var fileName ='content-html/' + urlData[i].code +'.html';	
	getHtmlFragment(urlData[i].url, fileName, 'content-first-section', function (html, fileName) {		
		console.log(fileName);			
		fs.writeFile(fileName, html);
	});
}




function getHtmlFragment(url, fileName, fragmentSelector, callback) {

    var request = http.get(url,
        function (res) {
            //console.log("Got response: " + res.statusCode);

            var data = "";
            res.on('data', function (chunk) {
                data += chunk;                
            });
            res.on('end', function () { 
				var $ = cheerio.load(data);
				var fragment = $('.' + fragmentSelector).html();
			
				callback(fragment, fileName); 
			});

        }).on('error', function(e) {
        console.log("Got error: " + e.message);
    });
}

function getUrls()
{
	var result =
		[
{
	code: 'business',
	name: 'Business',
	url: 'http://198.163.10.175/business/index.html'
},
{
	code: 'starting-a-business',
	name: 'Starting a Business',
	url: 'http://198.163.10.175/business/startingsmart/index.html'
},
{
	code: 'business-research',
	name: 'Business Research',
	url: 'http://198.163.10.175/business/businessresearch/index.html'
},
			{
				code: 'business-counselling-and-mentoring',
				name: 'Business Counselling and Mentoring',
				url: 'http://198.163.10.175/business/counselling/index.html'
			},
			{
				code: 'financing-a-business',
				name: 'Financing a Business',
				url: 'http://198.163.10.175/business/financing/index.html'
			},
			{
				code: 'registration-legal-and-icensing',
				name: 'Registration, Legal and Licensing',
				url: 'http://198.163.10.175/business/registration/index.html'
			},
			{
				code: 'taxes-and-tax-incentives',
				name: 'Taxes and Tax Incentives',
				url: 'http://198.163.10.175/business/taxes/index.html'
			},
			{
				code: 'doing-business-with-government',
				name: 'Doing Business with Government',
				url: 'http://198.163.10.175/business/doingbusiness/index.html'
			},
			{
				code: 'conduct-business-online',
				name: 'Conduct Business Online',
				url: 'http://198.163.10.175/business/online/index.html'
			},
			{
				code: 'business-development',
				name: 'Business Development',
				url: 'http://198.163.10.175/business/businessdevelopment/index.html'
			},
			{
				code: 'human-resources-for-employers',
				name: 'Human Resources for Employers',
				url: 'http://198.163.10.175/business/humanresources/index.html'
			},
			{
				code: 'exporting',
				name: 'Exporting',
				url: 'http://198.163.10.175/business/exporting/index.html'
			},
			{
				code: 'entrepreneurs',
				name: 'Entrepreneurs',
				url: 'http://198.163.10.175/business/entrepreneurs/index.html'
			},
			{
				code: 'investing-in-manitoba',
				name: 'Investing in Manitoba',
				url: 'http://198.163.10.175/business/investing/index.html'
			},
			{
				code: 'manufacturing',
				name: 'Manufacturing',
				url: 'http://198.163.10.175/business/manufacturing/index.html'
			},
			{
				code: 'operating-a-business',
				name: 'Operating a Business',
				url: 'http://198.163.10.175/business/operating/index.html'
			},
		];	
		
	return result;
}