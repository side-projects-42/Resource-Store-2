\#{set title:'Your application is ready !' /} \#{if play.mode.toString() == 'DEV'} \#{set 'moreStyles'} \#{/set}

![](@%7B'/public/playmanual/logo.png'%7D)

## Play ${play.version}

## Browse

- <span id="gotoc">[Local documentation](/@documentation/home)</span>
- <span id="goapi">[Browse Java API](/@api/index.html)</span>

## Contents

\#{if modules}

## Installed modules

- [${module}](modules/$%7Bmodule%7D/home) \#{if apis.contains(module)} — [Browse API](/@api/-$%7Bmodule%7D/index.html) \#{/if}

\#{/if}

## Search

Get help with google

# Your new application is ready!

Congratulation, you've just created a new play application. This page will help you in the few next steps.

## Why do you see this page?

The **conf/routes** file defines a route that tell play to invoke the **Application.index** action when a browser requests the **/** URI using the **GET** method:

    # Application home page
    GET     /         Application.index

So play has invoked the **controllers.Application.index()** method:

    public static void index() {
        render();
    }

Using the **render()** call, this action asks play to display a template. By convention play has displayed the **app/views/Application/index.html** template:

    #{extends 'main.html' /}
    #{set title:'Home' /}

    #{welcome /}

This template extends the **app/views/main.html**, and uses the **\#{welcome /}** tag to display this welcome page.

## Need to set up a Java IDE?

You can start right now to hack your application using any text editor. Any changes will be automatically realoaded at the next page refresh, including modifications made to Java sources files.

If you want to set up your application in **Eclipse**, **Netbeans** or any other Java IDE, check the [Setting up your preferred IDE](/@documentation/ide) page.

## Need to connect to a database?

You can quickly set up a developement database (either in memory or written to the filesystem), by adding one of these lines to the **conf/application.conf** file:

    # For a transient in memory database (H2 in memory)
    db=mem

    # for a simple file written database (H2 file stored)
    db=fs

If you want to connect to an existing **MySQL5 server**, use:

    db=mysql:user:pwd@database_name

If you need to connect to another JDBC compliant database, first add the corresponding driver library to the **lib/** directory of your application, and add these lines to the **conf/application.conf** file:

    db.url=jdbc:postgresql:database_name
    db.driver=org.postgresql.Driver
    db.user=root
    db.pass=secret

## Need more help?

When your application run in **DEV** mode, you can access directly the current documentation at the [/@documentation](/@documentation) URL or go to <http://www.playframework.org>.

The [Play Google Group](http://groups.google.com/group/play-framework) is where Play users come to seek help, announce projects, and discuss. If you don't have any google account, you can still join the mailing list sending an email to  
**play-framework+subscribe@googlegroups.com**.

\#{/if} \#{else}

# Your application is ready!

\#{/else}
