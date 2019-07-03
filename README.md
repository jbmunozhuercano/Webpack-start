# Webpack-start

Webpack initial configuration with babel and sass.

## Steps
* Clone or download repo.
* Install dependencies:
```
npm install
```
* For development mode use:
```
npm run dev
```
* For production mode use:
```
npm run prod
```

### GNU/Linux systems automatic reload

In order to work the auto reload in some GNU/Linux systems do the following:

1. Add next line to either '/etc/systctl.conf' file or a new *.conf file under '/etc/sysctl.d/' directory:
```
fs.inotify.max_user_watches = 524288
```
2. Then, run this command to apply the change:
```
sudo sysctl -p --system
```
