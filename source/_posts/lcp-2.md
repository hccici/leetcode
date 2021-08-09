---
title: LCP 02. 分式化简
date: 2021-08-09 15:24:30
categories:
- LCP
---
[传送门](https://github.com/hccici/leetcode/tree/main/source/code/%E5%89%91%E6%8C%87offer)

发现规律就好：   
1、设每一步的计算为：`a + 1 / (temp)`,temp 为上一步计算好的结果。   
2、初始化temp的值，从数组中倒数第二项开始遍历，依次计算结果。   
3、最后得到最后结果返回。

{% include_code lang:javascript LCP/2.js %}
