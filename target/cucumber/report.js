$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/features/whatsapp.feature");
formatter.feature({
  "line": 1,
  "name": "Search user on whatsapp and send latest message back to user",
  "description": "",
  "id": "search-user-on-whatsapp-and-send-latest-message-back-to-user",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Submit message back to user",
  "description": "",
  "id": "search-user-on-whatsapp-and-send-latest-message-back-to-user;submit-message-back-to-user",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "We access whatsapp web page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Search user on page",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enter a valid last name",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Scroll to bottom of message list",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "copy latest message from user",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "post the latest message to the same user",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});