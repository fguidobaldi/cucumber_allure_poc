# cucumber_allure_poc

PoC of allure-js (v.2.0.0-beta.18) and Cucumber 8.

Only for debugging purposes.

## Execution steps

```
git checkout <master | test/allure_v2.0.0-beta.18>
npm test
npm run report
```

Run `npm test` to execute all scenarios, and then `npm run report` to generate Allure report. I use this script in my original code to generate one single html file, because I faced issues opening original report in Chrome.

In `master` branch, with allure-cucumberjs v2.0.0-beta.9 and cucumber 6, it works fine.

In `test/allure_v2.0.0-beta.18`, using allure-cucumberjs v2.0.0-beta.18 and cucumber 8, startStep function is not working (and the scenario fails).
