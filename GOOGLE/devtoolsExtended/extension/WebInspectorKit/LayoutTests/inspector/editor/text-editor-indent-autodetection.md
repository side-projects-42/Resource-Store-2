This test checks text editor indent autodetection functionality

————–TEST 1————–

    function foo() {
            return 42;
    }

————–TEST 2————–

    console.log("Hello!");

————–TEST 3————–

    /**
     * This is a header comment that spans
     * for a lot of lines
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     */
    function foo() {
      return 42;
    }

————–TEST 4————–

    function MyClass()
    {
        this._foo = "bar";
    }

    MyClass.prototype = {
        method1: function()
        {
            var sum = 0;
            for(var i = 0; i < 100; ++i) {
                sum += i;
            }
            return sum;
        },

        method2: function()
        {
            while(true) {
                break;
            }
        },
    }

————–TEST 5————–

      a
      a
        b
        b
        b
    c
    c

————–TEST 6————–

        tab
            tab
        tab
        tab

————–TEST 7————– (empty content)

————–TEST 8————–

    function foo() {
      var i = 0;
      function bar() {
        var a = [];
        a.push(1);
        a.push(12);
        a.push(42);
        a.push(44);
        return a.join("!");
      }

      (function() {
        var a = {
          a: function() {
            vbr b = [];
            b.push(1);
            b.push(12);
            b.push(42);
            b.push(44);
            b.push(44 * 2);
            return b.join("?");
          }
        };
      })();
    }
