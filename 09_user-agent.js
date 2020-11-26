const express = require('express');
const app = express();
const useragent = require('express-useragent');

app.use(useragent.express());

app.get('/', (req, res) => {
    res.send(req.useragent);
});

app.listen(3000);

/*
    {
      "isYaBrowser": false,
      "isAuthoritative": true,
      "isMobile": false,
      "isMobileNative": false,
      "isTablet": false,
      "isiPad": false,
      "isiPod": false,
      "isiPhone": false,
      "isiPhoneNative": false,
      "isAndroid": false,
      "isAndroidNative": false,
      "isBlackberry": false,
      "isOpera": false,
      "isIE": false,
      "isEdge": false,
      "isIECompatibilityMode": false,
      "isSafari": false,
      "isFirefox": false,
      "isWebkit": false,
      "isChrome": true,
      "isKonqueror": false,
      "isOmniWeb": false,
      "isSeaMonkey": false,
      "isFlock": false,
      "isAmaya": false,
      "isPhantomJS": false,
      "isEpiphany": false,
      "isDesktop": true,
      "isWindows": false,
      "isLinux": true,
      "isLinux64": true,
      "isMac": false,
      "isChromeOS": false,
      "isBada": false,
      "isSamsung": false,
      "isRaspberry": false,
      "isBot": false,
      "isCurl": false,
      "isAndroidTablet": false,
      "isWinJs": false,
      "isKindleFire": false,
      "isSilk": false,
      "isCaptive": false,
      "isSmartTV": false,
      "isUC": false,
      "isFacebook": false,
      "isAlamoFire": false,
      "isElectron": false,
      "silkAccelerated": false,
      "browser": "Chrome",
      "version": "87.0.4280.66",
      "os": "Linux 64",
      "platform": "Linux",
      "geoIp": {

      },
      "source": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.66 Safari/537.36",
      "isWechat": false
    }
 */