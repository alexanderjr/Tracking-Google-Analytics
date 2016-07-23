# Tracking Google Analytics

![Google Analytics](http://www.brandsoftheworld.com/sites/default/files/styles/logo-thumbnail/public/052013/google_analytics_oficial.png?itok=PDW-zq0g)

This is a code to map elements in page it will trigger some goal previously configured in Google Analytics.

How to use step by step

1 - Put in your page the GA tracking code

	<script>

	  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

      ga('create', 'UA-XXXXX-X', 'auto');
      ga('send', 'pageview');

    </script>

2 - Import in your page the tracking.js
	<script src="tracking.js"></script>

3 - Map element in your HTML using data attributes and it will works fine!
	<button type="button" data-description="Click in button" data-event="click" data-definition='{"eventCategory": "banner", "eventAction": "click", "eventLabel": "banner_170716"}'>Click Here</button>

-----------------

Documentation from data options

data-event       = the event will trigger the G.A goal  
data-description = description trigger in console meessage when the event was triggered
data-definition  = object contains the config goal previously config in Analytics, it's necessessary use notation JSON or the code will trigger error in console
data-function    = if you trigger the goal if some condition was satisfied (must return true to trigger G.A Goal), you can use use this option, like data-function="scrollArriveAtEndOfPage"

FAQ

1 - How to map many events in same element ? Answer : You can use in the data-definition array notation with objects
	
	<button type="button" data-description="Goal : Tracking Something" data-definition='[{"event" : "click", "eventCategory": "banner", "eventAction": "click", "eventLabel": "clicked_button"},{"event" : "mouseover","eventCategory": "banner", "eventAction": "click", "eventLabel": "mouseover_button"}]'>Clique Here</button>

	If you use this notation, it's not necessary data-function and data-event

2 - How to attribute event in window ? Answer: Introduce the data-attrs in html tag
