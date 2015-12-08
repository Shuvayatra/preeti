## preeti

Preeti is a popular font used in Nepal to write Nepali text

Without Preeti font, the text is just ASCII, so this module converts it to Unicode Devanagari characters.

### Usage

```javascript
preeti('sf7df08"');
> 'काठमाण्डू'
```

#### In NodeJS

```javascript
preeti = require('preeti');
preeti('sf7df08"');
```

#### Other fonts

You also can use converters for PCS Nepali and Kantipur by providing a second parameter.

```javascript
preeti('sf7df08"', 'PCS Nepali');
preeti('sf7df08"', 'Kantipur');
```

### Original Shell and JS code

This project is based on code and regular expressions from the <a href="https://github.com/foss-np">FOSS Nepal</a> community

- <a href="https://github.com/foss-np/2utf8">2utf8</a> a Bash command
- <a href="https://github.com/sapradhan/nep-ttf2utf">nep-ttf2utf</a> a JS and Python3 port by sapradhan

### License

Creative Commons Attribution Non-Commerical Share-Alike
