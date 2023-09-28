### hs-css约定
> 1. 0开头代表小数
> 2. 00开头代表百分号
> 3. 数字(包括0)代表实际值，如未特别说明，单位均为px
> 4. 数字步长，如未特别说明，默认均为5

### 一、网格布局
**1.1、类参数说明：**

``` css
hs-list-col-[2-12] 网格式布局基类，步长1
hs-list-col-gap-[5-30] 单元格列间距(左右间距),位置与hs-list-col-[2-12]类同级
```

**1.2、示例：**

``` html 
<div class="hs hs-list-col-3 hs-list-col-gap-15">
	<ul>
		<li>
			单元格1
		</li>
		<li>
			单元格2
		</li>
		<li>
			单元格3
		</li>
	</ul>
</div>
```

### 二、对齐
#### 2.1、flex对齐方式
**2.1.1、基础语法**
``` css
hs-[row,col]-[start,center,end,between,around]-[start,center,end,stretch,baseline]
```

**start** 与父元素开头对齐

**center** 与父元素中心对齐

**end** 与父元素尾部对齐

**between** 与父元素两端对齐，子元素之间间隙均匀分布

**around** 与父元素带间隙对齐，子元素之间间隙均匀分布

**stretch** 父元素设置了高度，子元素未设置高度，将子容器拉伸和父容器一样高

**baseline** 使全部子元素与最高的子元素底部对齐

**2.1.2、示例：**

``` html
<div class="hs-row-start-center hs-height-300 hs-border-1-solid-gray">
	<div >
		子元素1
	</div>
	<div >
		子元素2
	</div>
	</div>
```
#### 2.2、垂直对齐类
> 注：主要用于table的单元格元素

**2.2.1、垂直对齐类名**

``` css
hs-vertical-align-top 顶对齐
hs-vertical-align-middle 上下居中对齐
hs-vertical-align-bottom 底部对齐
```

**2.2.2、示例**

``` html
<table>
	<tr><td class="hs-height-100 hs-vertical-align-middle hs-border-1-solid-gray">子元素1</td></tr>
</table>
```
#### 2.3、定位居中对齐
> 注：主要用于弹框

**2.3.1、类名**

``` css
hs-absolute-center 定位居中对齐
```

**2.3.2、示例**

``` html
<div class="hs-absolute-center hs-width-100 hs-height-100 hs-border-1-solid-gray">
	弹框
</div>
```

### 三、元素类型
#### 3.1、元素类型设置
``` css
hs-display-[block,inline-block,inline, flex, inline-flex, table]
```
#### 3.2、弹性盒子
> 注：内边距和边框包含在高度内
``` css
hs-box-sizing-border-box
```
#### 3.3、浮动
**3.3.1、浮动类型**

``` css
hs-float-[left,right,none]
```
**3.3.2、清除浮动**

``` css
hs-clear-both
```
#### 3.4、溢出控制
``` css
hs-overflow-[x,y]-[hidden,scroll,auto]
```
#### 3.5、滚动条隐藏
``` css
hs-scrollbar-none
```

### 四、文本
#### 4.1、文本对齐方式
``` css
hs-text-align-[left,center,right,justify]
```
#### 4.2、文本缩进

>  注：[1,2] = [1em- 2em]

``` css
hs-text-indent-[1,2]
```
#### 4.3、字体加粗
``` css
hs-font-weight-bold
```
#### 4.4、文本装饰
``` css
hs-text-decoration-[underline,overline,line-through,none]
```
#### 4.5、文本不换行
``` css
hs-white-space-nowrap
```
#### 4.6、溢出文本显示省略号
``` css
hs-text-overflow-ellipsis-[1-6]
```
#### 4.7、字体大小
>注： [0.1-5] = [0.1em- 5em]
``` css
hs-font-size-[01-5]
```
#### 4.8、字体禁止选中
``` css
hs-user-select-none
```

### 五、定位
#### 5.1、定位类型
``` css
hs-position-[absolute,relative,fixed]
```
#### 5.2、定位层级设置
> 注：hs-z-index-后数字代表z-index实际值
``` css
hs-z-index-[1,10,100,1000,10000]
```


