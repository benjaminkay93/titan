# Titan

The aim of this project is to build a modern rendering engine that empowers personalisation at scale in a way that no other react framework does. 

It will provide the foundations for you to build a site that is a fully capable PWA out the box.

Allyou have to do is create the config and page content to go with it and boom! you have a website.

## Containers

The whole basis of this framework is that you split up your site into chunks of data fetching concerns and then make those chunks completely agnostic of the things around it. Containers should never require another container to be on the page, and should be capable of exsisting in their own right. This means that you can construct pages per user, to meet whatever you think that user will want on the page.

## Routes

Providing the config to wire containers up on a per route basis allows you to construct pages from data instead of baking your view into a set structure, this will enable you to server different pages depending on the things you know about your user.
