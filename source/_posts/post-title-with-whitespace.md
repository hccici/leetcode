---
title: post title with whitespace
date: 2021-02-23 17:30:56
tags: [test,i1]
---

{% blockquote hhj,ss %}
content
{% endblockquote %}

{% blockquote Seth Godin http://sethgodin.typepad.com/seths_blog/2009/07/welcome-to-island-marketing.html Welcome to Island Marketing %}
Every interaction is both precious and an opportunity to delight.
{% endblockquote %}

``` javascript hhj https://www.baidu.com baidu
import Vue from 'vue';
import VueI18n from 'vue-i18n';
import locale from 'element-ui/lib/locale';
import messages from './langs';

let defaultLang = (navigator.language || navigator.userLanguage || navigator.language).startsWith('zh') ? 'cn' : 'en';
Vue.use(VueI18n);
const i18n = new VueI18n({
    locale: localStorage.getItem('lang') || defaultLang,
    messages
});

```

{% pullquote me %}
content
{% endpullquote %}

{% include_code lang:javascript test/test.js %}