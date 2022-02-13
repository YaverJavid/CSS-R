# CSS-R
A program that helps you to write classes like talwind.css but it generates a custom stylesheet based on the classnames when the user runs website.


# CSS-R #

# Rules: 
* EACH CSSR Class Has Three Parts Each Seprated by dash(-).
* Parts are :
   - KEYWORD : FOR RECOGNITION .
   - PROPERTY : CSS PROPERTY(every property except properties with dashes in it) OR ITS VALID SHORT FORM.
   - VALUE : CSS VALUE OR VALID CSSR VALUE.
   - Example : `cssr-bg-H666666`
   
       * `cssr` : default keyword
       * `bg` : cssr property for background colour.
       * `H666666` : cssr hex color(H SYMBOLISES #).
* Changing `keyword` : Just change the `cssr.KEYWORD` to your value in `cssr.js` file. Value must be string of from A to B & a to b. Default value is `cssr`.
* CSS VARIBLES : To use css varible in class use `VARyourCssVarible` i.e. add `VAR` before varible name. Css varibles having dashes or symbols in it are not supported.
* Valid cssr property short forms list :
* 
  - Cssr--------Css
  

  - bg----------background-color
  - m-----------margin
  - p-----------padding
  - c-----------color
  - bla bla bla.....
* Spaces in values must be replaced with `_`. eg; 
 ``` css
 cssr-b-1px_solid_black
 ```
* `-` as negative will be`NEG`. eg;
```css
cssr-z-NEG6
```
* Use `P` for decimal point (`.`).eg;
```css
cssr-p-6P8
```
* `⚠ ` Add `IM` at the end of value to make it Important [[Not Recommended]] eg;
```css
cssr-p-6P8IM
```
