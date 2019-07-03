# Strange Flask + Safari double request (response?) issue

1. Clone this repo
2. `cd` into it
3. Add the two lines from hosts.example to your `/etc/hosts` file
4. `pipenv --python 3.7`
5. `pipenv install`
6. `yarn install`
7. `./run-server.sh`
8. `yarn run dev`
9. Open Safari and go to https://safari-api-test.development:5050 and accept the certificate
10. Go to https://safari-frontend-test.development:5051 and accept the certificate
11. Refresh the page and observe every request, excluding the first one, to `/test` logged _twice_.

What is happening..?

[Screen recording of the behaviour](https://d.pr/v/1h7iRZ)