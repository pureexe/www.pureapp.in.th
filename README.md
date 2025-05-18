# pureapp-jekyll
This is [Pure's app](https://www.pureapp.in.th) blog. porting from blogger to Jekyll

## About
[Pure's app](https://www.pureapp.in.th) is personal blog about tech and science by [Pakkapon Phongthawee](https://me.pureappp.in.th)


## Pre-requirement 

1. Install [Ruby 3.3.8-1](https://rubyinstaller.org/downloads/). 

Please note that Jekyll 3.10.0 that Github pages used doesn't support modern Ruby (3.4 or newer) We have to keep to used old version until Github pages update the jekyll.

## Setup 

We already to switch to bundler 

```
bundle config set --local path 'vendor/bundle'  
bundle install
bundle exec jekyll serve --drafts
```

## Production environment for powershell 
```
$env:JEKYLL_ENV="production"
bundle exec jekyll serve 
```