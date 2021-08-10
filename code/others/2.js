/*
解题思路：
1、假设每个展厅都是去的相同人数，avg = cnt / nums.length，设limit初始为avg，但是在满足人数限制的前提下，每个展厅实际去的人数肯定是<=limit的。
2、为了使参展人数最多，我们可以向上调整limit，满足人数限制的前提下，获得最大的limit。
3、接下来就是怎么调整limit，这里有两个思路：
 (1)如果每次向上+1，这样每次都要计算限制后的和，如果人数相差太大，+1的次数过多，很容易就超时了。这里有个小技巧，不用每次都去循环求和，记录一下还需要调整的数组record（nums[i]>limit）,
 每次调整limit+1时，之前的和加上 record.length就好，同时如果nums[i]<=limit，就从record中去除。
 (2)因为限制的人数不可能超过cnt，所以[avg,cnt]之间是递增的，所以可以使用二分搜索，找到合适的值，减少每次求和的次数。
*/