Feature: Search user on whatsapp and send latest message back to user

Scenario: Submit message back to user
	Given We access whatsapp web page
	When Search user on page
	When User enter a valid last name
	And Scroll to bottom of message list 
	And copy latest message from user
	Then post the latest message to the same user 
	