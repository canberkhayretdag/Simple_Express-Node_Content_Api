var express = require('express');
const axios = require('axios')
const cheerio = require('cheerio')


const fetchHTML = async url => {
   
    const { data } = await axios.get(url);
    return data;
 
  
};

const scrapLinks = async (url) => {

  const html = await fetchHTML(url);

  const $ = cheerio.load(html);

  const linkObjects = $('a');
  const links = [];

  linkObjects.each((index, element) => {
      if ($(element).attr('href') != "#") {
          links.push({
              href: $(element).attr('href'),
          });            
      }
  });

  return links

};

const scrapJS = async (url) => {

  const html = await fetchHTML(url);

  const $ = cheerio.load(html);

  const jsObjects = $('script');
  const scripts = [];
  
  jsObjects.each((index, element) => {
      if ($(element).attr('src') != "#" && $(element).attr('src') != null) {
          scripts.push({
              src: $(element).attr('src'),
          });            
      }
  });

  return scripts
  
}

const scrapImages = async (url) => {

  const html = await fetchHTML(url);

  const $ = cheerio.load(html);

  const imgObjects = $('img');
  const images = [];
  
  imgObjects.each((index, element) => {
      if ($(element).attr('src') != "#" && $(element).attr('src') != null) {
          images.push({
              src: $(element).attr('src'),
          });            
      }
  });

  return images      
}

exports.scrapImages = scrapImages;
exports.scrapJS = scrapJS;
exports.scrapLinks = scrapLinks;