### 六、边距
#### 6.1、外边距

> 注：负数[-1--4, -5--100]仅对"margin-direction"单边距有效

``` css
hs-margin-auto
hs-margin-[top,right,bottom,left]-[1-4,-1--4,5-100,-5--100]
```
#### 6.2、内边距
``` css
hs-padding-[top,right,bottom,left,left-right,top-bottom]-[1-4,5-100]
```
#### 6.3、定位边距
``` css
hs-[top,right,bottom,left]-[0-4,-1--4,5-100,-5--100,005-00100,-005--00100]
```
#### 6.4、宽度 高度
``` css
hs-width-[0-4]
hs-[min,max]-width-[5-1200,005-00100]
hs-height-[0-4]
hs-[min,max]-height-[5-500,005-00100]
hs-line-height-[5-500]
```

### 七、装饰
#### 7.1、圆角 
``` css
border-radius-00100
hs-border-[top-left,top-right,bottom-right,bottom-left]-radius-[5,10,15]
```
#### 7.2、边框
**7.2.1、完整边框**
``` css
hs-border-1-[top,right,bottom,left]-[dotted,dashed,solid]-gray-[01-09]
```
**7.2.2、仅边框宽度和边框类型**
``` css
hs-border-[top,right,bottom,left]-[1-5]-[dotted,dashed,solid]
```
**7.2.3、仅边框颜色**

``` css
hs-[hover]-border-color-[black, blue, gray, green, red, white, yellow]-[01-09]
```
**7.2.4、无边框**

``` css
hs-border-[top,right,bottom,left]-none
```

#### 7.3、透明度
``` css
hs-opacity-[01-09]
```
#### 7.4、阴影
``` css
hs-[text,box]-shadow-[0-1]-[0-1]-[5,10,15]-black-[01-03]
hs-box-shadow-inset-[0-1]-[0-1]-[5,10,15]-black-[01-03]
```
#### 7.5、全屏半透明遮罩
``` css
hs-screen-shade-box
```
#### 7.6、图片滤镜

``` css
hs-filter-grayscale-00100; /* 褪色效果为100% */
```



### 八、颜色

#### 8.1、字体颜色
``` css
hs-color-transparent
hs-color-[black, blue, gray, green, red, white, yellow,primary,success,warning,danger,info]-[01-09]
```
#### 8.2、背景色
``` css
hs-background-color-transparent
hs-background-color-[black, blue, gray, green, red, white, yellow,primary,success,warning,danger,info]-[01-09]
```
#### 8.3、自定义用户颜色
``` css
hs-color-user  字体颜色, 依赖用户颜色变量：--hs-color
hs-background-color-user  背景颜色, 依赖用户颜色变量：--hs-background-color
hs-border-color-user  边框色, 依赖用户颜色变量：--hs-border-color
hs-placeholder-color-user  输入框 placeholder 色, 依赖用户颜色变量：--hs-placeholder-color
```
**示例：**
**用户自定义颜色：**

```css
<style>
    :root{
        --hs-color: #C21807;
        --hs-background-color:#C21807;
        --hs-border-color:#C21807;
        --hs-placeholder-color:#C21807;
    }
</style>

```
**用户使用自定义颜色：**

用户自定义字体颜色 可在行内元素style内重新定义进行覆盖

```html
<div class="hs-color-user">我显示#C21807色</div>
<div style="--hs-color: red;" class="hs-color-user">
	显示自定义颜色
</div>
```


### 九、动画
#### 9.1、执行时间
> 注：[01-09] = [0.1s-0.9s]
``` css
hs-transition-[01-09]
```
#### 9.2、 x轴或y轴平移
``` css
hs-transform-[translateX,translateY]-[005-00100]
```
#### 9.3、 缩放

> 注：[01-09,0101-0109] = [0.1-0.9,1.1-1.9]缩放比例

``` css
hs-transform-scale-[01-09,0101-0109]
```
#### 9.4、旋转

> 注：[45,90,180,-45,-90,-180]内单位为deg(角度)

``` css
hs-transform-rotate-[45,90,180,-45,-90,-180]
```

​	
​	