\#{extends 'main.html' /} \#{set title:'Home' /}

# It works !

\#{include './inc1.html' /} \#{form action:@hello(), id:'form'} \#{/form} \#{form action:@yop()} \#{if params.yop} ${9/0} \#{/if} \#{/form} ${'Coucou'.up()} \#{form action:@aGetForm()} \#{/form} \#{render 'Application/kiki.html', a:'Hello', b:9 /}

<a href="@%7Bsample.Photo.index()%7D" id="wp1">with package</a>, <a href="@%7Badmin.Test.index()%7D" id="wp2">with package 2</a>, \#{a @@admin.Test.index(), id:'wp3'}with package 3\#{/a}

\#{include './inc2.html' /}

## 1: @@{'/public2/assets1/hello.html'}

## 2: @{'/public2/assets1/hello.html'}

## 3: @@{'/public2/assets2/hello.html'}

## 4: @{'/public2/assets2/hello.html'}

## 5: @@{'/public/image.gif'}

## 6: @{'/public/image.gif'}

## 7: @{Application.helloZen()}

## 8: @@{Application.helloZen()}

## 9: @{Application.index()}

## 10: @@{Application.index()}

## 11: @{Application.myHomePage('bob')}

## 12: @@{Application.myHomePage('bob')}

## 13: @@{Application.showIt()}

## 14: @@{Application.ok('titi')}

## 15: @@{Application.ok(123)}

## 16: @@{Application.ok(12345)}

## 17: @@{Application.ok('A')}

## 18: @@{Application.ok('TITI')}

## 19: @@{Application.imagesAssets()}
